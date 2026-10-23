import type { Localized } from "../../shared/types/locale.types";

/**
 * @export
 * @desc One step of the home screen walkthrough.
 *
 * @property title - Step heading.
 * @property body - Step explanation.
 */
export interface HomeStep {
  /** Step heading. */
  title: Localized<string>;

  /** Step explanation. */
  body: Localized<string>;
}

/**
 * @export
 * @desc Piece of the home history line; scores are emphasized.
 *
 * @property text - Displayed text.
 * @property score - Whether the piece is a score.
 */
export interface HistorySegment {
  /** Displayed text. */
  text: string;

  /** Whether the piece is a score. */
  score: boolean;
}
