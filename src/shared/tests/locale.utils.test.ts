import { describe, expect, it } from "vitest";
import { locale, pick, plural, t } from "../locale.svelte";
import { parseLocale, preferredLocale } from "../utils/locale.utils";

describe("locale helpers", (): void => {
  it("parses only supported languages", (): void => {
    expect(parseLocale("fr")).toBe("fr");
    expect(parseLocale("de")).toBeNull();
    expect(parseLocale(null)).toBeNull();
  });

  it("picks the first supported browser language", (): void => {
    expect(preferredLocale(["de-DE", "fr-CA", "en-US"])).toBe("fr");
    expect(preferredLocale(["de-DE"])).toBe("en");
    expect(preferredLocale([])).toBe("en");
  });

  it("translates in the current language", (): void => {
    locale.set("fr");
    expect(pick({ en: "Search", fr: "Rechercher" })).toBe("Rechercher");
    expect(t("Search", "Rechercher")).toBe("Rechercher");
    locale.set("en");
    expect(t("Search", "Rechercher")).toBe("Search");
  });

  it("follows each language's plural rule", (): void => {
    const forms: { en: [string, string]; fr: [string, string] } = {
      en: ["answer", "answers"],
      fr: ["réponse", "réponses"]
    };
    expect([0, 1, 2].map((count: number): string => plural(count, forms))).toEqual(["answers", "answer", "answers"]);
    locale.set("fr");
    expect([0, 1, 2].map((count: number): string => plural(count, forms))).toEqual(["réponse", "réponse", "réponses"]);
    locale.set("en");
  });
});
