import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "inconsistent-actions",
  kind: "hotspot",
  title: "Four cards, three ways to save",
  principle: "Keep patterns consistent across a product",
  scenario: "An admin updates several sections of their workspace settings, one card after the other.",
  prompt: "Click every place where the interface breaks its own pattern.",
  correct: ["security-actions", "team-actions"],
  regions: [
    { id: "nav", text: "Settings navigation" },
    { id: "profile-actions", text: "Profile card actions" },
    { id: "billing-actions", text: "Billing card actions" },
    { id: "security-actions", text: "Security card actions" },
    { id: "team-actions", text: "Team card actions" },
    { id: "page-title", text: "Page title" }
  ],
  explanation: [
    "Profile and Billing set the pattern: a filled “Save” button on the right. Security switches to a green outline “Update” on the left, and Team hides the same action in a text link.",
    "Each variation makes users stop and re-read: is “Update” different from “Save”? Is the link even an action? Consistent placement, style and wording let people work on autopilot.",
    "Define the save action once in the design system and reuse it everywhere."
  ]
};
