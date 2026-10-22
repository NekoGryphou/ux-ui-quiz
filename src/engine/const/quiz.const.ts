import type { CompareChoice } from "../types/quiz.types";

/**
 * @export
 * @desc Minimum number of wrong regions a hotspot quiz must offer.
 */
export const MIN_HOTSPOT_DISTRACTORS: number = 3;

/**
 * @export
 * @desc The two answer options of every compare quiz.
 */
export const COMPARE_OPTIONS: readonly CompareChoice[] = [
  { id: "a", text: "Version A" },
  { id: "b", text: "Version B" }
];
