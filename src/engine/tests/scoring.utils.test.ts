import { describe, expect, it } from "vitest";
import type { Quiz } from "../types/quiz.types";
import { choiceOutcome, hotspotResults, isCorrect } from "../utils/scoring.utils";
import { quizById } from "./catalog.fixture";

const multiple: Quiz = quizById("multiple");
const hotspot: Quiz = quizById("hotspot");

describe("isCorrect", (): void => {
  it("is false until the answer is submitted", (): void => {
    expect(isCorrect(multiple, { selected: ["a", "b"], submitted: false })).toBe(false);
    expect(isCorrect(multiple, undefined)).toBe(false);
  });

  it("requires exactly the correct set", (): void => {
    expect(isCorrect(multiple, { selected: ["b", "a"], submitted: true })).toBe(true);
    expect(isCorrect(multiple, { selected: ["a"], submitted: true })).toBe(false);
    expect(isCorrect(multiple, { selected: ["a", "b", "c"], submitted: true })).toBe(false);
  });
});

describe("choiceOutcome", (): void => {
  it("classifies each choice once submitted", (): void => {
    const answer: { selected: string[]; submitted: boolean } = { selected: ["a", "c"], submitted: true };
    expect(choiceOutcome(multiple, answer, "a")).toBe("correct");
    expect(choiceOutcome(multiple, answer, "c")).toBe("wrong");
    expect(choiceOutcome(multiple, answer, "b")).toBe("missed");
    expect(choiceOutcome(multiple, answer, "d")).toBe("neutral");
  });

  it("stays neutral before submission", (): void => {
    expect(choiceOutcome(multiple, { selected: ["c"], submitted: false }, "c")).toBe("neutral");
  });
});

describe("hotspotResults", (): void => {
  it("returns region labels by outcome", (): void => {
    expect(hotspotResults(hotspot, { selected: ["r2"], submitted: true })).toEqual({
      correct: [],
      wrong: ["Menu"],
      missed: ["Header"]
    });
  });

  it("is null for other kinds or unsubmitted answers", (): void => {
    expect(hotspotResults(multiple, { selected: ["a"], submitted: true })).toBeNull();
    expect(hotspotResults(hotspot, { selected: ["r1"], submitted: false })).toBeNull();
  });
});
