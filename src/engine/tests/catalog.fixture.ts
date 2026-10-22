import type { QuizCatalog } from "../types/catalog.types";
import type { Quiz, QuizMeta, QuizVisual } from "../types/quiz.types";
import { createCatalog } from "../utils/catalog.utils";

const BASE: Pick<QuizMeta, "title" | "principle" | "scenario" | "prompt" | "explanation"> = {
  title: "Title",
  principle: "Principle",
  scenario: "Scenario",
  prompt: "Prompt",
  explanation: ["Because."]
};

const visual: QuizVisual = (): Record<string, never> => ({});

export const SINGLE: QuizMeta = {
  id: "single",
  kind: "single",
  ...BASE,
  correct: ["a"],
  choices: [
    { id: "a", text: "A" },
    { id: "b", text: "B" },
    { id: "c", text: "C" }
  ]
};

const MULTIPLE: QuizMeta = {
  id: "multiple",
  kind: "multiple",
  ...BASE,
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "A" },
    { id: "b", text: "B" },
    { id: "c", text: "C" },
    { id: "d", text: "D" }
  ]
};

export const HOTSPOT: QuizMeta = {
  id: "hotspot",
  kind: "hotspot",
  ...BASE,
  correct: ["r1"],
  regions: [
    { id: "r1", text: "Header" },
    { id: "r2", text: "Menu" },
    { id: "r3", text: "Footer" },
    { id: "r4", text: "Sidebar" }
  ]
};

const COMPARE: QuizMeta = { id: "compare", kind: "compare", ...BASE, correct: ["b"] };

const METAS: readonly QuizMeta[] = [SINGLE, MULTIPLE, HOTSPOT, COMPARE];

export const QUIZZES: readonly Quiz[] = METAS.map((meta: QuizMeta): Quiz => ({
  ...meta,
  loadVisual: (): Promise<QuizVisual> => Promise.resolve(visual)
}));

export const CATALOG: QuizCatalog = createCatalog(QUIZZES);

export const quizById = (id: string): Quiz => {
  const quiz: Quiz | undefined = CATALOG.byId.get(id);
  if (quiz === undefined) throw new Error(`Unknown fixture quiz "${id}".`);
  return quiz;
};
