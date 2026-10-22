import type { Attempt } from "../../engine/types/run.types";
import type { HistorySegment } from "../types/home.types";

/**
 * @private
 * @desc Plain text segment of the history line.
 *
 * @param text - Displayed text.
 *
 * @returns Non-score segment.
 */
const label = (text: string): HistorySegment => ({ text, score: false });

/**
 * @private
 * @desc Score segment of an attempt, such as 8/10.
 *
 * @param attempt - Attempt to format.
 *
 * @returns Score segment.
 */
const score = (attempt: Attempt): HistorySegment => ({
  text: `${String(attempt.score)}/${String(attempt.total)}`,
  score: true
});

/**
 * @export
 * @desc History line under the home actions, with the scores marked for emphasis.
 *
 * @param best - Best full-run attempt.
 * @param last - Latest full-run attempt.
 *
 * @returns Line segments, or null before any full run.
 */
export const historyLine = (best: Attempt | null, last: Attempt | null): HistorySegment[] | null => {
  if (best === null || last === null) return null;
  if (best.runId === last.runId) return [label("Best and last full run:"), score(best)];
  return [label("Best full run:"), score(best), label("· Last:"), score(last)];
};
