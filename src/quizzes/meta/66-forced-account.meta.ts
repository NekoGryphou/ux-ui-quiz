import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_CANDLES } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "forced-account",
  kind: "single",
  title: "Join us, or no candle",
  principle: "Let people buy without creating an account",
  scenario: "A visitor buys a single scented candle as a last-minute gift and heads to checkout.",
  prompt: "What is the main issue with this checkout step?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Paying requires creating an account first, so a one-off gift buyer must sign up to pay." },
    { id: "b", text: "The order summary sits on the right, where above the form it would be seen sooner." },
    { id: "c", text: "The password needs eight characters, where four would make the form quicker to fill." },
    { id: "d", text: "The sign-up asks for a first name, where an email alone would be enough to continue." }
  ],
  explanation: [
    "Forcing an account before payment is one of the most common reasons people abandon checkout: a one-off buyer has to invent a password and accept marketing terms just to send a €24 candle.",
    "Offer guest checkout as the default path, and suggest creating an account after the order, when the benefit (tracking, faster reorders) is clear and the email is already known.",
    "A summary on the side, an eight-character minimum and a first name for the delivery are all reasonable on their own.",
    photoCredits([PHOTO_CANDLES])
  ]
};
