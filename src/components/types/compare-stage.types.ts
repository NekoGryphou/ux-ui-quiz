import type { Answer, Choice, Quiz } from "../../engine/types/quiz.types";

export interface CompareStageProps {
  quiz: Quiz;
  options: Choice[];
  answer: Answer;
  onselect: (id: string) => void;
}
