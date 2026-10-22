import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "confirm-chain",
  kind: "single",
  title: "Are you sure you’re sure?",
  principle: "Save confirmations for actions that need them",
  scenario: "An office assistant closes the stock spreadsheet tool at the end of the day, after saving their work.",
  prompt: "What is the main issue with this exit?",
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: "Closing a saved file triggers three confirmations in a row, so people click Yes without reading."
    },
    { id: "b", text: "Each dialog has a warning icon, where a question mark icon would match the questions better." },
    {
      id: "c",
      text: "The dialogs use Yes and No, where buttons naming each action would be clearer to scan quickly."
    },
    {
      id: "d",
      text: "The dialogs stack on top of each other, where replacing each one would keep the screen tidier."
    }
  ],
  explanation: [
    "The work is saved and closing loses nothing, yet the tool asks three times. Users learn that these dialogs never matter, click through them by reflex, and will do the same on the day a warning is real.",
    "Confirm only actions that are destructive and can’t be undone, and say what will be lost. For everything else, just do it, or offer undo.",
    "The icons, the Yes/No wording and the stacking would each be worth polishing, but none of them is the core problem: the questions shouldn’t be asked at all."
  ]
};
