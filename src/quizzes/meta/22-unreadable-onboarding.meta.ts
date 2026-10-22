import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "unreadable-onboarding",
  kind: "hotspot",
  title: "The fine print of onboarding",
  principle: "Keep body text legible: size, contrast and alignment",
  scenario: "A new user opens a budgeting app on their phone, on a bus, to see what it can do.",
  prompt: "Click the part of this screen that will stop people from taking in the message.",
  correct: ["body"],
  regions: [
    { id: "skip", text: "Skip link" },
    { id: "illustration", text: "Illustration" },
    { id: "headline", text: "Headline" },
    { id: "body", text: "Description text" },
    { id: "progress", text: "Step indicator" },
    { id: "next", text: "Next button" }
  ],
  explanation: [
    "The description is set in 10px light-gray justified text: too small and too pale to read on a phone, and justification opens uneven gaps between words.",
    "Body text on mobile should be around 16px, meet 4.5:1 contrast (WCAG 1.4.3), and be left-aligned so word spacing stays even.",
    "Onboarding copy should also be short: one idea per screen, readable in a glance."
  ],
  links: [wcag("1.4.3", "Contrast (Minimum)", "contrast-minimum")]
};
