import type { ChoiceOutcome } from "../../engine/types/quiz.types";
import { t } from "../../shared/locale.svelte";

/**
 * @export
 * @desc Tag text for a choice outcome, empty for neutral choices.
 *
 * @param outcome - Choice outcome.
 * @param several - Whether several answers were expected.
 *
 * @returns The tag text.
 */
export const outcomeLabel = (outcome: ChoiceOutcome, several: boolean): string => {
  switch (outcome) {
    case "correct":
      return t("Correct", "Juste");
    case "wrong":
      return t("Incorrect", "Faux");
    case "missed":
      return several ? t("Missed", "Manquée") : t("Correct answer", "Bonne réponse");
    case "neutral":
      return "";
  }
};
