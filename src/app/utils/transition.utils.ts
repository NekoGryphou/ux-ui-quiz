import type { Route } from "../types/router.types";
import type { PageDirection } from "../types/transition.types";

const positionOf = (route: Route): number | null =>
  route.name === "quiz" || route.name === "review" ? route.index : null;

const sameSequence = (from: Route, to: Route): boolean =>
  (from.name === "review" && to.name === "review") ||
  (from.name === "quiz" && to.name === "quiz" && from.run === to.run);

export const pageDirection = (from: Route, to: Route): PageDirection => {
  const fromPosition: number | null = positionOf(from);
  const toPosition: number | null = positionOf(to);
  if (fromPosition === null || toPosition === null || !sameSequence(from, to)) return "fade";
  return toPosition >= fromPosition ? "forward" : "back";
};
