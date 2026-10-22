import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_SHOE_CRYSTA, PHOTO_SHOE_ECCO, PHOTO_SHOE_MIZUNO, PHOTO_SHOE_TRAIL } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "hover-only-actions",
  kind: "single",
  title: "Hover to buy (on a phone)",
  principle: "Don’t hide essential actions behind hover",
  scenario: "A shopper browses sneakers on their phone and wants to add a pair in their size to the bag.",
  prompt: "What is the main issue with this product grid?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Sizes and “Add to bag” only appear on hover, so touch users can’t see how to buy." },
    { id: "b", text: "The grid shows two products per row, where one per row would show bigger photos." },
    { id: "c", text: "Prices sit under the product names, where above them they would be seen sooner." },
    { id: "d", text: "The filter button sits at the top, where a bottom bar would be closer to thumbs." }
  ],
  explanation: [
    "On desktop, hovering a card reveals the sizes and an “Add to bag” button. Touch screens have no hover: the cards show only a photo, a name and a price, and nothing hints that buying is possible from here.",
    "Show essential actions all the time, or make the whole card open a page where they are visible. Hover can add shortcuts for mouse users, never the only path.",
    "Two products per row, price under the name and a filter button at the top are standard mobile shop patterns.",
    photoCredits([PHOTO_SHOE_TRAIL, PHOTO_SHOE_CRYSTA, PHOTO_SHOE_ECCO, PHOTO_SHOE_MIZUNO])
  ]
};
