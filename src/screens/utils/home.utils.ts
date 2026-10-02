import type { Attempt } from "../../engine/types/run.types";

const scoreText = (attempt: Attempt): string => `${String(attempt.score)}/${String(attempt.total)}`;

export const historyLine = (best: Attempt | null, last: Attempt | null): string | null => {
  if (best === null || last === null) return null;
  return best.runId === last.runId
    ? `Best and last full run: ${scoreText(best)}`
    : `Best full run: ${scoreText(best)} · Last: ${scoreText(last)}`;
};
