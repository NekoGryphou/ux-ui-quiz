import { describe, expect, it } from "vitest";
import { href } from "../../app/utils/router.utils";
import type { QuizNav } from "../types/quiz-screen.types";
import { checkButtonLabel, quizNav } from "../utils/quiz.utils";

describe("quizNav", (): void => {
  it("has no previous link on the first question", (): void => {
    const nav: QuizNav = quizNav("answer", "main", 0, 3);
    expect(nav).toEqual({ previous: null, next: href.quiz("main", 1), nextLabel: "Next question" });
  });

  it("sends the last question to results", (): void => {
    expect(quizNav("answer", "practice", 2, 3)).toEqual({
      previous: href.quiz("practice", 1),
      next: href.results("practice"),
      nextLabel: "See results"
    });
  });

  it("returns to main results at the end of a review", (): void => {
    expect(quizNav("review", "main", 2, 3)).toEqual({
      previous: href.review(1),
      next: href.results("main"),
      nextLabel: "Back to results"
    });
  });
});

describe("checkButtonLabel", (): void => {
  it("counts selections only when several are allowed", (): void => {
    expect(checkButtonLabel("single", false, 1)).toBe("Check answer");
    expect(checkButtonLabel("multiple", true, 0)).toBe("Check answer");
    expect(checkButtonLabel("multiple", true, 2)).toBe("Check 2 answers");
    expect(checkButtonLabel("hotspot", true, 1)).toBe("Check 1 area");
  });
});
