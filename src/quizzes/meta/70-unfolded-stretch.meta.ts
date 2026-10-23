import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "unfolded-stretch",
  kind: "compare",
  title: { en: "A phone app, stretched flat", fr: "Une appli mobile, étirée à plat" },
  principle: {
    en: "Adapt layouts to large unfolded screens",
    fr: "Adapter la mise en page aux grands écrans dépliés"
  },
  scenario: {
    en: "A manager unfolds their phone on the train to read and answer several emails in a row.",
    fr: "Dans le train, une manager déplie son téléphone pour lire et répondre à plusieurs e-mails d’affilée."
  },
  prompt: {
    en: "Which version uses the unfolded screen better?",
    fr: "Quelle version exploite le mieux l’écran déplié ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "Stretching the phone layout gives very long rows with a lot of empty space, and opening an email still replaces the list: the manager keeps going back and forth, exactly as on a small screen.",
      "When the screen unfolds, switch to a layout that uses it: list and detail side by side (one per half), so picking the next email is one tap and the fold sits between the two panes.",
      "Both versions show the same app, emails and controls; only the layout changes with the screen size."
    ],
    fr: [
      "Étirer la mise en page mobile donne des lignes très longues pleines de vide, et ouvrir un e-mail remplace toujours la liste : la manager fait sans cesse des allers-retours, exactement comme sur un petit écran.",
      "Quand l’écran se déplie, passez à une mise en page qui l’exploite : liste et détail côte à côte (un par moitié), pour que l’e-mail suivant soit à un seul toucher et que le pli tombe entre les deux volets.",
      "Les deux versions montrent la même appli, les mêmes e-mails et les mêmes commandes ; seule la mise en page change avec la taille de l’écran."
    ]
  }
};
