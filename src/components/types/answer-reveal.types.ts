import type { HotspotResults, Quiz } from "../../engine/types/quiz.types";

/**
 * @export
 * @desc Props of the AnswerReveal panel shown after an answer is submitted.
 *
 * @property quiz - Answered quiz.
 * @property correct - Whether the answer was right.
 * @property results - Hotspot outcome, or null for other kinds.
 * @property several - Whether several answers were expected.
 */
export interface AnswerRevealProps {
  /** Answered quiz. */
  quiz: Quiz;

  /** Whether the answer was right. */
  correct: boolean;

  /** Hotspot outcome, or null for other kinds. */
  results: HotspotResults | null;

  /** Whether several answers were expected. */
  several: boolean;
}

/**
 * @export
 * @desc One run of text in the reveal outcome sentence.
 *
 * @property text - Text to display.
 * @property strong - Whether it is emphasized.
 */
export interface RevealSegment {
  /** Text to display. */
  text: string;

  /** Whether it is emphasized. */
  strong: boolean;
}
