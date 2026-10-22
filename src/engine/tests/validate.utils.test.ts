import { describe, expect, it } from "vitest";
import type { QuizMeta } from "../types/quiz.types";
import { headingErrors, markupRegionErrors, motionErrors, validateQuizzes } from "../utils/validate.utils";
import { HOTSPOT, QUIZZES, SINGLE } from "./catalog.fixture";

const regions = (...ids: string[]): string =>
  ids.map((id: string): string => `<div data-region="${id}"></div>`).join("");

describe("validateQuizzes", (): void => {
  it("accepts the fixture catalog", (): void => {
    expect(validateQuizzes(QUIZZES)).toEqual([]);
  });

  it("reports duplicate quiz ids", (): void => {
    expect(validateQuizzes([...QUIZZES, ...QUIZZES.slice(0, 1)])).toContain('quiz "single": duplicate id');
  });
});

describe("markupRegionErrors", (): void => {
  it("accepts markup matching the declared regions", (): void => {
    expect(markupRegionErrors(HOTSPOT, regions("r1", "r2", "r3", "r4"))).toEqual([]);
  });

  it("reports missing, undeclared and repeated regions", (): void => {
    expect(markupRegionErrors(HOTSPOT, regions("r1", "r1", "r2", "r3", "x"))).toEqual([
      'quiz "hotspot": region "r4" is not marked in the mock',
      'quiz "hotspot": mock marks undeclared region "x"',
      'quiz "hotspot": region "r1" is marked more than once'
    ]);
  });

  it("rejects regions in quizzes that aren't hotspot quizzes", (): void => {
    expect(markupRegionErrors(SINGLE, regions("r1"))).toEqual([
      'quiz "single": "single" quiz marks hotspot region "r1"'
    ]);
  });
});

describe("motionErrors", (): void => {
  const animated: QuizMeta = { ...SINGLE, motion: true };

  it("requires animated quizzes to declare motion", (): void => {
    expect(motionErrors(SINGLE, ".a { animation: spin 1s; }")).toHaveLength(1);
    expect(motionErrors(animated, "@keyframes spin {}")).toEqual([]);
  });

  it("rejects motion declared without animation", (): void => {
    expect(motionErrors(animated, ".a { color: red; }")).toHaveLength(1);
    expect(motionErrors(SINGLE, ".a { color: red; }")).toEqual([]);
  });
});

describe("headingErrors", (): void => {
  it("rejects heading elements in mock markup", (): void => {
    expect(headingErrors(SINGLE, '<div><h2 class="x">Title</h2></div>')).toHaveLength(1);
    expect(headingErrors(SINGLE, "<p>&lt;h3&gt;Code sample&lt;/h3&gt;</p><header></header>")).toEqual([]);
  });
});
