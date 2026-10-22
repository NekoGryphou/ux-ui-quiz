import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_COLD_BREW, PHOTO_GRANOLA, PHOTO_HONEY } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "tiny-tap-targets",
  kind: "single",
  title: "Controls too small to tap",
  principle: "Size and space touch targets for fingers",
  scenario: "A shopper on their phone wants to add a second jar of honey to their cart before checking out.",
  prompt: "What is the main issue on this screen?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The quantity and delete controls are tiny and packed together, so taps easily miss." },
    { id: "b", text: "Each row shows the unit price next to the quantity, which makes totals harder to scan." },
    { id: "c", text: "The checkout button sits at the bottom, where it could cover the last item in the cart." },
    { id: "d", text: "Product photos are small thumbnails, so shoppers can’t check exactly what they ordered." }
  ],
  explanation: [
    "Fingers need room: aim for 44×44 pt (Apple) or 48×48 dp (Material), and never below 24×24 px with spacing (WCAG 2.5.8 Target Size).",
    "Here “+” sits a few pixels from the delete icon, so trying to add a jar can remove the item instead.",
    "Give each control a large hit area and keep destructive actions away from frequent ones, e.g. delete via swipe or a separate “Remove” link.",
    photoCredits([PHOTO_HONEY, PHOTO_GRANOLA, PHOTO_COLD_BREW])
  ],
  links: [wcag("2.5.8", "Target Size (Minimum)", "target-size-minimum")]
};
