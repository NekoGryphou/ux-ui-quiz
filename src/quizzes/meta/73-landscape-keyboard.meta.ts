import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "landscape-keyboard",
  kind: "single",
  title: "A 30-pixel window to type in",
  principle: "Keep fixed bars from eating small screens",
  scenario: "A traveller turns their phone sideways to type a long delivery note while sitting on a train.",
  prompt: "What is the main issue with this screen?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Fixed bars and the keyboard cover the screen, so only a sliver of the field is left." },
    { id: "b", text: "The note field is a plain text area, where a dropdown of preset notes would be faster." },
    { id: "c", text: "The promo banner uses a bright color, where a muted tone would feel more trustworthy." },
    { id: "d", text: "The chat button sits bottom right, where bottom left would suit right-handed people." }
  ],
  explanation: [
    "In landscape, the sticky header, the promo strip, the floating chat bar and the keyboard all stay put: together they leave about 30 pixels for the field being typed in, so the traveller types blind.",
    "Let fixed elements step aside on short viewports: hide or collapse sticky bars while typing, avoid stacking several of them, and test pages in landscape with the keyboard open.",
    "A free text area suits a delivery note, the banner color is a brand choice, and a bottom-right chat button is a common placement."
  ]
};
