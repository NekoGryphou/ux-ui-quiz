import type { Attempt } from "../../engine/types/run.types";
import { t } from "../../shared/locale.svelte";
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
  if (best.runId === last.runId) {
    return [label(t("Best and last full run:", "Meilleur et dernier quiz complet :")), score(best)];
  }
  return [
    label(t("Best full run:", "Meilleur quiz complet :")),
    score(best),
    label(t("· Last:", "· Dernier :")),
    score(last)
  ];
};
