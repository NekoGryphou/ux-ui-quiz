import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "faint-active-nav",
  kind: "multiple",
  title: "Where am I?",
  principle: "Make the current location perceivable",
  scenario:
    "A support agent switches between sections of a helpdesk all day. They glance at the screen to check which section they are in.",
  prompt: "Which issues make the current location hard to tell?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "The current section is barely highlighted, and its pale text even reads as disabled." },
    { id: "b", text: "The ticket list has no page heading, so only the sidebar could say where you are." },
    { id: "c", text: "The counters use the same gray as the labels, where a brand color would draw the eye." },
    { id: "d", text: "The sidebar shows full labels, where icons alone would leave more room for tickets." }
  ],
  explanation: [
    "The active item has a pale background and text lighter than the inactive items, so it reads as disabled rather than selected.",
    "Show the current location with clear contrast or an indicator bar, expose it with aria-current, and repeat it as a page heading.",
    "Colorful counters would compete with the location cue, and icon-only navigation is harder to scan."
  ],
  links: [wcag("1.4.3", "Contrast (Minimum)", "contrast-minimum")]
};
