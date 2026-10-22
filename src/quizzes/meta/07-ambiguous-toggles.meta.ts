import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "ambiguous-toggles",
  kind: "multiple",
  title: "Switches you can’t read",
  principle: "Make state unambiguous at a glance",
  scenario:
    "A user wants to stop receiving marketing emails but keep security alerts. They open their notification settings.",
  prompt: "Which issues make these settings hard to use?",
  correct: ["a", "b", "c"],
  choices: [
    { id: "a", text: "On and off switches share the same gray track, so their state can’t be read." },
    { id: "b", text: "Every label starts with “Disable”, so each switch reads as a double negative." },
    { id: "c", text: "An “all emails” switch sits among the individual ones, so it’s unclear which wins." },
    { id: "d", text: "Changes apply immediately, with no Save button to confirm them at the end." },
    { id: "e", text: "The switches sit at the far right, away from the labels they control." }
  ],
  explanation: [
    "A switch’s state must be obvious without comparing it to its neighbours: a strong color for “on” and enough contrast for the track (WCAG 1.4.11 Non-text Contrast).",
    "“Disable marketing emails: on” forces users to compute a double negative. Label the positive thing the switch enables.",
    "A master switch belongs above the group it controls, and should visibly disable or override the individual switches.",
    "Instant-apply switches with labels on the left are the standard pattern and are fine here."
  ],
  links: [wcag("1.4.11", "Non-text Contrast", "non-text-contrast")]
};
