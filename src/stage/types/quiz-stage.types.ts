import type { Answer, Choice, Quiz } from "../../engine/types/quiz.types";

/**
 * @export
 * @desc Props of the stage that loads and shows a question preview.
 *
 * @property quiz - Current question.
 * @property options - Question choices.
 * @property answer - Current answer.
 * @property label - Preview name for the enlarged viewer.
 * @property onselect - Called with a picked compare version id.
 */
export interface QuizStageProps {
  /** Current question. */
  quiz: Quiz;

  /** Question choices. */
  options: Choice[];

  /** Current answer. */
  answer: Answer;

  /** Preview name for the enlarged viewer. */
  label: string;

  /** Called with a picked compare version id. */
  onselect: (id: string) => void;
}
