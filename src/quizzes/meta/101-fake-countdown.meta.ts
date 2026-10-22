import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "fake-countdown",
  kind: "single",
  title: "Only 09:59 left, again",
  principle: "Never invent urgency",
  scenario: "A shopper looks at the same jacket on Monday morning and again on Tuesday evening.",
  prompt: "What is the main issue with this offer?",
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: "The countdown restarts at 10:00 on each visit, so the deadline is fake and only adds pressure."
    },
    { id: "b", text: "The discount badge is red, where a calmer colour would make the price look more trustworthy." },
    { id: "c", text: "The old price is struck through, where hiding it would keep the price block easier to read." },
    { id: "d", text: "The Buy button spans the card, where a smaller button would feel less pushy for a sale item." }
  ],
  explanation: [
    "Monday morning and Tuesday evening, the “offer ends in” timer shows the same 09:59: it simply restarts on every visit. The deadline doesn’t exist: it only rushes shoppers into buying before they compare or think.",
    "Show real deadlines only, with the actual end date (“Sale ends Sunday 23:59”). Fake countdowns, fake low-stock alerts and fake “12 people are looking” banners are dark patterns, and illegal in many regions.",
    "A red discount badge, a struck-through old price and a full-width Buy button are standard product page patterns."
  ]
};
