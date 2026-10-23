import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "color-only-status",
  kind: "compare",
  title: { en: "Red or green? Ask a colleague", fr: "Rouge ou vert ? Demandez autour de vous" },
  principle: { en: "Don’t rely on red and green alone", fr: "Ne pas compter uniquement sur le rouge et le vert" },
  scenario: {
    en: "An operator with red-green colour blindness (like about 1 in 12 men) checks which servers need attention.",
    fr: "Une personne chargée de l’exploitation, atteinte de daltonisme rouge-vert (comme environ 1 homme sur 12), vérifie quels serveurs demandent une intervention."
  },
  prompt: { en: "Which version can this operator use?", fr: "Quelle version cette personne peut-elle utiliser ?" },
  correct: ["b"],
  explanation: {
    en: [
      "With red-green colour blindness, the red and green dots look like the same muddy brown: the status column carries no information at all, and the faulty servers hide among the healthy ones.",
      "Never encode meaning in hue alone: add an icon or a shape (✓, ✕, ▲), a text label, or a pattern, and pick colours that also differ in lightness (WCAG 1.4.1 Use of Color).",
      "Both versions use the same servers, layout and colours; one adds icons and labels to the colour."
    ],
    fr: [
      "Avec un daltonisme rouge-vert, les pastilles rouges et vertes prennent le même brun terne : la colonne d’état ne transmet plus aucune information et les serveurs en panne se cachent parmi les serveurs opérationnels.",
      "Ne codez jamais une information par la seule teinte : ajoutez une icône ou une forme (✓, ✕, ▲), un libellé texte ou un motif, et choisissez des couleurs qui diffèrent aussi en luminosité (WCAG 1.4.1 Utilisation de la couleur).",
      "Les deux versions affichent les mêmes serveurs, la même disposition et les mêmes couleurs ; l’une ajoute des icônes et des libellés à la couleur."
    ]
  },
  links: [wcag("1.4.1", { en: "Use of Color", fr: "Utilisation de la couleur" }, "use-of-color")]
};
