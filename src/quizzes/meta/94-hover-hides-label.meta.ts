import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "hover-hides-label",
  kind: "compare",
  title: { en: "Hover to make it disappear", fr: "Survolez pour le faire disparaître" },
  principle: {
    en: "Check every interactive state, not just the default one",
    fr: "Vérifier chaque état interactif, pas seulement l’état par défaut"
  },
  scenario: {
    en: "A visitor moves the mouse onto the main button of a concert ticket page to buy tickets.",
    fr: "Sur la page de billetterie d’un concert, une personne place la souris sur le bouton principal pour acheter des billets."
  },
  prompt: {
    en: "Which version of the hovered button works better?",
    fr: "Quelle version du bouton survolé fonctionne le mieux ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "On hover, the gradient slides to its light end, exactly the colour of the white label: the text vanishes at the very moment the visitor is about to click, and they hesitate.",
      "Design and check every state of a control (default, hover, focus, active, disabled) for contrast, not just the resting one. A hover state should reinforce the button, for example by darkening it.",
      "Both versions show the same button, gradient and label while hovered; only the hover colours differ."
    ],
    fr: [
      "Au survol, le dégradé glisse vers son extrémité claire, exactement la couleur du libellé blanc : le texte disparaît au moment précis où la personne s’apprête à cliquer, et elle hésite.",
      "Concevez chaque état d’un contrôle (par défaut, survol, focus, actif, désactivé) et vérifiez-en le contraste, pas seulement celui de l’état au repos. Un état de survol doit renforcer le bouton, par exemple en l’assombrissant.",
      "Les deux versions montrent le même bouton, le même dégradé et le même libellé au survol ; seules les couleurs de survol diffèrent."
    ]
  }
};
