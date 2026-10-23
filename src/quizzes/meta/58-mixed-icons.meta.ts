import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "mixed-icons",
  kind: "single",
  title: { en: "Six icons, five icon sets", fr: "Six icônes, cinq styles d’icônes" },
  principle: { en: "Use one consistent icon style", fr: "Utiliser un seul style d’icônes cohérent" },
  scenario: {
    en: "A designer opens a new whiteboard app and scans the toolbar to find the drawing tools.",
    fr: "Une personne qui fait du design ouvre une nouvelle appli de tableau blanc et parcourt la barre d’outils pour trouver les outils de dessin."
  },
  prompt: {
    en: "What is the main issue with this toolbar?",
    fr: "Quel est le principal problème de cette barre d’outils ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The icons mix outline, filled, 3D and emoji styles, so the toolbar looks pieced together.",
        fr: "Les icônes mélangent contour, plein, 3D et emoji, si bien que la barre semble faite de pièces rapportées."
      }
    },
    {
      id: "b",
      text: {
        en: "The tools sit in a vertical rail, where a top toolbar would leave more room for the board.",
        fr: "Les outils sont dans une barre verticale, alors qu’une barre en haut laisserait plus de place au tableau."
      }
    },
    {
      id: "c",
      text: {
        en: "Each icon has a text label under it, which takes room that a hover tooltip could save.",
        fr: "Chaque icône a un libellé en dessous, qui prend une place qu’une infobulle au survol économiserait."
      }
    },
    {
      id: "d",
      text: {
        en: "The active tool gets a tinted background, where an underline would be more discreet.",
        fr: "L’outil actif a un fond coloré, alors qu’un soulignement serait plus discret."
      }
    }
  ],
  explanation: {
    en: [
      "Thin outlines, a solid black glyph, a glossy 3D blob, a full-color illustration and an emoji sit side by side. The eye reads style changes as meaning changes, so scanning the rail takes longer and the product looks assembled from spare parts.",
      "Pick one icon family and stick to it: same grid size, stroke weight, corner style and fill rule. If a needed icon is missing, draw it in the family’s style rather than borrowing one.",
      "A vertical rail is common in canvas tools, labels under icons help newcomers, and a tinted background is a clear active state."
    ],
    fr: [
      "Contours fins, pictogramme noir plein, forme 3D brillante, illustration en couleurs et emoji se côtoient. L’œil interprète un changement de style comme un changement de sens : parcourir la barre prend plus de temps, et le produit semble assemblé à partir de pièces détachées.",
      "Choisissez une famille d’icônes et tenez-vous-y : même grille, même épaisseur de trait, mêmes angles et même règle de remplissage. S’il manque une icône, dessinez-la dans le style de la famille plutôt que d’en emprunter une ailleurs.",
      "Une barre verticale est courante dans les outils de canevas, les libellés sous les icônes aident à la prise en main, et un fond coloré signale clairement l’état actif."
    ]
  }
};
