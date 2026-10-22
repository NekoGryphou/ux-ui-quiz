import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "tab-order",
  kind: "multiple",
  title: "A tour of the page before the form",
  principle: "Keep keyboard order logical and let users skip repeated blocks",
  scenario:
    "A keyboard user opens a contact page to send a message. Try it: click the preview and press Tab to move through the page as they would.",
  prompt: "Which issues will this keyboard user run into?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "Inside the form, focus jumps to Send before the Name and Company fields." },
    { id: "b", text: "Fourteen header links come before the form, with no way to skip past them." },
    { id: "c", text: "The header links are plain text, where icons would make them faster to scan." },
    { id: "d", text: "The form has no placeholder text showing the expected format of each field." }
  ],
  explanation: [
    "Focus order must follow the visual order (WCAG 2.4.3 Focus Order). Positive tabindex values usually cause jumps like this one; keep the DOM in reading order instead.",
    "Before reaching the form, the user presses Tab 14 times through the header. A “Skip to content” link as the first stop solves it (WCAG 2.4.1 Bypass Blocks).",
    "Text links are the clearest navigation, and visible labels already explain each field."
  ],
  links: [wcag("2.4.3", "Focus Order", "focus-order"), wcag("2.4.1", "Bypass Blocks", "bypass-blocks")]
};
