import type { CompareVariant, QuizVisual } from "../../engine/types/quiz.types";

/**
 * @export
 * @desc Props of the frame that renders a preview and its hotspot rings.
 *
 * @property visual - Preview component.
 * @property variant - Version passed to the preview.
 */
export interface MockFrameProps {
  /** Preview component. */
  visual: QuizVisual;

  /** Version passed to the preview. */
  variant: CompareVariant;
}
