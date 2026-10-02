import { COMPARE_OPTIONS, MIN_HOTSPOT_DISTRACTORS } from "../const/quiz.const";
import { MAX_CHOICES, MIN_CHOICES } from "../const/validate.const";
import type { Quiz, QuizMeta } from "../types/quiz.types";
import type { QuizRule } from "../types/validate.types";
import { optionsOf } from "./quiz.utils";

const uniqueOptionIds: QuizRule = (quiz) => {
  const ids: string[] = optionsOf(quiz).map((option) => option.id);
  return new Set(ids).size === ids.length ? null : "duplicate option ids";
};

const correctIdsExist: QuizRule = (quiz) => {
  const missing: string | undefined = quiz.correct.find((id) => !optionsOf(quiz).some((option) => option.id === id));
  return missing === undefined ? null : `correct id "${missing}" is not an option`;
};

const choiceCount: QuizRule = (quiz) => {
  if (quiz.kind !== "single" && quiz.kind !== "multiple") return null;
  return quiz.choices.length >= MIN_CHOICES && quiz.choices.length <= MAX_CHOICES
    ? null
    : `needs ${String(MIN_CHOICES)}-${String(MAX_CHOICES)} choices, has ${String(quiz.choices.length)}`;
};

const keyCountMatchesKind: QuizRule = (quiz) => {
  const keys: number = quiz.correct.length;
  switch (quiz.kind) {
    case "single":
      return keys === 1 ? null : "single choice needs exactly one correct id";
    case "multiple":
      return keys >= 2 ? null : 'multiple choice needs at least two correct ids (use "single" otherwise)';
    case "hotspot":
      if (keys < 1) return "hotspot needs at least one correct region";
      return quiz.regions.length >= keys + MIN_HOTSPOT_DISTRACTORS
        ? null
        : `hotspot needs at least ${String(MIN_HOTSPOT_DISTRACTORS)} more regions than correct ones`;
    case "compare":
      return keys === 1 && COMPARE_OPTIONS.some((option) => option.id === quiz.correct[0])
        ? null
        : 'compare needs exactly one correct variant ("a" or "b")';
  }
};

const isHttpsUrl = (value: string): boolean => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};

const validLinks: QuizRule = (quiz) => {
  const broken: string | undefined = (quiz.links ?? []).find(
    (link) => link.label.trim() === "" || !isHttpsUrl(link.url)
  )?.url;
  return broken === undefined ? null : `link "${broken}" needs a label and an https URL`;
};

const hasExplanation: QuizRule = (quiz) => (quiz.explanation.length > 0 ? null : "missing explanation");

const QUIZ_RULES: readonly QuizRule[] = [
  uniqueOptionIds,
  correctIdsExist,
  choiceCount,
  keyCountMatchesKind,
  hasExplanation,
  validLinks
];

const duplicateIds = (quizzes: readonly QuizMeta[]): string[] =>
  quizzes
    .filter((quiz, index) => quizzes.findIndex((other) => other.id === quiz.id) !== index)
    .map((quiz) => `quiz "${quiz.id}": duplicate id`);

const ruleErrors = (quiz: QuizMeta): string[] =>
  QUIZ_RULES.map((rule) => rule(quiz))
    .filter((message): message is string => message !== null)
    .map((message) => `quiz "${quiz.id}": ${message}`);

export const validateQuizzes = (quizzes: readonly Quiz[]): string[] => [
  ...duplicateIds(quizzes),
  ...quizzes.flatMap(ruleErrors)
];

const REGION_ATTRIBUTE: RegExp = /data-region="([^"]+)"/g;

export const markupRegionErrors = (quiz: QuizMeta, markup: string): string[] => {
  if (quiz.kind !== "hotspot") return [];
  const rendered: Set<string> = new Set([...markup.matchAll(REGION_ATTRIBUTE)].map((match) => match[1] ?? ""));
  const declared: Set<string> = new Set(quiz.regions.map((region) => region.id));
  return [
    ...[...declared].filter((id) => !rendered.has(id)).map((id) => `region "${id}" is not marked in the mock`),
    ...[...rendered].filter((id) => !declared.has(id)).map((id) => `mock marks undeclared region "${id}"`)
  ].map((message) => `quiz "${quiz.id}": ${message}`);
};
