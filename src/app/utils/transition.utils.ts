import { REDUCED_MOTION_QUERY } from "../const/transition.const";
import type { Route } from "../types/router.types";
import type { PageDirection } from "../types/transition.types";

/**
 * @private
 * @desc Returns the question index of a route.
 *
 * @param route - Route.
 *
 * @returns The index, or null off a question.
 */
const positionOf = (route: Route): number | null =>
  route.name === "quiz" || route.name === "review" ? route.index : null;

/**
 * @private
 * @desc Tells whether two routes step through the same question list.
 *
 * @param from - Previous route.
 * @param to - Next route.
 *
 * @returns Whether both are in one sequence.
 */
const sameSequence = (from: Route, to: Route): boolean =>
  (from.name === "review" && to.name === "review") ||
  (from.name === "quiz" && to.name === "quiz" && from.run === to.run);

/**
 * @export
 * @desc Returns the page transition between two routes.
 *
 * @param from - Previous route.
 * @param to - Next route.
 *
 * @returns Slide within a sequence, fade otherwise.
 */
export const pageDirection = (from: Route, to: Route): PageDirection => {
  const fromPosition: number | null = positionOf(from);
  const toPosition: number | null = positionOf(to);
  if (fromPosition === null || toPosition === null || !sameSequence(from, to)) return "fade";
  return toPosition >= fromPosition ? "forward" : "back";
};

/**
 * @export
 * @desc Applies a DOM update inside a view transition when supported.
 * Runs it directly without support or with reduced motion.
 *
 * @param apply - DOM update to run.
 *
 * @returns The transition, or null when skipped.
 */
export const runViewTransition = (apply: () => void): ViewTransition | null => {
  if (!("startViewTransition" in document) || window.matchMedia(REDUCED_MOTION_QUERY).matches) {
    apply();
    return null;
  }
  return document.startViewTransition(apply);
};
