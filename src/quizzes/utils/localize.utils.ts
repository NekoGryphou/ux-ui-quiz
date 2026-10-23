import type { Choice, Quiz, QuizLink, QuizVisualLoader } from "../../engine/types/quiz.types";
import { pick } from "../../shared/locale.svelte";
import type { ChoiceSource, LinkSource, QuizSource, QuizStructure } from "../types/quiz-source.types";

/**
 * @private
 * @desc Builds a choice whose text follows the current language.
 *
 * @param choice - Choice source.
 *
 * @returns The localized choice.
 */
const localizeChoice = (choice: ChoiceSource): Choice => ({
  id: choice.id,
  get text(): string {
    return pick(choice.text);
  }
});

/**
 * @private
 * @desc Builds a link whose label follows the current language.
 *
 * @param link - Link source.
 *
 * @returns The localized link.
 */
const localizeLink = (link: LinkSource): QuizLink => ({
  url: link.url,
  get label(): string {
    return pick(link.label);
  }
});

/**
 * @private
 * @desc Builds the language-independent part of a quiz.
 *
 * @param source - Quiz source.
 *
 * @returns The quiz structure, with localized options and links.
 */
const structureOf = (source: QuizSource): QuizStructure => {
  const common: Pick<QuizStructure, "id" | "motion" | "links"> = {
    id: source.id,
    ...(source.motion === undefined ? {} : { motion: source.motion }),
    ...(source.links === undefined ? {} : { links: source.links.map(localizeLink) })
  };
  switch (source.kind) {
    case "single":
      return { ...common, kind: source.kind, correct: source.correct, choices: source.choices.map(localizeChoice) };
    case "multiple":
      return { ...common, kind: source.kind, correct: source.correct, choices: source.choices.map(localizeChoice) };
    case "hotspot":
      return { ...common, kind: source.kind, correct: source.correct, regions: source.regions.map(localizeChoice) };
    case "compare":
      return {
        ...common,
        kind: source.kind,
        correct: source.correct,
        ...(source.layout === undefined ? {} : { layout: source.layout })
      };
  }
};

/**
 * @export
 * @desc Builds a quiz whose text follows the current language.
 *
 * @param source - Quiz source.
 * @param loadVisual - Lazy mock loader.
 *
 * @returns The localized quiz.
 */
export const localizeQuiz = (source: QuizSource, loadVisual: QuizVisualLoader): Quiz => ({
  ...structureOf(source),
  loadVisual,
  get title(): string {
    return pick(source.title);
  },
  get principle(): string {
    return pick(source.principle);
  },
  get scenario(): string {
    return pick(source.scenario);
  },
  get prompt(): string {
    return pick(source.prompt);
  },
  get explanation(): string[] {
    return pick(source.explanation);
  }
});
