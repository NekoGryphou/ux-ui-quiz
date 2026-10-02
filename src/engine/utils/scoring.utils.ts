import type { Answer, ChoiceOutcome, HotspotResults, Quiz } from "../types/quiz.types";
import { optionsOf } from "./quiz.utils";

export const isCorrect = (quiz: Quiz, answer: Answer | undefined): boolean => {
  if (answer?.submitted !== true) return false;
  const selected: Set<string> = new Set(answer.selected);
  return selected.size === quiz.correct.length && quiz.correct.every((id) => selected.has(id));
};

export const choiceOutcome = (quiz: Quiz, answer: Answer | undefined, choiceId: string): ChoiceOutcome => {
  if (answer?.submitted !== true) return "neutral";
  const isSelected: boolean = answer.selected.includes(choiceId);
  const isRight: boolean = quiz.correct.includes(choiceId);
  if (isSelected && isRight) return "correct";
  if (isSelected) return "wrong";
  if (isRight) return "missed";
  return "neutral";
};

export const hotspotResults = (quiz: Quiz, answer: Answer): HotspotResults | null => {
  if (quiz.kind !== "hotspot" || !answer.submitted) return null;
  const labelsWith = (outcome: ChoiceOutcome): string[] =>
    optionsOf(quiz)
      .filter((option) => choiceOutcome(quiz, answer, option.id) === outcome)
      .map((option) => option.text);
  return { correct: labelsWith("correct"), wrong: labelsWith("wrong"), missed: labelsWith("missed") };
};
