import type { RunKind } from "../../engine/types/run.types";
import { pick, plural, t } from "../../shared/locale.svelte";
import { ANSWER_FORMS, RUN_LABELS } from "../const/run-label.const";

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
  `${t("Resume", "Reprendre")} ${pick(RUN_LABELS[kind])} · ${String(answered)}/${String(total)}`;

/**
 * @export
 * @desc Confirm-dialog title for abandoning a run.
 *
 * @param kind - Run kind.
 *
 * @returns Text such as "Abandon your Quick 10?".
 */
export const abandonTitle = (kind: RunKind): string =>
  t(`Abandon your ${RUN_LABELS[kind].en}?`, `Abandonner ${RUN_LABELS[kind].fr} ?`);

/**
 * @export
 * @desc Confirm-dialog body for abandoning a run.
 *
 * @param kind - Run kind.
 * @param answered - Answered questions.
 *
 * @returns What will be lost.
 */
export const abandonBody = (kind: RunKind, answered: number): string => {
  const answers: string = `${String(answered)} ${plural(answered, ANSWER_FORMS)}`;
  return t(
    `Only one run can be in progress. Your ${answers} in this ${RUN_LABELS[kind].en} will be cleared.`,
    `Une seule session peut être en cours. ${answers} dans ${RUN_LABELS[kind].fr} ${answered > 1 ? "seront effacées" : "sera effacée"}.`
  );
};
