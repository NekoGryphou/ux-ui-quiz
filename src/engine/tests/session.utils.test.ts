import { describe, expect, it } from "vitest";
import type { RunData } from "../types/run.types";
import { createRun, parseHistory, parseRun, quickRunIds } from "../utils/session.utils";
import { CATALOG } from "./catalog.fixture";

const stored = (data: Record<string, unknown>): string => JSON.stringify(data);

describe("createRun", (): void => {
  it("deals every quiz once in a random full run", (): void => {
    const run: RunData = createRun(CATALOG, { kind: "full" });
    expect([...run.order].sort()).toEqual([...CATALOG.order].sort());
  });

  it("shuffles only the requested ids", (): void => {
    const run: RunData = createRun(CATALOG, { kind: "retry", ids: ["single", "compare"] });
    expect([...run.order].sort()).toEqual(["compare", "single"]);
  });
});

describe("parseRun", (): void => {
  const complete: Record<string, unknown> = { id: "r", seed: 3, kind: "retry", order: ["single"], answers: {} };

  it("rejects unreadable or incomplete data", (): void => {
    expect(parseRun(CATALOG, null)).toBeNull();
    expect(parseRun(CATALOG, "{not json")).toBeNull();
    expect(parseRun(CATALOG, stored({ ...complete, seed: undefined }))).toBeNull();
    expect(parseRun(CATALOG, stored({ ...complete, id: undefined }))).toBeNull();
    expect(parseRun(CATALOG, stored({ ...complete, kind: "other" }))).toBeNull();
    expect(parseRun(CATALOG, stored({ ...complete, order: undefined }))).toBeNull();
    expect(parseRun(CATALOG, stored({ ...complete, order: ["gone"] }))).toBeNull();
  });

  it("drops unknown and duplicate quiz ids from the order", (): void => {
    const run: RunData | null = parseRun(
      CATALOG,
      stored({ ...complete, order: ["single", "gone", "single", "compare"] })
    );
    expect(run?.order).toEqual(["single", "compare"]);
  });

  it("keeps only valid answers for quizzes in the run", (): void => {
    const run: RunData | null = parseRun(
      CATALOG,
      stored({
        ...complete,
        order: ["single", "multiple", "hotspot"],
        answers: {
          single: { selected: ["a"], submitted: true },
          multiple: { selected: ["a", "zz"], submitted: true },
          hotspot: { selected: ["r1", "zz"], submitted: false },
          compare: { selected: ["a"], submitted: true }
        }
      })
    );
    expect(run?.answers).toEqual({
      single: { selected: ["a"], submitted: true },
      hotspot: { selected: ["r1"], submitted: false }
    });
  });
});

describe("quickRunIds", (): void => {
  it("puts priority ids first and caps the size", (): void => {
    const ids: string[] = quickRunIds(CATALOG, ["compare"], 7, 3);
    expect(ids).toHaveLength(3);
    expect(ids[0]).toBe("compare");
    expect(new Set(ids).size).toBe(3);
  });
});

describe("parseHistory", (): void => {
  it("keeps only well-formed attempts", (): void => {
    const valid: Record<string, unknown> = {
      runId: "r",
      kind: "full",
      finishedAt: "2026-10-02T00:00:00.000Z",
      score: 2,
      total: 3,
      missed: ["single"]
    };
    expect(parseHistory(JSON.stringify([valid, { ...valid, kind: "other" }, 4]))).toEqual([valid]);
    expect(
      parseHistory(
        JSON.stringify([
          { ...valid, total: 0, score: 0 },
          { ...valid, score: 4 },
          { ...valid, score: -1 },
          { ...valid, score: 1.5 }
        ])
      )
    ).toEqual([]);
    expect(parseHistory("nope")).toEqual([]);
  });
});
