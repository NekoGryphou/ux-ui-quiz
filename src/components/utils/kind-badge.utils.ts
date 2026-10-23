import type { QuizKind } from "../../engine/types/quiz.types";
import { t } from "../../shared/locale.svelte";
import type { KindBadgeLook } from "../types/kind-badge.types";

/**
 * @export
 * @desc Badge look for a quiz kind.
 *
 * @param kind - Quiz kind.
 * @param several - Whether several answers are expected.
 *
 * @returns The badge look.
 */
export const kindBadgeLook = (kind: QuizKind, several: boolean): KindBadgeLook => {
  switch (kind) {
    case "single":
      return { icon: "circle-dot", text: t("One answer", "Une réponse"), tone: "single" };
    case "multiple":
      return { icon: "list-checks", text: t("Multiple answers", "Plusieurs réponses"), tone: "multiple" };
    case "hotspot":
      return {
        icon: "crosshair",
        text: several
          ? t("Click every problem", "Cliquez sur chaque problème")
          : t("Click the problem", "Cliquez sur le problème"),
        tone: "hotspot"
      };
    case "compare":
      return { icon: "columns", text: t("Pick the better one", "Choisissez la meilleure"), tone: "compare" };
  }
};
