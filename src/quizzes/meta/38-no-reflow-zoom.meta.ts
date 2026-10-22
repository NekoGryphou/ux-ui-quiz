import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "no-reflow-zoom",
  kind: "hotspot",
  title: "Zoomed in, cut off",
  principle: "Let content reflow at high zoom",
  scenario: "A user with low vision browses a garden shop at 400% zoom: the page now behaves like a 320px-wide window.",
  prompt: "Click the part of the page that fails this user.",
  correct: ["promo"],
  regions: [
    { id: "header", text: "Header" },
    { id: "promo", text: "Promotion banner" },
    { id: "headline", text: "Headline" },
    { id: "body", text: "Body text" },
    { id: "table", text: "Delivery prices table" },
    { id: "footer", text: "Footer links" }
  ],
  explanation: [
    "The promotion banner has a fixed width, stays on one line and hides its overflow: at 400% zoom its text is simply cut off, so the offer and its conditions are lost (WCAG 1.4.10 Reflow).",
    "Use flexible widths and let text wrap. Content should fit in 320 CSS pixels without loss and without scrolling sideways.",
    "The delivery table scrolling sideways is acceptable: data tables are one of the allowed exceptions, because their meaning depends on the two-dimensional layout."
  ],
  links: [wcag("1.4.10", "Reflow", "reflow")]
};
