/**
 * @export
 * @desc Run a route belongs to: the scored main run or the practice run.
 */
export type RunTarget = "main" | "practice";

/**
 * @export
 * @desc Builders for the app's hash URLs.
 * Indexes are zero-based; URLs show one-based positions.
 *
 * @property home - Home hash.
 * @property results - Results hash of a run.
 * @property quiz - Question hash in a run.
 * @property review - Review hash of a main run question.
 */
export interface Href {
  /** Home hash. */
  readonly home: string;

  /** Results hash of a run. */
  readonly results: (run: RunTarget) => string;

  /** Question hash in a run. */
  readonly quiz: (run: RunTarget, index: number) => string;

  /** Review hash of a main run question. */
  readonly review: (index: number) => string;
}

/**
 * @export
 * @desc Parsed location hash, with zero-based indexes not yet checked against a run.
 */
export type Route =
  | { name: "home" }
  | { name: "quiz"; run: RunTarget; index: number; debug?: boolean }
  | { name: "results"; run: RunTarget }
  | { name: "review"; index: number }
  | { name: "kit" };
