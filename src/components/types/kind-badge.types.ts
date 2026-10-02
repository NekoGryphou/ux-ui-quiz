import type { QuizKind } from "../../engine/types/quiz.types";
import type { IconName } from "./icons.types";

export interface KindBadgeProps {
  kind: QuizKind;
  several: boolean;
}

export interface KindBadgeLook {
  icon: IconName;
  text: string;
  tone: "single" | "multiple" | "hotspot" | "compare";
}
