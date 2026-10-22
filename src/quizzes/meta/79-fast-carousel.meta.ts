import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_CINEMA_SCREEN, PHOTO_CINEMA_SEATS, PHOTO_POPCORN } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "fast-carousel",
  kind: "single",
  motion: true,
  title: "Gone before you finish reading",
  principle: "Let people control carousels, and give slides time to be read",
  scenario: "A visitor on a cinema chain’s homepage tries to read the student offer shown in the hero. Watch the hero.",
  prompt: "What is the main issue with this hero?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Slides change every two seconds with no pause, so offers vanish before they can be read." },
    {
      id: "b",
      text: "Each slide uses a full-width photo, where a plain color would load faster on mobile data."
    },
    { id: "c", text: "The hero shows three offers, where showing only the most popular one would be clearer." },
    { id: "d", text: "The slide text is left-aligned, where centered text would balance the photos better." }
  ],
  explanation: [
    "Each slide stays about two seconds: barely enough to read a headline, never the conditions. The only controls are three tiny dots, and nothing pauses on hover or focus, so slow readers, screen magnifier users and anyone distracted miss the offer.",
    "If you use a carousel, keep slides up at least 5–7 seconds, pause on hover and focus, and offer visible previous, next and pause controls (WCAG 2.2.2 Pause, Stop, Hide). Often, a static hero with the single most important offer works better.",
    "Photo backgrounds with a dark scrim, several offers and left-aligned text are all normal hero choices.",
    photoCredits([PHOTO_CINEMA_SEATS, PHOTO_CINEMA_SCREEN, PHOTO_POPCORN])
  ],
  links: [wcag("2.2.2", "Pause, Stop, Hide", "pause-stop-hide")]
};
