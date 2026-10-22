import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "ignores-reduced-motion",
  kind: "single",
  motion: true,
  title: "The page that won’t sit still",
  principle: "Respect the reduce-motion setting",
  scenario: "A visitor prone to motion sickness turned on “Reduce motion” on their phone, then opens a travel page.",
  prompt: "What is the main issue with this page?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Layers keep sliding and zooming despite the visitor’s reduce-motion setting." },
    { id: "b", text: "The headline uses a large display font, where a body-size font would feel calmer." },
    { id: "c", text: "The hero shows mountains and clouds, where a single photo would load more quickly." },
    { id: "d", text: "The call to action is a pill button, where a square one would match the layout." }
  ],
  explanation: [
    "The visitor told their device they need less motion, but the page ignores it: background, clouds and text drift at different speeds and zoom in a loop. For people with vestibular disorders, that can trigger dizziness or nausea within seconds.",
    "Honour prefers-reduced-motion: replace parallax, zooms and large movements with simple fades or no animation at all. Decorative motion should never be required to use the page (WCAG 2.3.3 Animation from Interactions).",
    "A large headline, an illustrated hero and a pill button are ordinary design choices."
  ],
  links: [wcag("2.3.3", "Animation from Interactions", "animation-from-interactions")]
};
