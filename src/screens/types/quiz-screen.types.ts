import type { QuizScreen } from "../../app/types/screen.types";

/**
 * @export
 * @desc Props of the quiz screen.
 */
export type QuizScreenProps = Omit<QuizScreen, "name">;

/**
 * @export
 * @desc Forward button labels for one quiz mode.
 *
 * @property step - Label when a question follows.
 * @property end - Label on the last question.
 */
export interface NavLabels {
  /** Label when a question follows. */
  step: string;

  /** Label on the last question. */
  end: string;
}

/**
 * @export
 * @desc Navigation links of the current question.
 *
 * @property previous - Previous question href, or null.
 * @property next - Next question or results href.
 * @property nextLabel - Forward button label.
 */
export interface QuizNav {
  /** Previous question href, or null on the first one. */
  previous: string | null;

  /** Next question href, or results href on the last one. */
  next: string;

  /** Forward button label. */
  nextLabel: string;
}
