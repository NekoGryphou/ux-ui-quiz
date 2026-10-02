import type { RunKind } from "../../engine/types/run.types";
import type { Verdict } from "../types/results.types";

export const RING_RADIUS: number = 52;
export const RING_LENGTH: number = 2 * Math.PI * RING_RADIUS;

export const VERDICTS: readonly Verdict[] = [
  { minRatio: 0.85, text: "Sharp eye. You'd catch most of these in review." },
  { minRatio: 0.6, text: "Solid instincts. A few principles are worth revisiting." }
];

export const FALLBACK_VERDICT: string = "Good start. Revisit the questions below, then try again.";

export const RUN_EYEBROWS: Readonly<Record<RunKind, string>> = {
  full: "Your results",
  retry: "Retry: the ones you missed",
  quick: "Quick 10"
};
