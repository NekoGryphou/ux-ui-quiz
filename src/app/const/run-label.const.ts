import type { RunKind } from "../../engine/types/run.types";
import type { Localized } from "../../shared/types/locale.types";

/**
 * @export
 * @desc Name of each run kind in buttons and dialogs.
 */
export const RUN_LABELS: Readonly<Record<RunKind, Localized<string>>> = {
  full: { en: "quiz", fr: "le quiz" },
  quick: { en: "Quick 10", fr: "le Quick 10" },
  retry: { en: "retry", fr: "le rattrapage" }
};

/**
 * @export
 * @desc Singular and plural forms of "answer".
 */
export const ANSWER_FORMS: Localized<readonly [string, string]> = {
  en: ["answer", "answers"],
  fr: ["réponse", "réponses"]
};
