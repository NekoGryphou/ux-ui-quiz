import type { CompareVariant, QuizVisual } from "../../engine/types/quiz.types";

/**
 * @export
 * @desc Props of the scaled preview stage with its actual-size viewer.
 *
 * @property visual - Preview component.
 * @property label - Preview name for the viewer.
 * @property variant - Version to render, a by default.
 * @property compact - Smaller layout for compare cards.
 */
export interface VisualStageProps {
  /** Preview component. */
  visual: QuizVisual;

  /** Preview name for the viewer. */
  label: string;

  /** Version to render, a by default. */
  variant?: CompareVariant;

  /** Smaller layout for compare cards. */
  compact?: boolean;
}
