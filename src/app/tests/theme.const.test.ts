import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { THEME_STORAGE_KEY } from "../const/theme.const";

describe("THEME_STORAGE_KEY", (): void => {
  it("matches the key read by the pre-paint script in index.html", (): void => {
    const html: string = readFileSync(new URL("../../../index.html", import.meta.url), "utf8");
    expect(html).toContain(`localStorage.getItem("${THEME_STORAGE_KEY}")`);
  });
});
