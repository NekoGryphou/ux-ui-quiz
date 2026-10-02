import { quizzes } from "../../quizzes";
import type { Href, Route, RunTarget } from "../types/router.types";

const POSITION_PATH: RegExp = /^\/(quiz|practice|review)\/(\d+)$/;

export const href: Href = {
  home: "#/",
  results: (run: RunTarget): string => (run === "main" ? "#/results" : "#/practice/results"),
  quiz: (run: RunTarget, index: number): string => `#/${run === "main" ? "quiz" : "practice"}/${String(index + 1)}`,
  review: (index: number): string => `#/review/${String(index + 1)}`
};

const positionRoute = (segment: string, index: number): Route | null => {
  if (index < 0 || index >= quizzes.length) return null;
  if (segment === "review") return { name: "review", index };
  return { name: "quiz", run: segment === "practice" ? "practice" : "main", index };
};

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

export const resolveRoute = (): Route => {
  const route: Route | null = parseRoute(window.location.hash);
  if (route !== null) return route;
  history.replaceState(null, "", href.home);
  return { name: "home" };
};

export const navigate = (target: string): void => {
  window.location.hash = target;
};
