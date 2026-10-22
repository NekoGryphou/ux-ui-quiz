import type { Run } from "../../engine/run.svelte";
import type { Quiz } from "../../engine/types/quiz.types";
import type { RunTarget } from "./router.types";

/**
 * @export
 * @desc Whether the quiz screen takes answers or reviews a submitted one.
 */
export type QuizMode = "answer" | "review";

/**
 * @export
 * @desc Quiz screen with its question and run resolved.
 *
 * @property name - Screen discriminant.
 * @property quiz - Question shown.
 * @property index - Zero-based position in the run.
 * @property run - Run of the question.
 * @property target - Run the screen belongs to.
 * @property mode - Answer or review mode.
 */
export interface QuizScreen {
  /** Screen discriminant. */
  name: "quiz";

  /** Question shown. */
  quiz: Quiz;

  /** Zero-based position in the run. */
  index: number;

  /** Run of the question. */
  run: Run;

  /** Run the screen belongs to. */
  target: RunTarget;

  /** Answer or review mode. */
  mode: QuizMode;
}

/**
 * @export
 * @desc Results screen with its run resolved.
 *
 * @property name - Screen discriminant.
 * @property run - Run whose results are shown.
 * @property target - Run the screen belongs to.
 */
export interface ResultsScreen {
  /** Screen discriminant. */
  name: "results";

  /** Run whose results are shown. */
  run: Run;

  /** Run the screen belongs to. */
  target: RunTarget;
}

/**
 * @export
 * @desc Screen to render for a route.
 * "redirect" means the route is unreachable and the URL must be replaced.
 */
export type Screen = { name: "home" } | { name: "kit" } | QuizScreen | ResultsScreen | { name: "redirect"; to: string };
