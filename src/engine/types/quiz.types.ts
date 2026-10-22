import type { Component } from "svelte";

/**
 * @export
 * @desc Question format: one answer, several answers, click regions on a mock, or pick the better of two mocks.
 */
export type QuizKind = "single" | "multiple" | "hotspot" | "compare";

/**
 * @export
 * @desc Side of a compare quiz.
 */
export type CompareVariant = "a" | "b";

/**
 * @export
 * @desc Placement of the two compare mocks.
 */
export type CompareLayout = "columns" | "stacked";

/**
 * @export
 * @desc Feedback state of one option after submission.
 */
export type ChoiceOutcome = "correct" | "wrong" | "missed" | "neutral";

/**
 * @export
 * @desc Further-reading link shown with the answer.
 *
 * @property label - Link text.
 * @property url - HTTPS target.
 */
export interface QuizLink {
  /** Link text. */
  label: string;

  /** HTTPS target. */
  url: string;
}

/**
 * @export
 * @desc Selectable option of a quiz.
 *
 * @property id - Option id.
 * @property text - Displayed label.
 */
export interface Choice {
  /** Option id. */
  id: string;

  /** Displayed label. */
  text: string;
}

/**
 * @export
 * @desc Option of a compare quiz.
 *
 * @property id - Compared side.
 */
export interface CompareChoice extends Choice {
  /** Compared side. */
  id: CompareVariant;
}

/**
 * @private
 * @desc Fields shared by every quiz kind.
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
interface QuizBase {
  /** Unique quiz id. */
  id: string;

  /** Mock animates; gated by reduced-motion preference. */
  motion?: true;

  /** Short question name. */
  title: string;

  /** UX principle taught. */
  principle: string;

  /** Context shown above the mock. */
  scenario: string;

  /** Question asked. */
  prompt: string;

  /** Answer explanation paragraphs. */
  explanation: string[];

  /** Further-reading links. */
  links?: QuizLink[];
}

/**
 * @export
 * @desc Quiz with exactly one correct choice.
 *
 * @property kind - Discriminant.
 * @property correct - Correct choice id.
 * @property choices - Offered choices.
 */
export interface SingleQuizMeta extends QuizBase {
  /** Discriminant. */
  kind: "single";

  /** Correct choice id. */
  correct: readonly [string];

  /** Offered choices. */
  choices: Choice[];
}

/**
 * @export
 * @desc Quiz with two or more correct choices.
 *
 * @property kind - Discriminant.
 * @property correct - Correct choice ids.
 * @property choices - Offered choices.
 */
export interface MultipleQuizMeta extends QuizBase {
  /** Discriminant. */
  kind: "multiple";

  /** Correct choice ids. */
  correct: readonly [string, string, ...string[]];

  /** Offered choices. */
  choices: Choice[];
}

/**
 * @export
 * @desc Quiz answered from a list of text choices.
 */
export type ChoiceQuizMeta = SingleQuizMeta | MultipleQuizMeta;

/**
 * @export
 * @desc Quiz answered by clicking regions of the mock.
 *
 * @property kind - Discriminant.
 * @property correct - Correct region ids.
 * @property regions - Clickable regions.
 */
export interface HotspotQuizMeta extends QuizBase {
  /** Discriminant. */
  kind: "hotspot";

  /** Correct region ids. */
  correct: readonly [string, ...string[]];

  /** Clickable regions, marked in the mock. */
  regions: Choice[];
}

/**
 * @export
 * @desc Quiz answered by picking the better of two mock variants.
 *
 * @property kind - Discriminant.
 * @property layout - Mock placement.
 * @property correct - Better variant.
 */
export interface CompareQuizMeta extends QuizBase {
  /** Discriminant. */
  kind: "compare";

  /** Mock placement. */
  layout?: CompareLayout;

  /** Better variant. */
  correct: readonly [CompareVariant];
}

/**
 * @export
 * @desc Quiz data without its visual.
 */
export type QuizMeta = ChoiceQuizMeta | HotspotQuizMeta | CompareQuizMeta;

/**
 * @export
 * @desc Props passed to a quiz mock.
 *
 * @property variant - Compare side to render.
 */
export interface VisualProps {
  /** Compare side to render. */
  variant?: CompareVariant;
}

/**
 * @export
 * @desc Mock component of a quiz.
 */
export type QuizVisual = Component<VisualProps>;

/**
 * @export
 * @desc Lazy loader of a quiz mock.
 */
export type QuizVisualLoader = () => Promise<QuizVisual>;

/**
 * @export
 * @desc Quiz data with its lazily loaded mock.
 *
 * @property loadVisual - Loads the mock.
 */
export type Quiz = QuizMeta & {
  /** Loads the mock. */
  loadVisual: QuizVisualLoader;
};

/**
 * @export
 * @desc Quiz narrowed to one kind.
 *
 * @template K - Quiz kind.
 */
export type QuizOf<K extends QuizKind> = Extract<Quiz, { kind: K }>;

/**
 * @export
 * @desc Learner's answer to one quiz.
 *
 * @property selected - Selected option ids.
 * @property submitted - Answer is locked in.
 */
export interface Answer {
  /** Selected option ids. */
  selected: string[];

  /** Answer is locked in. */
  submitted: boolean;
}

/**
 * @export
 * @desc Region labels of a submitted hotspot answer, grouped by outcome.
 *
 * @property correct - Rightly selected.
 * @property wrong - Wrongly selected.
 * @property missed - Correct but unselected.
 */
export interface HotspotResults {
  /** Rightly selected labels. */
  correct: string[];

  /** Wrongly selected labels. */
  wrong: string[];

  /** Correct but unselected labels. */
  missed: string[];
}
