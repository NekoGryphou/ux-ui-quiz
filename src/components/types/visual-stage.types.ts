import type { CompareVariant, QuizVisual } from "../../engine/types/quiz.types";

export interface VisualStageProps {
  visual: QuizVisual;
  label: string;
  variant?: CompareVariant;
  compact?: boolean;
}
