import { describe, expect, it } from "vitest";
import { Run } from "../../engine/run.svelte";
import { CATALOG, quizById } from "../../engine/tests/catalog.fixture";
import { createRun } from "../../engine/utils/session.utils";
import { APP_NAME } from "../const/app.const";
import type { QuizScreen } from "../types/screen.types";
import { abandonBody, abandonTitle, resumeLabel } from "../utils/run-label.utils";
import { parseTheme } from "../utils/theme.utils";
import { pageTitle } from "../utils/title.utils";
import { pageDirection } from "../utils/transition.utils";

const run: Run = new Run(CATALOG, createRun(CATALOG, { kind: "full" }), (): void => undefined);

const quizScreen = (target: QuizScreen["target"], mode: QuizScreen["mode"]): QuizScreen => ({
  name: "quiz",
  quiz: quizById("single"),
  index: 1,
  run,
  target,
  mode
});

describe("pageTitle", (): void => {
  it("names each screen", (): void => {
    expect(pageTitle({ name: "home" })).toBe(APP_NAME);
    expect(pageTitle({ name: "results", run, target: "practice" })).toBe(`Practice results · ${APP_NAME}`);
    expect(pageTitle(quizScreen("main", "answer"))).toBe(`Question 2 of 4 · ${APP_NAME}`);
    expect(pageTitle(quizScreen("practice", "answer"))).toBe(`Practice question 2 of 4 · ${APP_NAME}`);
    expect(pageTitle(quizScreen("main", "review"))).toBe(`Review 2 of 4 · ${APP_NAME}`);
  });
});

describe("pageDirection", (): void => {
  it("slides within one sequence and fades elsewhere", (): void => {
    expect(pageDirection({ name: "quiz", run: "main", index: 0 }, { name: "quiz", run: "main", index: 1 })).toBe(
      "forward"
    );
    expect(pageDirection({ name: "review", index: 3 }, { name: "review", index: 2 })).toBe("back");
    expect(pageDirection({ name: "quiz", run: "main", index: 0 }, { name: "quiz", run: "practice", index: 1 })).toBe(
      "fade"
    );
    expect(pageDirection({ name: "home" }, { name: "quiz", run: "main", index: 0 })).toBe("fade");
  });
});

describe("parseTheme", (): void => {
  it("accepts only known themes", (): void => {
    expect(parseTheme("dark")).toBe("dark");
    expect(parseTheme("light")).toBe("light");
    expect(parseTheme("blue")).toBeNull();
    expect(parseTheme(null)).toBeNull();
  });
});

describe("run labels", (): void => {
  it("names the run and its progress", (): void => {
    expect(resumeLabel("quick", 3, 10)).toBe("Resume Quick 10 · 3/10");
    expect(abandonTitle("full")).toBe("Abandon your quiz?");
    expect(abandonBody("retry", 1)).toBe(
      "Only one run can be in progress. Your 1 answer in this retry will be cleared."
    );
  });
});
