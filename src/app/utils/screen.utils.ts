import type { Run } from "../../engine/run.svelte";
import type { Quiz } from "../../engine/types/quiz.types";
import type { Route, RunTarget } from "../types/router.types";
import type { Screen } from "../types/screen.types";
import { href } from "./router.utils";

/**
 * @private
 * @desc Screen that redirects to home.
 */
const TO_HOME: Screen = { name: "redirect", to: href.home };

/**
 * @private
 * @desc Picks the run of a target.
 *
 * @param target - Run target.
 * @param main - Main run.
 * @param practice - Practice run, if any.
 *
 * @returns The run, or null without practice run.
 */
const runFor = (target: RunTarget, main: Run, practice: Run | null): Run | null =>
  target === "practice" ? practice : main;

/**
 * @export
 * @desc Resolves the screen to render for a route.
 *
 * @param route - Current route.
 * @param main - Main run.
 * @param practice - Practice run, if any.
 * @param debug - Temporary development run, if any.
 *
 * @returns The screen, or a redirect when unreachable.
 */
export const resolveScreen = (route: Route, main: Run, practice: Run | null, debug: Run | null = null): Screen => {
  switch (route.name) {
    case "home":
      return { name: "home" };
    case "kit":
      return { name: "kit" };
    case "results": {
      const run: Run | null = runFor(route.run, main, practice);
      return run === null ? TO_HOME : { name: "results", run, target: route.run };
    }
    case "quiz": {
      const run: Run | null =
        import.meta.env.DEV && route.debug === true ? (debug ?? main) : runFor(route.run, main, practice);
      const quiz: Quiz | undefined = run?.order[route.index];
      if (run === null || quiz === undefined) return TO_HOME;
      if (route.run === "main" && practice?.inProgress === true && !(import.meta.env.DEV && route.debug === true)) {
        return { name: "redirect", to: href.quiz("practice", practice.resumeIndex) };
      }
      return { name: "quiz", quiz, index: route.index, run, target: route.run, mode: "answer" };
    }
    case "review": {
      const quiz: Quiz | undefined = main.order[route.index];
      if (quiz === undefined) return TO_HOME;
      if (!main.answerFor(quiz).submitted) return { name: "redirect", to: href.results("main") };
      return { name: "quiz", quiz, index: route.index, run: main, target: "main", mode: "review" };
    }
  }
};
