import { describe, expect, it } from "vitest";
import { PHOTO_HONEY } from "../const/photo.const";
import { WCAG_UNDERSTANDING_BASE } from "../const/wcag.const";
import { photoCredits } from "../utils/photo.utils";
import { byFileOrder, visualPathFor } from "../utils/registry.utils";
import { wcag } from "../utils/wcag.utils";

describe("registry helpers", (): void => {
  it("maps a meta file to its visual", (): void => {
    expect(visualPathFor("./meta/12-tab-bar.meta.ts")).toBe("./12-tab-bar.svelte");
  });

  it("sorts files by their numeric prefix", (): void => {
    const paths: [string, unknown][] = [
      ["./meta/100-a.meta.ts", null],
      ["./meta/9-b.meta.ts", null],
      ["./meta/10-c.meta.ts", null]
    ];
    expect(paths.sort(byFileOrder).map(([path]: [string, unknown]): string => path)).toEqual([
      "./meta/9-b.meta.ts",
      "./meta/10-c.meta.ts",
      "./meta/100-a.meta.ts"
    ]);
  });
});

describe("content helpers", (): void => {
  it("builds WCAG links and photo credits", (): void => {
    expect(wcag("1.4.3", "Contrast (Minimum)", "contrast-minimum")).toEqual({
      label: "WCAG 1.4.3 Contrast (Minimum)",
      url: `${WCAG_UNDERSTANDING_BASE}contrast-minimum.html`
    });
    expect(photoCredits([PHOTO_HONEY, PHOTO_HONEY])).toBe(
      `Photos from Wikimedia Commons: ${PHOTO_HONEY.title} (${PHOTO_HONEY.license}).`
    );
  });
});
