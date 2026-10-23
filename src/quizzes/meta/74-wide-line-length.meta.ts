import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "wide-line-length",
  kind: "compare",
  layout: "stacked",
  title: { en: "One line, one head turn", fr: "Une ligne, un tour de tête" },
  principle: {
    en: "Keep line length readable on wide screens",
    fr: "Garder des lignes lisibles sur les grands écrans"
  },
  scenario: {
    en: "A reader opens a long help article on a 27-inch monitor to follow a setup guide.",
    fr: "Une personne ouvre un long article d’aide sur un écran de 27 pouces pour suivre un guide d’installation."
  },
  prompt: {
    en: "Which version reads better on this screen?",
    fr: "Quelle version se lit le mieux sur cet écran ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "When text fills the whole width of a large monitor, each line runs over 200 characters: the eye loses its place jumping back to the start of the next line, and long guides become tiring.",
      "Cap the reading column at around 60–80 characters (max-width in ch or rem) and use the extra space for margins, a table of contents or a side panel.",
      "Both versions show the same article, font and size; only the width of the text column differs."
    ],
    fr: [
      "Quand le texte occupe toute la largeur d’un grand écran, chaque ligne dépasse 200 caractères : l’œil se perd en revenant au début de la ligne suivante, et les longs guides deviennent fatigants.",
      "Limitez la colonne de lecture à environ 60 à 80 caractères (max-width en ch ou en rem) et utilisez l’espace restant pour les marges, une table des matières ou un panneau latéral.",
      "Les deux versions montrent le même article, avec la même police et la même taille ; seule la largeur de la colonne de texte change."
    ]
  }
};
