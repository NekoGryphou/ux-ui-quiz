import { describe, expect, it } from "vitest";
import { RING_LINE, RING_RIM } from "../const/hotspot-ring.const";
import type { Corners } from "../types/hotspot-ring.types";
import { cornerList, lineRadius, mapCorners, ringState, tagInset } from "../utils/hotspot-ring.utils";

describe("ring geometry", (): void => {
  it("maps all four corners in order", (): void => {
    const corners: Corners<number> = mapCorners(
      [1, 2, 3, 4],
      (value: number, corner: number): number => value * 10 + corner
    );
    expect(corners).toEqual([10, 21, 32, 43]);
    expect(cornerList(corners)).toBe("10px 21px 32px 43px");
  });

  it("never returns a negative line radius", (): void => {
    expect(lineRadius(0)).toBe(0);
    expect(lineRadius(RING_RIM + 5)).toBe(5);
  });

  it("puts the tag on the line for square corners", (): void => {
    expect(tagInset(0)).toBe(RING_RIM + RING_LINE / 2);
  });
});

describe("ringState", (): void => {
  it("prioritises outcome, then selection, then hover", (): void => {
    expect(ringState("wrong", true, true)).toBe("wrong");
    expect(ringState("neutral", true, true)).toBe("selected");
    expect(ringState("neutral", false, true)).toBe("hover");
    expect(ringState("neutral", false, false)).toBeNull();
  });
});
