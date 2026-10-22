import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "focus-escapes-dialog",
  kind: "single",
  title: "Lost behind the dialog",
  principle: "Keep keyboard focus inside an open modal",
  scenario:
    "A keyboard user opens the Rename dialog to rename a file. Try it: click the preview and press Tab a few times.",
  prompt: "What is the main issue here?",
  correct: ["a"],
  choices: [
    { id: "a", text: "After the dialog’s buttons, keyboard focus moves on to links on the page behind it." },
    { id: "b", text: "The dialog doesn’t preselect the file name, so users must clear it before typing." },
    { id: "c", text: "The Cancel button comes first, which slows down the most common action in the dialog." },
    { id: "d", text: "The page behind the dialog is dimmed, which makes the surrounding context hard to see." }
  ],
  explanation: [
    "While a modal dialog is open, Tab must cycle through the dialog’s own controls only. Here the fourth Tab slips onto “Share” behind the overlay: the user is now acting on a page they can’t see.",
    "Trap focus inside the dialog, close it with Escape, and return focus to the button that opened it. A native <dialog> opened with showModal(), or inert on the background, does this for you.",
    "Dimming the background is the expected modal pattern, and Cancel-then-confirm is a common button order."
  ],
  links: [
    wcag("2.4.3", "Focus Order", "focus-order"),
    { label: "ARIA pattern: modal dialog", url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" }
  ]
};
