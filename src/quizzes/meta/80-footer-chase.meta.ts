import type { QuizMeta } from "../../engine/types/quiz.types";
import {
  PHOTO_AMARYLLIS,
  PHOTO_ARMCHAIR,
  PHOTO_CANDLES,
  PHOTO_LAMP,
  PHOTO_MUG,
  PHOTO_SIDE_TABLE,
  PHOTO_VASE,
  PHOTO_VASE_FLORAL
} from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "footer-chase",
  kind: "single",
  motion: true,
  title: "The footer that runs away",
  principle: "Don’t put infinite scroll above content people need to reach",
  scenario: "A customer scrolls to the bottom of a homeware shop to find the returns policy link. Watch the page.",
  prompt: "What is the main issue with this page?",
  correct: ["a"],
  choices: [
    { id: "a", text: "New products load each time the footer appears, so its links can never be reached." },
    { id: "b", text: "Products show in a three-column grid, where a list would show more details for each." },
    { id: "c", text: "The footer holds many small links, where a single “Help” link would keep it simpler." },
    { id: "d", text: "New products fade in as they load, where showing them all at once would feel faster." }
  ],
  explanation: [
    "Every time the customer reaches the footer, infinite scroll loads another batch of products and pushes it away. The returns policy, contact and legal links are visible for a second, then out of reach, forever.",
    "If you use infinite scroll, keep essential links elsewhere (a sticky help link or the header), or switch to a “Load more” button so people choose when to add products and can always reach the footer.",
    "A product grid, a detailed footer and a soft fade-in are all fine on their own.",
    photoCredits([
      PHOTO_ARMCHAIR,
      PHOTO_LAMP,
      PHOTO_VASE,
      PHOTO_CANDLES,
      PHOTO_SIDE_TABLE,
      PHOTO_MUG,
      PHOTO_AMARYLLIS,
      PHOTO_VASE_FLORAL
    ])
  ]
};
