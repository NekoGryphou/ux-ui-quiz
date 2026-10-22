import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_SHOE_MIZUNO } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "toast-over-action",
  kind: "single",
  title: "A confirmation in the way",
  principle: "Never cover the next action with feedback",
  scenario:
    "A shopper taps “Add to cart” and wants to check out right away. The confirmation stays on screen for six seconds.",
  prompt: "What is the main issue on this screen?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The confirmation toast sits over the buy bar, hiding the button users need next." },
    { id: "b", text: "The toast confirms the action without a thumbnail of the item that was added." },
    { id: "c", text: "The toast offers “View cart” as plain text, where a button style would stand out." },
    { id: "d", text: "The toast stays for six seconds, where three seconds would feel more responsive." }
  ],
  explanation: [
    "The feedback lands exactly where the next action lives: for six seconds the shopper can’t reach Checkout, or has to wait.",
    "Show confirmations where they don’t block anything: above the action bar, inline next to the button (“Added ✓”), or as a cart badge.",
    "Six seconds is a reasonable duration for a toast with an action; the placement is the problem.",
    photoCredits([PHOTO_SHOE_MIZUNO])
  ]
};
