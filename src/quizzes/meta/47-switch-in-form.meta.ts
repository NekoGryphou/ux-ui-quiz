import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "switch-in-form",
  kind: "compare",
  title: { en: "Applied now, or on Save?", fr: "Appliqué tout de suite, ou à l’enregistrement ?" },
  principle: {
    en: "Use switches for instant changes and checkboxes in forms you save",
    fr: "Des interrupteurs pour les changements immédiats, des cases à cocher dans les formulaires à enregistrer"
  },
  scenario: {
    en: "An admin reviews the team’s email notifications and plans to save every change at once.",
    fr: "Une personne chargée de l’administration revoit les notifications e-mail de l’équipe et compte enregistrer tous les changements d’un coup."
  },
  prompt: {
    en: "Which version fits this form better?",
    fr: "Quelle version convient le mieux à ce formulaire ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "A switch reads like a light switch: flip it and the change is done. Next to a Save button, users can’t tell whether a flipped switch already applied, and some leave without saving.",
      "Use checkboxes when changes wait for a Save or Submit button. Keep switches for settings that take effect immediately, with no button to press.",
      "Both versions offer the same options, states and buttons; only the control type differs."
    ],
    fr: [
      "Un interrupteur se lit comme celui de la lumière : on l’actionne et c’est fait. À côté d’un bouton Enregistrer, impossible de savoir si le changement est déjà appliqué, et certaines personnes partent sans enregistrer.",
      "Utilisez des cases à cocher quand les changements attendent un bouton Enregistrer ou Valider. Réservez les interrupteurs aux réglages qui s’appliquent immédiatement, sans bouton à presser.",
      "Les deux versions proposent les mêmes options, états et boutons ; seul le type de contrôle change."
    ]
  }
};
