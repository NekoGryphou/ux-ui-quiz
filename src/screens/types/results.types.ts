import type { Quiz } from "../../engine/types/quiz.types";

export type ReviewStatus = "correct" | "wrong" | "skipped";

export interface ReviewRow {
  quiz: Quiz;
  index: number;
  status: ReviewStatus;
}

export interface Verdict {
  minRatio: number;
  text: string;
}

export interface RingState {
  value: number;
  text: string;
  label: string;
}
