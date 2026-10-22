import type { Answer } from "./quiz.types";

/**
 * @export
 * @desc Run kind: main full run, retry of missed questions, or short quick practice.
 */
export type RunKind = "full" | "retry" | "quick";

/**
 * @export
 * @desc Serializable state of a {@link Run}.
 *
 * @property id - Unique run id.
 * @property kind - Run kind.
 * @property seed - Shuffle seed.
 * @property answers - Answers by quiz id.
 * @property order - Quiz ids as asked.
 */
export interface RunData {
  /** Unique run id. */
  id: string;

  /** Run kind. */
  kind: RunKind;

  /** Seed for question and option shuffles. */
  seed: number;

  /** Answers by quiz id; unanswered quizzes have no entry. */
  answers: Record<string, Answer>;

  /** Quiz ids in asking order. */
  order: string[];
}

/**
 * @export
 * @desc History entry for a completed run.
 *
 * @property runId - Finished run id.
 * @property kind - Run kind.
 * @property finishedAt - ISO completion time.
 * @property score - Correct answers.
 * @property total - Question count.
 * @property missed - Wrongly answered quiz ids.
 */
export interface Attempt {
  /** Finished run id. */
  runId: string;

  /** Run kind. */
  kind: RunKind;

  /** ISO completion time. */
  finishedAt: string;

  /** Correct answers. */
  score: number;

  /** Question count. */
  total: number;

  /** Wrongly answered quiz ids. */
  missed: string[];
}

/**
 * @export
 * @desc Input to {@link createRun}.
 *
 * @property kind - Run kind.
 * @property ids - Explicit quiz ids to ask.
 */
export interface RunPlan {
  /** Run kind. */
  kind: RunKind;

  /** Explicit quiz ids to ask; omitted for a full run draw. */
  ids?: readonly string[];
}
