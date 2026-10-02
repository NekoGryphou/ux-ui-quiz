import type { HotspotResults, Quiz } from "../../engine/types/quiz.types";

export interface AnswerRevealProps {
  quiz: Quiz;
  correct: boolean;
  results: HotspotResults | null;
  several: boolean;
}

export interface RevealSegment {
  text: string;
  strong: boolean;
}
