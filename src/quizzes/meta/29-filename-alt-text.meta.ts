import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "filename-alt-text",
  kind: "hotspot",
  title: "An image named after its file",
  principle: "Give meaningful images a meaningful text alternative",
  scenario: "A developer asks for a quick accessibility review of a product card before it ships.",
  prompt: "Click the part of the markup that fails screen reader users.",
  correct: ["image"],
  regions: [
    { id: "image", text: "Line 2: image" },
    { id: "name", text: "Line 3: product name" },
    { id: "price", text: "Line 4: price" },
    { id: "size", text: "Lines 5–9: size field" },
    { id: "button", text: "Line 10: button" }
  ],
  explanation: [
    "The alt text is the file name, so a screen reader announces “IMG_2041.jpg”: noise instead of information (WCAG 1.1.1 Non-text Content).",
    'Describe what the image adds: alt="Trail Runner 2 in blue, side view". If the image only repeats the heading, an empty alt="" tells assistive tech to skip it.',
    "The rest is solid: a real heading, a label tied to its select with for/id, and a native button with visible text."
  ],
  links: [wcag("1.1.1", "Non-text Content", "non-text-content")]
};
