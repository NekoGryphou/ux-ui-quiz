import { describe, expect, it } from "vitest";
import type { Quiz } from "../../engine/types/quiz.types";
import { optionsOf } from "../../engine/utils/quiz.utils";
import { locale } from "../../shared/locale.svelte";
import { localizeQuiz } from "../utils/localize.utils";

const quiz: Quiz = localizeQuiz(
  {
    id: "sample",
    kind: "single",
    title: { en: "Title", fr: "Titre" },
    principle: { en: "Principle", fr: "Principe" },
    scenario: { en: "Scenario", fr: "Scénario" },
    prompt: { en: "Prompt", fr: "Question" },
    correct: ["a"],
    choices: [{ id: "a", text: { en: "Yes", fr: "Oui" } }],
    explanation: { en: ["Because"], fr: ["Parce que"] },
    links: [{ label: { en: "Docs", fr: "Doc" }, url: "https://example.com" }]
  },
  (): never => {
    throw new Error("not loaded");
  }
);

describe("localizeQuiz", (): void => {
  it("follows the current language", (): void => {
    locale.set("en");
    expect([quiz.title, optionsOf(quiz)[0]?.text, quiz.links?.[0]?.label]).toEqual(["Title", "Yes", "Docs"]);
    locale.set("fr");
    expect([quiz.title, optionsOf(quiz)[0]?.text, quiz.explanation]).toEqual(["Titre", "Oui", ["Parce que"]]);
    locale.set("en");
  });

  it("keeps the structure", (): void => {
    expect([quiz.id, quiz.kind, quiz.correct]).toEqual(["sample", "single", ["a"]]);
  });
});
