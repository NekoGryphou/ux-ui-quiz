import type { Quiz } from "../../engine/types/quiz.types";

/**
 * @export
 * @desc Outcome of one question in the results review.
 */
export type ReviewStatus = "correct" | "wrong" | "skipped";

/**
 * @export
 * @desc One row of the results review list.
 *
 * @property quiz - Reviewed question.
 * @property index - Zero-based position in the run.
 * @property status - Question outcome.
 */
export interface ReviewRow {
  /** Reviewed question. */
  quiz: Quiz;

  /** Zero-based position in the run. */
  index: number;

  /** Question outcome. */
  status: ReviewStatus;
}

/**
 * @export
 * @desc Summary sentence earned from a minimum score ratio.
 *
 * @property minRatio - Lowest qualifying score ratio.
 * @property text - Sentence shown.
 */
export interface Verdict {
  /** Lowest qualifying score ratio, from 0 to 1. */
  minRatio: number;

  /** Sentence shown. */
  text: string;
}

/**
 * @export
 * @desc Content of the results progress ring.
 *
 * @property value - Filled fraction, from 0 to 1.
 * @property text - Text inside the ring.
 * @property label - Accessible description.
 */
export interface RingState {
  /** Filled fraction, from 0 to 1. */
  value: number;

  /** Text inside the ring. */
  text: string;

  /** Accessible description. */
  label: string;
}
