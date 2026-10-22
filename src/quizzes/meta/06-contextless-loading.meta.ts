import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "contextless-loading",
  kind: "single",
  title: "A long wait with no context",
  principle: "Make long-running work visible and escapable",
  scenario:
    "A finance analyst exports a year of transactions to CSV. Exports this size usually take around two minutes.",
  prompt: "What is the main issue with this loading state?",
  correct: ["b"],
  choices: [
    { id: "a", text: "The spinner replaces the whole report area, where a skeleton of the table would fit." },
    { id: "b", text: "For a two-minute export, a lone spinner gives no sense of progress or time left." },
    { id: "c", text: "The loader is a spinner, where a looping progress bar would make the wait feel shorter." },
    { id: "d", text: "The sidebar stays clickable during the export, so users may leave the page by accident." }
  ],
  explanation: [
    "Spinners suit waits of a few seconds. Beyond that, users can’t tell whether the system is working or stuck.",
    "Show determinate progress or an estimate, and let users keep working: “We’ll email you when your export is ready.” Leaving the page should be safe, not prevented.",
    "Skeletons suit content about to appear in place, and a looping bar is still indeterminate: neither tells users how long is left."
  ]
};
