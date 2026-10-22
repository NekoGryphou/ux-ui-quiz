import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "div-button",
  kind: "compare",
  title: "A button that isn’t one",
  principle: "Use native interactive elements",
  scenario: "Two developers implement the close icon of a side panel. Both versions look identical on screen.",
  prompt: "Which implementation works better?",
  correct: ["b"],
  explanation: [
    "A div with a click handler can’t be reached with Tab or activated with Enter or Space, and screen readers don’t know it’s a button (WCAG 2.1.1 Keyboard, 4.1.2 Name, Role, Value).",
    'A native <button> brings focus, keyboard activation and the button role for free. Because it only shows an icon, it also needs a name: aria-label="Close panel", with the decorative SVG hidden.',
    "Rebuilding all of that on a div (tabindex, key handlers, role) is possible but fragile; the native element is simpler and more robust."
  ],
  links: [wcag("2.1.1", "Keyboard", "keyboard"), wcag("4.1.2", "Name, Role, Value", "name-role-value")]
};
