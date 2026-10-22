import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "vague-navigation",
  kind: "multiple",
  title: "Where would pricing be?",
  principle: "Name sections by what people look for",
  scenario: "A team lead comparing project tools wants to know what the Team plan costs.",
  prompt: "Which issues make this navigation hard to use?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "Platform, Solutions and Products overlap, so it’s unclear where any feature lives." },
    { id: "b", text: "Pricing sits under Company, a section people associate with careers and press." },
    { id: "c", text: "The navigation uses text labels without icons, which makes it slower to scan." },
    { id: "d", text: "The Company menu lists four links, where a single About page would be simpler." }
  ],
  explanation: [
    "Platform, Solutions and Products are three vague, overlapping words: visitors can’t predict which one contains what they need.",
    "Pricing is one of the most-visited pages on a product site; hidden under Company it’s nearly impossible to find. Give it a top-level link.",
    "Text labels are the clearest option for top navigation, and a short Company menu is fine."
  ]
};
