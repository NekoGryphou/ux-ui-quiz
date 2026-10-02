import type { RunTarget } from "../../app/types/router.types";
import type { Run } from "../../engine/run.svelte";
import type { Quiz } from "../../engine/types/quiz.types";

export type QuizMode = "answer" | "review";

export interface QuizScreenProps {
  quiz: Quiz;
  index: number;
  run: Run;
  target: RunTarget;
  mode: QuizMode;
}

export interface QuizNav {
  previous: string | null;
  next: string;
  nextLabel: string;
}
