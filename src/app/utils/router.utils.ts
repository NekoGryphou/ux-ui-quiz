import type { Href, Route, RunTarget } from "../types/router.types";

/**
 * @private
 * @desc Matches a question or review path and captures its segment and number.
 */
const POSITION_PATH: RegExp = /^\/(quiz|practice|review|debug)\/(\d+)$/;

/**
 * @private
 * @desc Builds the route of a question or review position.
 *
 * @param segment - Path segment: quiz, practice or review.
 * @param index - Zero-based index.
 *
 * @returns The route, or null for a negative index.
 */
const positionRoute = (segment: string, index: number): Route | null => {
  if (index < 0) return null;
  if (segment === "debug") {
    return import.meta.env.DEV ? { name: "quiz", run: "main", index, debug: true } : null;
  }
  if (segment === "review") return { name: "review", index };
  return { name: "quiz", run: segment === "practice" ? "practice" : "main", index };
};

/**
 * @private
 * @desc Parses a location hash into a route.
 *
 * @param hash - Location hash.
 *
 * @returns The route, or null when unknown.
 */
const parseRoute = (hash: string): Route | null => {
  const path: string = hash.replace(/^#/, "");
  if (path === "" || path === "/") return { name: "home" };
  if (path === "/results") return { name: "results", run: "main" };
  if (path === "/practice/results") return { name: "results", run: "practice" };
  if (path === "/kit" && import.meta.env.DEV) return { name: "kit" };
  const match: RegExpExecArray | null = POSITION_PATH.exec(path);
  const segment: string | undefined = match?.[1];
  const position: string | undefined = match?.[2];
  if (segment === undefined || position === undefined) return null;
  return positionRoute(segment, Number(position) - 1);
};

/**
 * @export
 * @desc Hash URL builders.
 */
export const href: Href = {
  home: "#/",
  results: (run: RunTarget): string => (run === "main" ? "#/results" : "#/practice/results"),
  quiz: (run: RunTarget, index: number): string => `#/${run === "main" ? "quiz" : "practice"}/${String(index + 1)}`,
  review: (index: number): string => `#/review/${String(index + 1)}`
};

/**
 * @export
 * @desc Returns the route of the current location hash.
 * Unknown hashes are replaced with home.
 *
 * @returns The current route.
 */
export const resolveRoute = (): Route => {
  const route: Route | null = parseRoute(window.location.hash);
  if (route !== null) return route;
  history.replaceState(null, "", href.home);
  return { name: "home" };
};
