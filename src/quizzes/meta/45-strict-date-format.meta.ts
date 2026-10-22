import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "strict-date-format",
  kind: "single",
  title: "Invalid date, apparently",
  principle: "Accept input in the formats people naturally use",
  scenario: "A consultant fills in their weekly timesheet in the company’s time-tracking tool.",
  prompt: "What is the main issue with this form?",
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: "The field rejects a valid date over its slashes, where it could accept and convert common formats."
    },
    {
      id: "b",
      text: "The format hint sits inside the label, where help text under the field would be easier to notice."
    },
    {
      id: "c",
      text: "The error appears as text next to the field, where a pop-up message would make sure it gets read."
    },
    {
      id: "d",
      text: "The hours grid uses one column per day, where a single weekly total would be quicker to fill in."
    }
  ],
  explanation: [
    "“14/05/2025” is a perfectly clear date; the tool refuses it only because it expects 14052025 without separators. The consultant is blocked for typing a date the way everyone writes it.",
    "Be liberal in what you accept: ignore spaces and separators, accept common orders and month names, then show the date back in one clear format so people can check it.",
    "The label does state the format, an inline message next to the field is the right place for an error, and per-day columns match how timesheets are reviewed."
  ]
};
