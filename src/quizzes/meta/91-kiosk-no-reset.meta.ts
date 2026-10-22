import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "kiosk-no-reset",
  kind: "single",
  title: "The previous customer’s order",
  principle: "Reset shared screens after each person",
  scenario: "A traveller walks up to a self-service kiosk at a station café that someone else just used.",
  prompt: "What is the main issue with this kiosk?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The last customer’s receipt and loyalty details are still shown to the next person." },
    { id: "b", text: "The screen uses large buttons, where smaller ones would fit more items on the page." },
    { id: "c", text: "The receipt lists every item, where showing only the total would be more discreet." },
    { id: "d", text: "The kiosk is in portrait, where a landscape screen would feel more like a laptop." }
  ],
  explanation: [
    "The kiosk never returned to its start screen: the next traveller sees the previous customer’s order, name, loyalty points and the last digits of their card, and could even reuse the open session.",
    "Shared screens should reset on their own: after a completed payment, and after a short inactivity timeout with a visible countdown (“Still there? Resetting in 10 s”), clearing all personal data.",
    "Large buttons suit kiosks, an itemised receipt is expected, and portrait screens are common for ordering."
  ]
};
