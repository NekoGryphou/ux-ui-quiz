import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_SHOE_TRAIL } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "size-picker",
  kind: "multiple",
  title: "Sold out, but you can’t tell",
  principle: "Show availability and explain disabled actions",
  scenario: "A shopper needs size 44, which is sold out. They select it and try to add the shoes to their cart.",
  prompt: "Which issues make this product page frustrating?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "Sold-out sizes look exactly like available ones, so shoppers can select them." },
    { id: "b", text: "Add to cart is disabled without any message explaining why it can’t be used." },
    { id: "c", text: "Sizes are shown in EU format only, with no conversion to UK or US sizes." },
    { id: "d", text: "The price sits above the size picker, where it’s read before the size is chosen." }
  ],
  explanation: [
    "Nothing marks 41 and 44 as unavailable, so the shopper picks one and hits a wall. Strike through or dim sold-out sizes, and say so in text for screen reader users.",
    "A disabled button with no reason is a dead end. Explain it next to the button (“Size 44 is sold out”) and offer a way forward: “Notify me when it’s back”.",
    "EU sizing with a size guide link is standard for this market, and showing the price before the options is the usual product page order.",
    photoCredits([PHOTO_SHOE_TRAIL])
  ]
};
