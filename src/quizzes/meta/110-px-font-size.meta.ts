import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "px-font-size",
  kind: "compare",
  title: "Text that ignores the reader’s setting",
  principle: "Size text in relative units so it follows the browser’s font setting",
  scenario:
    "A reader with low vision has raised their browser’s default font size to 24px and opens a recipe page. Each version shows the stylesheet and the page as this reader sees it.",
  prompt: "Which stylesheet works better for this reader?",
  correct: ["a"],
  explanation: [
    "Sizes in px are fixed: the recipe text stays at 16px even though the reader asked the browser for 24px, so they have to zoom every page or strain to read (WCAG 1.4.4 Resize Text).",
    "rem is relative to the root font size, which follows the browser setting: 1rem becomes 24px for this reader and stays 16px for everyone on the default.",
    "Page zoom would scale px text too, but many people set a larger default font size once rather than zooming each site. Both stylesheets use the same sizes and line height; only the units differ."
  ],
  links: [wcag("1.4.4", "Resize Text", "resize-text")]
};
