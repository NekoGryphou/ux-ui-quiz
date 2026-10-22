import type { HighlighterCore } from "shiki/core";
import { describe, expect, it } from "vitest";
import type { CodeToken } from "../types/code.types";
import { markStyle } from "../utils/brand-mark.utils";
import { languageOf, loadHighlighter, plainLines, toCodeToken } from "../utils/code.utils";
import { nextStop } from "../utils/keyboard.utils";

describe("code highlighting", (): void => {
  it("keeps the source text and colors each token", async (): Promise<void> => {
    const highlighter: HighlighterCore = await loadHighlighter();
    const lines: CodeToken[][] = highlighter
      .codeToTokens('<img alt="Shoe">\n<style>.a { color: red; }</style>', { lang: "html", theme: "one-dark-pro" })
      .tokens.map((line) => line.map(toCodeToken));
    expect(lines).toHaveLength(2);
    expect(lines[0]?.map((token: CodeToken): string => token.content).join("")).toBe('<img alt="Shoe">');
    expect(new Set(lines[1]?.map((token: CodeToken): string | undefined => token.color)).size).toBeGreaterThan(2);
  });

  it("marks comments as italic", async (): Promise<void> => {
    const highlighter: HighlighterCore = await loadHighlighter();
    const [comment] =
      highlighter.codeToTokens("// note", { lang: "javascript", theme: "one-dark-pro" }).tokens[0] ?? [];
    expect(comment !== undefined && toCodeToken(comment).italic).toBe(true);
  });

  it("shows plain lines before Shiki loads", (): void => {
    expect(plainLines("a\nb")).toEqual([
      [{ content: "a", color: undefined, italic: false }],
      [{ content: "b", color: undefined, italic: false }]
    ]);
  });
});

describe("languageOf", (): void => {
  it("reads the language from the file extension", (): void => {
    expect(languageOf("address.js")).toBe("javascript");
    expect(languageOf("recipe.css")).toBe("css");
    expect(languageOf("AddressStep.html")).toBe("html");
    expect(languageOf("README")).toBe("html");
  });
});

describe("markStyle", (): void => {
  it("is stable for a name and uses its initial", (): void => {
    expect(markStyle("Ledgerly")).toEqual(markStyle("Ledgerly"));
    expect(markStyle(" tallybooks ").initial).toBe("T");
  });
});

describe("nextStop", (): void => {
  it("moves through stops and leaves at both ends", (): void => {
    expect(nextStop(-1, 3, false)).toBe(0);
    expect(nextStop(1, 3, false)).toBe(2);
    expect(nextStop(2, 3, false)).toBeNull();
    expect(nextStop(1, 3, true)).toBe(0);
    expect(nextStop(-1, 3, true)).toBeNull();
  });
});
