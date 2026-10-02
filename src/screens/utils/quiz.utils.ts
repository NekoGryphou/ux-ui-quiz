import { href } from "../../app/utils/router.utils";
import type { RunTarget } from "../../app/types/router.types";
import type { QuizKind } from "../../engine/types/quiz.types";
import type { QuizMode, QuizNav } from "../types/quiz-screen.types";

const unitFor = (kind: QuizKind): string => (kind === "hotspot" ? "area" : "answer");

export const checkButtonLabel = (kind: QuizKind, several: boolean, selectedCount: number): string => {
  if (!several || selectedCount === 0) return "Check answer";
  const unit: string = unitFor(kind);
  return selectedCount === 1 ? `Check 1 ${unit}` : `Check ${String(selectedCount)} ${unit}s`;
};

export const quizNav = (mode: QuizMode, target: RunTarget, index: number, total: number): QuizNav => {
  const isLast: boolean = index >= total - 1;
  if (mode === "review") {
    return {
      previous: index > 0 ? href.review(index - 1) : null,
      next: isLast ? href.results("main") : href.review(index + 1),
      nextLabel: isLast ? "Back to results" : "Next"
    };
  }
  return {
    previous: index > 0 ? href.quiz(target, index - 1) : null,
    next: isLast ? href.results(target) : href.quiz(target, index + 1),
    nextLabel: isLast ? "See results" : "Next question"
  };
};
