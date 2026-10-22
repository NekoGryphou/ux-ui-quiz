import { COMPARE_OPTIONS } from "../const/quiz.const";
import type { Choice, CompareChoice, Quiz, QuizMeta } from "../types/quiz.types";

/**
 * @export
 * @desc Returns the correct option ids of a quiz.
 *
 * @param quiz - Quiz to read.
 *
 * @returns Correct option ids.
 */
export const correctIds = (quiz: Quiz | QuizMeta): readonly string[] => quiz.correct;

/**
 * @export
 * @desc Returns the selectable options of any quiz kind.
 *
 * @param quiz - Quiz to read.
 *
 * @returns Choices, regions or {@link COMPARE_OPTIONS}.
 */
export const optionsOf = (quiz: Quiz | QuizMeta): readonly Choice[] => {
  switch (quiz.kind) {
    case "single":
    case "multiple":
      return quiz.choices;
    case "hotspot":
      return quiz.regions;
    case "compare":
      return COMPARE_OPTIONS;
  }
};

/**
 * @export
 * @desc Tells whether a quiz accepts several selected options.
 *
 * @param quiz - Quiz to check.
 *
 * @returns True for multiple quizzes and multi-answer hotspots.
 */
export const allowsSeveral = (quiz: Quiz | QuizMeta): boolean =>
  quiz.kind === "multiple" || (quiz.kind === "hotspot" && quiz.correct.length > 1);

/**
 * @export
 * @desc Type guard for compare quiz options.
 *
 * @param choice - Option to check.
 *
 * @returns True when the option is a compare variant.
 */
export const isCompareChoice = (choice: Choice): choice is CompareChoice =>
  COMPARE_OPTIONS.some((option: CompareChoice): boolean => option.id === choice.id);
