import type { CompareLayout, CompareVariant, QuizMeta } from "../../engine/types/quiz.types";
import type { Localized } from "../../shared/types/locale.types";

/**
 * @export
 * @desc Further-reading link, labeled in every language.
 *
 * @property label - Link text.
 * @property url - HTTPS target.
 */
export interface LinkSource {
  /** Link text. */
  label: Localized<string>;

  /** HTTPS target. */
  url: string;
}

/**
 * @export
 * @desc Selectable option, labeled in every language.
 *
 * @property id - Option id.
 * @property text - Displayed label.
 */
export interface ChoiceSource {
  /** Option id. */
  id: string;

  /** Displayed label. */
  text: Localized<string>;
}

/**
 * @private
 * @desc Fields shared by every quiz source.
 *
 * @property id - Unique quiz id.
 * @property motion - Mock animates.
 * @property title - Short question name.
 * @property principle - UX principle taught.
 * @property scenario - Context for the mock.
 * @property prompt - Question asked.
 * @property explanation - Answer paragraphs.
 * @property links - Further reading.
 */
interface QuizSourceBase {
  /** Unique quiz id. */
  id: string;

  /** Mock animates; gated by reduced-motion preference. */
  motion?: true;

  /** Short question name. */
  title: Localized<string>;

  /** UX principle taught. */
  principle: Localized<string>;

  /** Context shown above the mock. */
  scenario: Localized<string>;

  /** Question asked. */
  prompt: Localized<string>;

  /** Answer explanation paragraphs. */
  explanation: Localized<string[]>;

  /** Further-reading links. */
  links?: LinkSource[];
}

/**
 * @export
 * @desc Source of a quiz with exactly one correct choice.
 *
 * @property kind - Discriminant.
 * @property correct - Correct choice id.
 * @property choices - Offered choices.
 */
export interface SingleQuizSource extends QuizSourceBase {
  /** Discriminant. */
  kind: "single";

  /** Correct choice id. */
  correct: readonly [string];

  /** Offered choices. */
  choices: ChoiceSource[];
}

/**
 * @export
 * @desc Source of a quiz with two or more correct choices.
 *
 * @property kind - Discriminant.
 * @property correct - Correct choice ids.
 * @property choices - Offered choices.
 */
export interface MultipleQuizSource extends QuizSourceBase {
  /** Discriminant. */
  kind: "multiple";

  /** Correct choice ids. */
  correct: readonly [string, string, ...string[]];

  /** Offered choices. */
  choices: ChoiceSource[];
}

/**
 * @export
 * @desc Source of a quiz answered by clicking regions of the mock.
 *
 * @property kind - Discriminant.
 * @property correct - Correct region ids.
 * @property regions - Clickable regions.
 */
export interface HotspotQuizSource extends QuizSourceBase {
  /** Discriminant. */
  kind: "hotspot";

  /** Correct region ids. */
  correct: readonly [string, ...string[]];

  /** Clickable regions, marked in the mock. */
  regions: ChoiceSource[];
}

/**
 * @export
 * @desc Source of a quiz answered by picking the better of two mock variants.
 *
 * @property kind - Discriminant.
 * @property layout - Mock placement.
 * @property correct - Better variant.
 */
export interface CompareQuizSource extends QuizSourceBase {
  /** Discriminant. */
  kind: "compare";

  /** Mock placement. */
  layout?: CompareLayout;

  /** Better variant. */
  correct: readonly [CompareVariant];
}

/**
 * @export
 * @desc Authored quiz data, with its text in every language.
 */
export type QuizSource = SingleQuizSource | MultipleQuizSource | HotspotQuizSource | CompareQuizSource;

/**
 * @export
 * @desc Quiz data without its translated text fields.
 */
export type QuizStructure = QuizMeta extends infer M
  ? M extends QuizMeta
    ? Omit<M, "title" | "principle" | "scenario" | "prompt" | "explanation">
    : never
  : never;
