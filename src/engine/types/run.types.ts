import type { Answer } from "./quiz.types";

export type RunKind = "full" | "retry" | "quick";

export interface RunData {
  id: string;
  kind: RunKind;
  seed: number;
  answers: Record<string, Answer>;
  order: string[];
}

export interface Attempt {
  runId: string;
  kind: RunKind;
  finishedAt: string;
  score: number;
  total: number;
  missed: string[];
}
