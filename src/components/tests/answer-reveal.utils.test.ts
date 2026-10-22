import { describe, expect, it } from "vitest";
import type { RevealSegment } from "../types/answer-reveal.types";
import { outcomeSentence } from "../utils/answer-reveal.utils";

const text = (segments: RevealSegment[]): string =>
  segments.map((segment: RevealSegment): string => segment.text).join("");

describe("outcomeSentence", (): void => {
  it("confirms a single correct pick", (): void => {
    expect(text(outcomeSentence({ correct: ["Header"], wrong: [], missed: [] }, false))).toBe("You found it: Header.");
  });

  it("names the wrong pick and the answer", (): void => {
    expect(text(outcomeSentence({ correct: [], wrong: ["Menu"], missed: ["Header"] }, false))).toBe(
      "You picked Menu. The problem is Header."
    );
  });

  it("lists found, missed and fine areas when several are allowed", (): void => {
    expect(text(outcomeSentence({ correct: ["A"], wrong: ["C", "D"], missed: ["B"] }, true))).toBe(
      "You found A. You missed B. C and D are fine as they are."
    );
  });
});
