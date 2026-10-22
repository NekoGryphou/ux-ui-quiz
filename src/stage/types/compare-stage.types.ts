import type { Answer, CompareChoice, QuizOf, QuizVisual } from "../../engine/types/quiz.types";

/**
 * @export
 * @desc Props of the side-by-side compare stage.
 *
 * @property quiz - Compare question.
 * @property visual - Preview component.
 * @property options - Versions to show.
 * @property answer - Current answer.
 * @property onselect - Called with a picked version id.
 */
export interface CompareStageProps {
  /** Compare question. */
  quiz: QuizOf<"compare">;

  /** Preview component. */
  visual: QuizVisual;

  /** Versions to show. */
  options: CompareChoice[];

  /** Current answer. */
  answer: Answer;

  /** Called with a picked version id. */
  onselect: (id: string) => void;
}
