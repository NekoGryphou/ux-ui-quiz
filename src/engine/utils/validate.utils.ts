import { MIN_HOTSPOT_DISTRACTORS } from "../const/quiz.const";
import { MAX_CHOICES, MIN_CHOICES } from "../const/validate.const";
import type { Quiz, QuizMeta } from "../types/quiz.types";
import type { QuizRule } from "../types/validate.types";
import { correctIds, optionsOf } from "./quiz.utils";

/**
 * @private
 * @desc Matches CSS animations in mock source code.
 */
const ANIMATION_PATTERN: RegExp = /@keyframes|animation(-name)?\s*:/;

/**
 * @private
 * @desc Matches a heading element in rendered mock markup.
 */
const HEADING_TAG: RegExp = /<h[1-6][\s>]/;

/**
 * @private
 * @desc Captures each data-region id in rendered mock markup.
 */
const REGION_ATTRIBUTE: RegExp = /data-region="([^"]+)"/g;

/**
 * @private
 * @desc Rule: the quiz has an explanation.
 *
 * @param quiz - Quiz to check.
 *
 * @returns Error message or null.
 */
const hasExplanation: QuizRule = (quiz) => (quiz.explanation.length > 0 ? null : "missing explanation");

/**
 * @private
 * @desc Rule: option ids are unique.
 *
 * @param quiz - Quiz to check.
 *
 * @returns Error message or null.
 */
const uniqueOptionIds: QuizRule = (quiz) => {
  const ids: string[] = optionsOf(quiz).map((option) => option.id);
  return new Set(ids).size === ids.length ? null : "duplicate option ids";
};

/**
 * @private
 * @desc Rule: every correct id is an existing option.
 *
 * @param quiz - Quiz to check.
 *
 * @returns Error message or null.
 */
const correctIdsExist: QuizRule = (quiz) => {
  const missing: string | undefined = correctIds(quiz).find(
    (id) => !optionsOf(quiz).some((option) => option.id === id)
  );
  return missing === undefined ? null : `correct id "${missing}" is not an option`;
};

/**
 * @private
 * @desc Rule: choice quizzes offer between {@link MIN_CHOICES} and {@link MAX_CHOICES} choices.
 *
 * @param quiz - Quiz to check.
 *
 * @returns Error message or null.
 */
const choiceCount: QuizRule = (quiz) => {
  if (quiz.kind !== "single" && quiz.kind !== "multiple") return null;
  return quiz.choices.length >= MIN_CHOICES && quiz.choices.length <= MAX_CHOICES
    ? null
    : `needs ${String(MIN_CHOICES)}-${String(MAX_CHOICES)} choices, has ${String(quiz.choices.length)}`;
};

/**
 * @private
 * @desc Rule: hotspots have at least {@link MIN_HOTSPOT_DISTRACTORS} wrong regions.
 *
 * @param quiz - Quiz to check.
 *
 * @returns Error message or null.
 */
const hotspotDistractors: QuizRule = (quiz) => {
  if (quiz.kind !== "hotspot") return null;
  return quiz.regions.length >= quiz.correct.length + MIN_HOTSPOT_DISTRACTORS
    ? null
    : `hotspot needs at least ${String(MIN_HOTSPOT_DISTRACTORS)} more regions than correct ones`;
};

/**
 * @private
 * @desc Tells whether a string is a valid HTTPS URL.
 *
 * @param value - URL to check.
 *
 * @returns True for an HTTPS URL.
 */
const isHttpsUrl = (value: string): boolean => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};

/**
 * @private
 * @desc Rule: every link has a label and an HTTPS URL.
 *
 * @param quiz - Quiz to check.
 *
 * @returns Error message or null.
 */
const validLinks: QuizRule = (quiz) => {
  const broken: string | undefined = (quiz.links ?? []).find(
    (link) => link.label.trim() === "" || !isHttpsUrl(link.url)
  )?.url;
  return broken === undefined ? null : `link "${broken}" needs a label and an https URL`;
};

/**
 * @private
 * @desc Metadata rules every quiz must pass.
 */
const QUIZ_RULES: readonly QuizRule[] = [
  uniqueOptionIds,
  correctIdsExist,
  choiceCount,
  hotspotDistractors,
  hasExplanation,
  validLinks
];

/**
 * @private
 * @desc Reports quiz ids used more than once.
 *
 * @param quizzes - All quizzes.
 *
 * @returns Error messages.
 */
const duplicateIds = (quizzes: readonly QuizMeta[]): string[] =>
  quizzes
    .filter((quiz, index) => quizzes.findIndex((other) => other.id === quiz.id) !== index)
    .map((quiz) => `quiz "${quiz.id}": duplicate id`);

/**
 * @private
 * @desc Runs every data rule on one quiz.
 *
 * @param quiz - Quiz to check.
 *
 * @returns Prefixed error messages.
 */
const ruleErrors = (quiz: QuizMeta): string[] =>
  QUIZ_RULES.map((rule) => rule(quiz))
    .filter((message): message is string => message !== null)
    .map((message) => `quiz "${quiz.id}": ${message}`);

/**
 * @private
 * @desc Returns the ids that appear more than once.
 *
 * @param ids - Ids to scan.
 *
 * @returns Repeated ids, once each.
 */
const repeated = (ids: readonly string[]): string[] => [
  ...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))
];

/**
 * @private
 * @desc Compares declared hotspot regions with those marked in the mock.
 *
 * @param declared - Region ids in the quiz data.
 * @param rendered - Region ids in the markup.
 *
 * @returns Missing, undeclared and repeated region errors.
 */
const hotspotRegionErrors = (declared: readonly string[], rendered: readonly string[]): string[] => [
  ...declared.filter((id) => !rendered.includes(id)).map((id) => `region "${id}" is not marked in the mock`),
  ...rendered.filter((id) => !declared.includes(id)).map((id) => `mock marks undeclared region "${id}"`),
  ...repeated(rendered).map((id) => `region "${id}" is marked more than once`)
];

/**
 * @export
 * @desc Checks quiz data against the authoring rules.
 *
 * @param quizzes - All quizzes.
 *
 * @returns Error messages, empty when valid.
 */
export const validateQuizzes = (quizzes: readonly Quiz[]): string[] => [
  ...duplicateIds(quizzes),
  ...quizzes.flatMap(ruleErrors)
];

/**
 * @export
 * @desc Checks that the motion flag matches whether the mock source animates.
 *
 * @param quiz - Quiz to check.
 * @param source - Mock component source.
 *
 * @returns Error messages.
 */
export const motionErrors = (quiz: QuizMeta, source: string): string[] => {
  const animated: boolean = ANIMATION_PATTERN.test(source);
  if (animated === (quiz.motion === true)) return [];
  const message: string = animated
    ? 'animates but does not declare "motion: true"'
    : 'declares "motion: true" but has no animation';
  return [`quiz "${quiz.id}": ${message}`];
};

/**
 * @export
 * @desc Rejects mocks that render heading elements.
 *
 * @param quiz - Quiz to check.
 * @param markup - Server-rendered mock HTML.
 *
 * @returns Error messages.
 */
export const headingErrors = (quiz: QuizMeta, markup: string): string[] =>
  HEADING_TAG.test(markup) ? [`quiz "${quiz.id}": the mock renders a heading element; use a styled <p> or <div>`] : [];

/**
 * @export
 * @desc Checks the data-region marks in a mock against the quiz's regions.
 * Non-hotspot mocks must mark none.
 *
 * @param quiz - Quiz to check.
 * @param markup - Server-rendered mock HTML.
 *
 * @returns Error messages.
 */
export const markupRegionErrors = (quiz: QuizMeta, markup: string): string[] => {
  const rendered: string[] = [...markup.matchAll(REGION_ATTRIBUTE)].map((match) => match[1] ?? "");
  const errors: string[] =
    quiz.kind === "hotspot"
      ? hotspotRegionErrors(
          quiz.regions.map((region) => region.id),
          rendered
        )
      : [...new Set(rendered)].map((id) => `"${quiz.kind}" quiz marks hotspot region "${id}"`);
  return errors.map((message) => `quiz "${quiz.id}": ${message}`);
};
