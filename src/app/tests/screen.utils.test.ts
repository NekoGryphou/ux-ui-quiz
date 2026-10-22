import { describe, expect, it } from "vitest";
import { Run } from "../../engine/run.svelte";
import { CATALOG, quizById } from "../../engine/tests/catalog.fixture";
import { createRun } from "../../engine/utils/session.utils";
import type { Screen } from "../types/screen.types";
import { href } from "../utils/router.utils";
import { resolveScreen } from "../utils/screen.utils";

const fixedRun = (): Run => new Run(CATALOG, createRun(CATALOG, { kind: "full" }), (): void => undefined);

describe("resolveScreen", (): void => {
  it("resolves static screens", (): void => {
    const main: Run = fixedRun();
    expect(resolveScreen({ name: "home" }, main, null)).toEqual({ name: "home" });
    expect(resolveScreen({ name: "kit" }, main, null)).toEqual({ name: "kit" });
  });

  it("sends practice routes home when there is no practice run", (): void => {
    const main: Run = fixedRun();
    expect(resolveScreen({ name: "results", run: "practice" }, main, null)).toEqual({
      name: "redirect",
      to: href.home
    });
    expect(resolveScreen({ name: "quiz", run: "practice", index: 0 }, main, null)).toEqual({
      name: "redirect",
      to: href.home
    });
  });

  it("sends out-of-range questions home", (): void => {
    expect(resolveScreen({ name: "quiz", run: "main", index: 99 }, fixedRun(), null)).toEqual({
      name: "redirect",
      to: href.home
    });
  });

  it("resolves a question in answer mode", (): void => {
    const main: Run = fixedRun();
    const screen: Screen = resolveScreen({ name: "quiz", run: "main", index: 0 }, main, null);
    expect(screen).toMatchObject({ name: "quiz", index: 0, target: "main", mode: "answer" });
  });

  it("sends main questions to the active practice run", (): void => {
    const practice: Run = new Run(
      CATALOG,
      createRun(CATALOG, { kind: "quick", ids: ["single", "multiple"] }),
      (): void => undefined
    );
    expect(resolveScreen({ name: "quiz", run: "main", index: 0 }, fixedRun(), practice)).toMatchObject({
      name: "quiz"
    });

    practice.toggle(quizById("single"), "a");
    expect(resolveScreen({ name: "quiz", run: "main", index: 0 }, fixedRun(), practice)).toEqual({
      name: "redirect",
      to: href.quiz("practice", practice.resumeIndex)
    });
  });

  it("opens any main question from debug while practice is active", (): void => {
    const main: Run = fixedRun();
    const practice: Run = fixedRun();
    practice.toggle(quizById("single"), "a");
    expect(resolveScreen({ name: "quiz", run: "main", index: 0, debug: true }, main, practice)).toMatchObject({
      name: "quiz",
      quiz: main.order[0],
      run: main,
      mode: "answer"
    });
  });

  it("only reviews submitted answers", (): void => {
    const main: Run = fixedRun();
    const index: number = main.order.findIndex((quiz) => quiz.id === "single");
    expect(resolveScreen({ name: "review", index }, main, null)).toEqual({
      name: "redirect",
      to: href.results("main")
    });

    main.toggle(quizById("single"), "b");
    main.submit(quizById("single"));
    expect(resolveScreen({ name: "review", index }, main, null)).toMatchObject({
      name: "quiz",
      mode: "review",
      run: main
    });
  });
});
