import type { Answer, Quiz } from "../../engine/types/quiz.types";
import type { Attempt } from "../../engine/types/run.types";
import { isCorrect } from "../../engine/utils/scoring.utils";
import { FALLBACK_VERDICT, VERDICTS } from "../const/results.const";
import type { ReviewStatus, RingState } from "../types/results.types";

const plural = (count: number, word: string): string => `${String(count)} ${word}${count === 1 ? "" : "s"}`;

export const ringState = (score: number, answered: number, total: number, complete: boolean): RingState => {
  if (complete) {
    const percent: string = `${String(Math.round((score / total) * 100))}%`;
    return { value: score / total, text: percent, label: `${percent} correct` };
  }
  return {
    value: answered / total,
    text: `${String(answered)}/${String(total)}`,
    label: `${String(answered)} of ${String(total)} answered`
  };
};

export const verdict = (score: number, answered: number, total: number, complete: boolean): string => {
  if (!complete) return `${plural(total - answered, "question")} left. Pick up where you stopped.`;
  const ratio: number = score / total;
  return VERDICTS.find((entry) => ratio >= entry.minRatio)?.text ?? FALLBACK_VERDICT;
};

export const reviewStatus = (quiz: Quiz, answer: Answer | undefined): ReviewStatus => {
  if (answer?.submitted !== true) return "skipped";
  return isCorrect(quiz, answer) ? "correct" : "wrong";
};

export const deltaText = (current: Attempt | null, previous: Attempt | null): string | null => {
  if (current === null || previous === null) return null;
  const delta: number = Math.round((current.score / current.total - previous.score / previous.total) * 100);
  if (delta === 0) return "Same score as your previous full run.";
  return `${delta > 0 ? "+" : ""}${String(delta)} points vs your previous full run (${String(previous.score)}/${String(previous.total)}).`;
};

export const previousFullAttempt = (attempts: readonly Attempt[], runId: string): Attempt | null => {
  const index: number = attempts.findIndex((attempt) => attempt.runId === runId);
  const before: readonly Attempt[] = index === -1 ? attempts : attempts.slice(0, index);
  return before.filter((attempt) => attempt.kind === "full" && attempt.runId !== runId).at(-1) ?? null;
};
