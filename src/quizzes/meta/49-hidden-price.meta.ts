import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "hidden-price",
  kind: "multiple",
  title: "€9 a month, €108 today",
  principle: "Show the full price upfront",
  scenario: "A freelancer compares plans for a design tool and picks the one that fits their monthly budget.",
  prompt: "Which issues make these prices hard to trust?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "The big €9 is a monthly rate on a yearly bill, so the charge today is €108, not €9." },
    { id: "b", text: "A setup fee is mentioned but not priced, so the real total only shows at checkout." },
    { id: "c", text: "The plans sit side by side, where a comparison table would line up every feature." },
    { id: "d", text: "The prices end in 9 instead of round numbers, which can make plans feel less premium." }
  ],
  explanation: [
    "The headline €9 isn’t what the freelancer pays: the plan is billed yearly (€108 today), and a setup fee of unknown size is added at checkout. The price they budgeted for is not the price they’ll be charged.",
    "Lead with the amount charged and its period (“€108 billed yearly”, with “€9/month” as a helper), and include every mandatory fee upfront. Many consumer laws require the total price, unavoidable fees included, to be shown before purchase.",
    "Side-by-side cards are fine for two plans, and prices ending in 9 are a marketing choice, not a usability flaw."
  ]
};
