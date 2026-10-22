import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "vanishing-undo",
  kind: "single",
  motion: true,
  title: "Undo, for two seconds only",
  principle: "Give people enough time to act on a message",
  scenario: "A user archives the wrong email by accident and reaches for the Undo button. Watch the screen.",
  prompt: "What is the main issue with this screen?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The Undo toast vanishes after two seconds, before most people can reach and tap it." },
    { id: "b", text: "The toast sits at the bottom, where a banner at the top would be seen more quickly." },
    { id: "c", text: "The toast is dark on a light app, where a light toast would match the theme better." },
    { id: "d", text: "Archiving happens on swipe, where a confirmation dialog would avoid any mistakes." }
  ],
  explanation: [
    "Undo is the safety net for a quick swipe, but the toast is gone after about two seconds: just enough to read “Archived”, not enough to move a thumb to Undo, and far too short for screen reader or switch users.",
    "Keep undo messages up long enough (5–10 seconds), pause the timer while they’re hovered or focused, and keep the action reachable afterwards (for example in an “Archived” view).",
    "A bottom toast, a dark toast and swipe-to-archive with undo are all common, sound patterns."
  ]
};
