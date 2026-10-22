import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "unexplained-empty-history",
  kind: "single",
  title: "An empty state that explains nothing",
  principle: "Say why it’s empty and what happens next",
  scenario:
    "A freelancer started a 14-day Pro trial of a design tool. Their accountant asks for an invoice, so they open Billing.",
  prompt: "What is the main issue on this page?",
  correct: ["b"],
  choices: [
    { id: "a", text: "The empty table still shows its column headers, which can look like a loading error." },
    { id: "b", text: "Billing history says “No data” without saying why, or when the first invoice will appear." },
    { id: "c", text: "The plan and the billing history share one page, which makes the page feel crowded." },
    { id: "d", text: "The trial end date sits in small text under the plan name, so it’s easy to miss." }
  ],
  explanation: [
    "An empty state should answer “why is this empty?” and “what happens next?”. “No data” makes users wonder whether billing is broken or the invoice got lost.",
    "Here the answer is known: “No invoices yet. Your first invoice will be issued on Nov 1, when your trial ends.” Add a useful next step, such as setting the billing email.",
    "The trial date is shown in the plan card, but users looking at the history shouldn’t have to connect the two themselves."
  ]
};
