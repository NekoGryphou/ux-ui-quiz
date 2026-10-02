import type { QuizKind } from "../../engine/types/quiz.types";
import type { KindBadgeLook } from "../types/kind-badge.types";

export const kindBadgeLook = (kind: QuizKind, several: boolean): KindBadgeLook => {
  switch (kind) {
    case "single":
      return { icon: "circle-dot", text: "One answer", tone: "single" };
    case "multiple":
      return { icon: "list-checks", text: "Multiple answers", tone: "multiple" };
    case "hotspot":
      return { icon: "crosshair", text: several ? "Click every problem" : "Click the problem", tone: "hotspot" };
    case "compare":
      return { icon: "columns", text: "Pick the better one", tone: "compare" };
  }
};
