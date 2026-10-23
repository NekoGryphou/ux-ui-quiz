import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "hidden-delete",
  kind: "single",
  title: { en: "Delete, between Duplicate and Move", fr: "Supprimer, entre Dupliquer et Déplacer" },
  principle: {
    en: "Separate and signal destructive actions",
    fr: "Isoler et signaler les actions destructrices"
  },
  scenario: {
    en: "A designer opens the menu on a shared file to make a copy before editing it.",
    fr: "Une personne du design ouvre le menu d’un fichier partagé pour en faire une copie avant de le modifier."
  },
  prompt: {
    en: "What is the main issue with this menu?",
    fr: "Quel est le principal problème de ce menu ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Delete sits between everyday actions in the same style, so it’s easy to hit by mistake.",
        fr: "Supprimer est placé parmi les actions courantes, dans le même style : on peut le choisir par erreur."
      }
    },
    {
      id: "b",
      text: {
        en: "The menu opens below the row, where opening above would keep more of the list visible.",
        fr: "Le menu s’ouvre sous la ligne, alors qu’au-dessus il laisserait voir une plus grande partie de la liste."
      }
    },
    {
      id: "c",
      text: {
        en: "The menu shows text labels only, where icons would help users find actions faster.",
        fr: "Le menu n’affiche que des libellés, alors que des icônes aideraient à repérer les actions plus vite."
      }
    },
    {
      id: "d",
      text: {
        en: "The menu lists five actions, where a row of buttons would avoid the extra click.",
        fr: "Le menu liste cinq actions, alors qu’une rangée de boutons éviterait un clic supplémentaire."
      }
    }
  ],
  explanation: {
    en: [
      "The destructive item looks like its neighbours and sits right under Duplicate, the action this user wants: one slip deletes a file the whole team uses.",
      "Put destructive actions last, behind a divider, in a danger color, and back them with confirmation or undo.",
      "Text labels are clear in menus, and a short overflow menu is a reasonable way to keep rows tidy."
    ],
    fr: [
      "L’action destructrice ressemble à ses voisines et se trouve juste sous Dupliquer, l’action recherchée ici : un simple écart supprime un fichier utilisé par toute l’équipe.",
      "Placez les actions destructrices en dernier, après un séparateur, dans une couleur de danger, et protégez-les par une confirmation ou une annulation possible.",
      "Les libellés texte sont clairs dans un menu, et un court menu « Plus » est une bonne façon de garder des lignes épurées."
    ]
  }
};
