import type { Choice } from "../types/quiz.types";

export const COMPARE_OPTIONS: readonly Choice[] = [
  { id: "a", text: "Version A" },
  { id: "b", text: "Version B" }
];

export const MIN_HOTSPOT_DISTRACTORS: number = 3;
