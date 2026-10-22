import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "font-salad",
  kind: "single",
  title: "Six fonts, no hierarchy",
  principle: "Limit typefaces and sizes to build a clear hierarchy",
  scenario: "A couple looks up a neighbourhood bistro to check tonight’s set menu and its price.",
  prompt: "What is the main issue with this page?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Six typefaces and sizes compete, so nothing reads as the title and the price gets lost." },
    { id: "b", text: "The menu sits in a single column, where two columns would fit more dishes on screen." },
    { id: "c", text: "The page uses a cream background, where plain white would make the text look sharper." },
    { id: "d", text: "Dish names come before the descriptions, where the reverse would build more appetite." }
  ],
  explanation: [
    "A script, a slab, a typewriter face, a condensed display font and two sans serifs all fight for attention. With no consistent scale, the restaurant name, the menu title and the price look equally important, and the €38 hides in the middle.",
    "One or two typefaces are enough: a distinctive one for headings and a readable one for text. Build hierarchy with a small set of sizes and weights, used the same way everywhere.",
    "A single column suits a short menu, a cream background is a classic restaurant choice, and leading with dish names is how menus are read."
  ]
};
