import type { Answer, ChoiceOutcome, HotspotResults, Quiz } from "../types/quiz.types";
import { correctIds, optionsOf } from "./quiz.utils";

/**
 * @export
 * @desc Tells whether an answer is submitted and selects exactly the correct options.
 *
 * @param quiz - Answered quiz.
 * @param answer - Learner's answer.
 *
 * @returns True when fully correct.
 */
export const isCorrect = (quiz: Quiz, answer: Answer | undefined): boolean => {
  if (answer?.submitted !== true) return false;
  const selected: Set<string> = new Set(answer.selected);
  const correct: readonly string[] = correctIds(quiz);
  return selected.size === correct.length && correct.every((id) => selected.has(id));
};

/**
 * @export
 * @desc Returns the feedback state of one option.
 *
 * @param quiz - Answered quiz.
 * @param answer - Learner's answer.
 * @param choiceId - Option to grade.
 *
 * @returns Outcome, neutral until submitted.
 */
export const choiceOutcome = (quiz: Quiz, answer: Answer | undefined, choiceId: string): ChoiceOutcome => {
  if (answer?.submitted !== true) return "neutral";
  const isSelected: boolean = answer.selected.includes(choiceId);
  const isRight: boolean = correctIds(quiz).includes(choiceId);
  if (isSelected && isRight) return "correct";
  if (isSelected) return "wrong";
  if (isRight) return "missed";
  return "neutral";
};

/**
 * @export
 * @desc Groups the region labels of a submitted hotspot answer by outcome.
 *
 * @param quiz - Answered quiz.
 * @param answer - Learner's answer.
 *
 * @returns Grouped labels, or null for unsubmitted or non-hotspot quizzes.
 */
export const hotspotResults = (quiz: Quiz, answer: Answer): HotspotResults | null => {
  if (quiz.kind !== "hotspot" || !answer.submitted) return null;
  const labelsWith = (outcome: ChoiceOutcome): string[] =>
    optionsOf(quiz)
      .filter((option) => choiceOutcome(quiz, answer, option.id) === outcome)
      .map((option) => option.text);
  return { correct: labelsWith("correct"), wrong: labelsWith("wrong"), missed: labelsWith("missed") };
};
