import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "vanity-metric",
  kind: "single",
  title: "The spotlight on the wrong number",
  principle: "Give emphasis to what drives the decision",
  scenario: "A founder opens the Monday dashboard to decide whether the business is on track this month.",
  prompt: "What is the main issue with this dashboard?",
  correct: ["c"],
  choices: [
    { id: "a", text: "The dashboard shows four metrics at once, which is more than a founder can take in." },
    { id: "b", text: "Each change compares with last month, where a year-on-year view would be steadier." },
    { id: "c", text: "Page views get the big highlighted card, while falling revenue gets a small tile." },
    { id: "d", text: "Churn is shown as a percentage, where a count of lost customers would be clearer." }
  ],
  explanation: [
    "Visual weight tells users what matters. Here the largest, most colorful card is a vanity metric that is up, while revenue and customers are down.",
    "A glance gives the founder the wrong answer: “we’re growing”. Lead with the metrics the decision depends on, and let warning signs stand out.",
    "Four metrics is a manageable amount, and month-over-month deltas are a reasonable default for a weekly check."
  ]
};
