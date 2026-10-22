import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_ARMCHAIR } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "slow-product-page",
  kind: "multiple",
  title: "A product page that loads in fits and starts",
  principle: "Load what’s on screen first and keep the page stable while it loads",
  scenario:
    "A front-end developer reviews the markup of a product page, next to a filmstrip of its first load on a mid-range phone.",
  prompt: "Which issues in this markup hurt the loading experience?",
  correct: ["a", "c", "d"],
  choices: [
    { id: "a", text: "The main photo is lazy-loaded, so the largest image waits for layout before it downloads." },
    { id: "b", text: "The legs photo lists two files in srcset, so the browser downloads both of them each time." },
    { id: "c", text: "The two detail photos have no dimensions, so the content below jumps as each one arrives." },
    { id: "d", text: "The title font has no font-display, so the product name stays invisible while it loads." },
    { id: "e", text: "The page preconnects to the font CDN, so the browser opens a connection it never uses." }
  ],
  explanation: [
    'loading="lazy" on an image that is visible straight away makes the browser wait for layout before fetching it, which delays the largest paint of the page. Load the hero eagerly, ideally with fetchpriority="high".',
    "Without width and height, the browser can’t reserve space for the detail photos: the row has no height until they arrive, then pushes the Add to cart button down just as the shopper reaches for it. Set both attributes, or an aspect-ratio in CSS.",
    "With no font-display, most browsers hide text set in a web font for up to three seconds while it downloads. font-display: swap shows the fallback serif straight away.",
    'srcset lets the browser pick one file for the screen, decoding="async" keeps image decoding off the critical path, and preconnecting to the font host saves a round trip: all three help.',
    photoCredits([PHOTO_ARMCHAIR])
  ]
};
