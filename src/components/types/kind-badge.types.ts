import type { QuizKind } from "../../engine/types/quiz.types";
import type { IconName } from "./icons.types";

/**
 * @export
 * @desc Props of the KindBadge showing how a quiz is answered.
 *
 * @property kind - Quiz kind.
 * @property several - Whether several answers are expected.
 */
export interface KindBadgeProps {
  /** Quiz kind. */
  kind: QuizKind;

  /** Whether several answers are expected. */
  several: boolean;
}

/**
 * @export
 * @desc Icon, text and color tone of a kind badge.
 *
 * @property icon - Badge icon.
 * @property text - Badge text.
 * @property tone - Color tone.
 */
export interface KindBadgeLook {
  /** Badge icon. */
  icon: IconName;

  /** Badge text. */
  text: string;

  /** Color tone. */
  tone: "single" | "multiple" | "hotspot" | "compare";
}
