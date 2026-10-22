import type { Answer, Choice, QuizOf } from "../../engine/types/quiz.types";

/**
 * @export
 * @desc Props of the ChoiceList for single and multiple choice quizzes.
 *
 * @property quiz - Quiz being answered.
 * @property choices - Choices in display order.
 * @property answer - Current answer state.
 * @property ontoggle - Called when a choice is toggled.
 */
export interface ChoiceListProps {
  /** Quiz being answered. */
  quiz: QuizOf<"single" | "multiple">;

  /** Choices in display order. */
  choices: Choice[];

  /** Current answer state. */
  answer: Answer;

  /** Called when a choice is toggled. */
  ontoggle: (choiceId: string) => void;
}
