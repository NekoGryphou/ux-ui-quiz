import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_SHOE_TRAIL } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "misleading-continue",
  kind: "single",
  title: "“Continue” that places the order",
  principle: "Label actions by their real outcome",
  scenario: "A shopper reaches the payment step of checkout and wants to double-check the order before paying.",
  prompt: "What is the main issue on this step?",
  correct: ["b"],
  choices: [
    { id: "a", text: "The saved Visa card is preselected, which nudges users to pay without checking it." },
    { id: "b", text: "The button reads “Continue”, yet clicking it places the order and charges the card." },
    { id: "c", text: "The order summary sits on the right, away from the payment details it relates to." },
    { id: "d", text: "The way back to Shipping is a plain text link, so it’s easy to overlook." }
  ],
  explanation: [
    "Button labels set expectations. “Continue”, with a stepper that still shows a Review step, promises another step, not a payment.",
    "Commitments involving money need an explicit label such as “Pay €84.90” or “Place order”.",
    "Fine print under the button doesn’t fix a misleading label: most users never read it.",
    photoCredits([PHOTO_SHOE_TRAIL])
  ]
};
