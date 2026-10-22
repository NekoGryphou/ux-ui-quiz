import { describe, expect, it } from "vitest";
import { quizById } from "../../engine/tests/catalog.fixture";
import type { Attempt } from "../../engine/types/run.types";
import { FALLBACK_VERDICT } from "../const/results.const";
import { historyLine } from "../utils/home.utils";
import { deltaText, previousFullAttempt, reviewStatus, ringState, verdict } from "../utils/results.utils";

const attempt = (runId: string, score: number, kind: Attempt["kind"] = "full"): Attempt => ({
  runId,
  kind,
  finishedAt: "2026-10-08T00:00:00.000Z",
  score,
  total: 10,
  missed: []
});

describe("ringState and verdict", (): void => {
  it("shows progress while running and the score once complete", (): void => {
    expect(ringState(2, 4, 10, false)).toEqual({ value: 0.4, text: "4/10", label: "4 of 10 answered" });
    expect(ringState(9, 10, 10, true)).toEqual({ value: 0.9, text: "90%", label: "90% correct" });
    expect(verdict(0, 9, 10, false)).toBe("1 question left. Pick up where you stopped.");
    expect(verdict(2, 10, 10, true)).toBe(FALLBACK_VERDICT);
  });
});

describe("reviewStatus", (): void => {
  it("separates skipped, wrong and correct answers", (): void => {
    const quiz: ReturnType<typeof quizById> = quizById("single");
    expect(reviewStatus(quiz, undefined)).toBe("skipped");
    expect(reviewStatus(quiz, { selected: ["b"], submitted: true })).toBe("wrong");
    expect(reviewStatus(quiz, { selected: ["a"], submitted: true })).toBe("correct");
  });
});

describe("history texts", (): void => {
  it("compares full runs only", (): void => {
    const history: Attempt[] = [attempt("a", 5), attempt("q", 9, "quick"), attempt("b", 7)];
    expect(previousFullAttempt(history, "b")).toEqual(history[0]);
    expect(deltaText(history[2] ?? null, history[0] ?? null)).toBe("+20 points vs your previous full run (5/10).");
    expect(deltaText(attempt("c", 5), attempt("d", 5))).toBe("Same score as your previous full run.");
    expect(historyLine(attempt("b", 7), attempt("b", 7))).toEqual([
      { text: "Best and last full run:", score: false },
      { text: "7/10", score: true }
    ]);
    expect(
      historyLine(attempt("b", 7), attempt("c", 5))
        ?.filter((segment) => segment.score)
        .map((segment) => segment.text)
    ).toEqual(["7/10", "5/10"]);
    expect(historyLine(null, null)).toBeNull();
  });
});
