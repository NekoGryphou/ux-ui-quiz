import type { RunKind } from "../../engine/types/run.types";
import { RUN_LABELS } from "../const/run-label.const";

/**
 * @export
 * @desc Resume button text, with the run's progress.
 *
 * @param kind - Run kind.
 * @param answered - Answered questions.
 * @param total - Questions in the run.
 *
 * @returns Text such as "Resume Quick 10 · 3/10".
 */
export const resumeLabel = (kind: RunKind, answered: number, total: number): string =>
  `Resume ${RUN_LABELS[kind]} · ${String(answered)}/${String(total)}`;

/**
 * @export
 * @desc Confirm-dialog title for abandoning a run.
 *
 * @param kind - Run kind.
 *
 * @returns Text such as "Abandon your Quick 10?".
 */
export const abandonTitle = (kind: RunKind): string => `Abandon your ${RUN_LABELS[kind]}?`;

/**
 * @export
 * @desc Confirm-dialog body for abandoning a run.
 *
 * @param kind - Run kind.
 * @param answered - Answered questions.
 *
 * @returns What will be lost.
 */
export const abandonBody = (kind: RunKind, answered: number): string =>
  `Only one run can be in progress. Your ${String(answered)} ${answered === 1 ? "answer" : "answers"} in this ${RUN_LABELS[kind]} will be cleared.`;
