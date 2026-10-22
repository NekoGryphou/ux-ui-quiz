import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "marquee-news",
  kind: "hotspot",
  motion: true,
  title: "News that won’t sit still",
  principle: "Let users pause, stop or hide moving content",
  scenario: "A club member opens the chess club’s website to check when this week’s tournament starts.",
  prompt: "Click the part of the page that keeps this member from getting the information.",
  correct: ["ticker"],
  regions: [
    { id: "banner", text: "Site title" },
    { id: "menu", text: "Menu buttons" },
    { id: "ticker", text: "News ticker" },
    { id: "welcome", text: "Welcome text" },
    { id: "mascot", text: "Animated picture" },
    { id: "counter", text: "Visitor counter" },
    { id: "guestbook", text: "Guestbook link" }
  ],
  explanation: [
    "The only mention of the new tournament time scrolls past in a marquee: by the time you’ve read “moves to”, the day has already slid out of view, and nothing lets you stop it (WCAG 2.2.2 Pause, Stop, Hide).",
    "Moving text is hard for slow readers, people with attention or vision impairments, and anyone zoomed in. Put key information in static text; if something must move, give it a pause control or stop it within five seconds.",
    "The animated picture, visitor counter and busy decoration look dated, but they don’t stop anyone from finding the time."
  ],
  links: [wcag("2.2.2", "Pause, Stop, Hide", "pause-stop-hide")]
};
