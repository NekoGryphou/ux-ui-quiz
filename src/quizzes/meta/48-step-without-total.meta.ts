import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "step-without-total",
  kind: "single",
  title: "Step 2 of who knows",
  principle: "Show where users are in a multi-step task",
  scenario: "A shopper on their phone moves on to the next step of checkout.",
  prompt: "What is the main issue with this checkout step?",
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: "The header says “Step 2” with no total, so the shopper can’t tell how much of checkout is left."
    },
    {
      id: "b",
      text: "The back arrow sits in the top corner, where a button at the bottom would be easier to reach."
    },
    { id: "c", text: "Delivery options are radio buttons, where a dropdown would take less room on a small screen." },
    { id: "d", text: "The Continue button spans the full width, where a smaller button would feel less insistent." }
  ],
  explanation: [
    "“Step 2” alone doesn’t answer the question shoppers ask at every step: how much is left? Without a total, one step to go and five steps to go look the same, and unsure shoppers give up.",
    "Show the position and the total (“Step 2 of 3”), or a stepper that names the remaining steps, so the effort ahead is visible.",
    "A top-left back arrow is the platform convention, radio buttons suit two or three visible options, and a full-width primary button is standard on mobile."
  ]
};
