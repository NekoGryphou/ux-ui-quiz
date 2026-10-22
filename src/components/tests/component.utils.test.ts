import { describe, expect, it } from "vitest";
import { outcomeLabel } from "../utils/choice.utils";
import { kindBadgeLook } from "../utils/kind-badge.utils";

describe("outcomeLabel", (): void => {
  it("labels missed answers by question kind", (): void => {
    expect(outcomeLabel("correct", false)).toBe("Correct");
    expect(outcomeLabel("wrong", true)).toBe("Incorrect");
    expect(outcomeLabel("missed", true)).toBe("Missed");
    expect(outcomeLabel("missed", false)).toBe("Correct answer");
    expect(outcomeLabel("neutral", false)).toBe("");
  });
});

describe("kindBadgeLook", (): void => {
  it("adapts the hotspot wording to the number of answers", (): void => {
    expect(kindBadgeLook("hotspot", false).text).toBe("Click the problem");
    expect(kindBadgeLook("hotspot", true).text).toBe("Click every problem");
    expect(kindBadgeLook("compare", false)).toEqual({ icon: "columns", text: "Pick the better one", tone: "compare" });
  });
});
