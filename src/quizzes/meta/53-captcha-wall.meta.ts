import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "captcha-wall",
  kind: "single",
  title: "Prove you’re human (third try)",
  principle: "Don’t make people solve puzzles to prove they’re human",
  scenario: "A long-time reader finally signs up to the forum to answer a question about an old console.",
  prompt: "What is the main issue with this sign-up form?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Signing up means deciphering warped letters, with no audio version or other way to pass." },
    { id: "b", text: "The form asks for a username, where an email address alone would be enough to sign up." },
    { id: "c", text: "The password field has no strength meter, so weak passwords can go through unnoticed." },
    { id: "d", text: "The forum uses a dark blue theme, where a lighter one would feel more welcoming to all." }
  ],
  explanation: [
    "Distorted-text CAPTCHAs are hard for everyone and impossible for many: blind users get no audio alternative, people with dyslexia or low vision fail repeatedly, and “case sensitive” makes it worse. This reader is on their third try.",
    "Prefer checks that need no puzzle: invisible bot detection, rate limiting, email confirmation or a honeypot field. If a test is unavoidable, offer an accessible alternative (WCAG 3.3.8 Accessible Authentication).",
    "A username is normal for a forum, a strength meter is optional, and the dark theme is the forum’s style."
  ],
  links: [wcag("3.3.8", "Accessible Authentication (Minimum)", "accessible-authentication-minimum")]
};
