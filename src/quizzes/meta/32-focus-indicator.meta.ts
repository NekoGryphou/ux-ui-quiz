import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "focus-indicator",
  kind: "compare",
  title: { en: "Where is the keyboard?", fr: "Où est le clavier ?" },
  principle: { en: "Make keyboard focus clearly visible", fr: "Rendre le focus clavier bien visible" },
  scenario: {
    en: "A keyboard user tabs through a settings dialog. In both versions, keyboard focus is currently on the Save button.",
    fr: "Une personne navigue au clavier dans une boîte de dialogue de réglages. Dans les deux versions, le focus clavier est sur le bouton Enregistrer."
  },
  prompt: {
    en: "Which version shows keyboard focus better?",
    fr: "Quelle version montre le mieux le focus clavier ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "A slightly darker button is almost impossible to spot, so keyboard users lose track of where they are (WCAG 2.4.7 Focus Visible).",
      "A solid ring with a gap around the control stands out on any background. Aim for at least 3:1 contrast against its surroundings, as WCAG 2.4.13 Focus Appearance recommends.",
      "Never remove the browser outline without putting a stronger indicator in its place."
    ],
    fr: [
      "Un bouton à peine plus foncé est presque impossible à repérer : les personnes qui naviguent au clavier ne savent plus où elles sont (WCAG 2.4.7 Visibilité du focus).",
      "Un contour plein, séparé du contrôle par un espace, se distingue sur n’importe quel fond. Visez un contraste d’au moins 3:1 avec ce qui l’entoure, comme le recommande le critère WCAG 2.4.13 Apparence du focus.",
      "Ne supprimez jamais le contour du navigateur sans le remplacer par un indicateur plus visible."
    ]
  },
  links: [
    wcag("2.4.7", { en: "Focus Visible", fr: "Visibilité du focus" }, "focus-visible"),
    wcag("2.4.13", { en: "Focus Appearance", fr: "Apparence du focus" }, "focus-appearance")
  ]
};
