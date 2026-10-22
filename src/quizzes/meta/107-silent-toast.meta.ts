import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "silent-toast",
  kind: "single",
  title: "A confirmation nobody hears",
  principle: "Announce status messages to screen readers without moving focus",
  scenario:
    "A blind customer updates their delivery address with a screen reader, presses Save and waits to know it worked.",
  prompt: "What is the main issue with this confirmation?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The toast is added as a plain div, so screen readers never announce the message." },
    { id: "b", text: "The toast is removed after five seconds, so slow readers may lose the message too soon." },
    { id: "c", text: "The toast is appended at the end of the body, so it renders far from the Save button." },
    { id: "d", text: "The toast is styled in dark grey, so it doesn’t look like a success confirmation." }
  ],
  explanation: [
    "Sighted users see “Address saved” appear, but the new div has no role or live region, and focus stays on the Save button: the screen reader says nothing, so the customer can’t tell whether the save worked (WCAG 4.1.3 Status Messages).",
    'Put an empty container with role="status" (or aria-live="polite") in the page from the start, then write the message into it: screen readers announce it without moving focus. A live region inserted together with its text is often missed.',
    "Five seconds is enough for a two-word message with no action, a corner toast is a common pattern, and the text itself says the save succeeded, so neither duration, position nor colour blocks anyone here."
  ],
  links: [wcag("4.1.3", "Status Messages", "status-messages")]
};
