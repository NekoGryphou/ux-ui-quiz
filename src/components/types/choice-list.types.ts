import type { Answer, Choice, Quiz } from "../../engine/types/quiz.types";

export interface ChoiceListProps {
  quiz: Quiz;
  choices: Choice[];
  answer: Answer;
  ontoggle: (choiceId: string) => void;
}
