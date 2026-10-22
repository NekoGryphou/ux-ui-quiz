import type { RunKind } from "../../engine/types/run.types";

/**
 * @export
 * @desc Name of each run kind in buttons and dialogs.
 */
export const RUN_LABELS: Readonly<Record<RunKind, string>> = {
  full: "quiz",
  quick: "Quick 10",
  retry: "retry"
};
