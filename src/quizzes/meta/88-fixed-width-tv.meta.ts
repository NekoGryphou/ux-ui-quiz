import { PHOTO_RISOTTO } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "fixed-width-tv",
  kind: "single",
  title: { en: "A postage stamp on a 65-inch TV", fr: "Un timbre-poste sur une télé de 65 pouces" },
  principle: {
    en: "Let layouts scale to the screen they’re on",
    fr: "Adapter la mise en page à l’écran qui l’affiche"
  },
  scenario: {
    en: "A family opens a recipe site on their living-room smart TV to cook along from the sofa.",
    fr: "Une famille ouvre un site de recettes sur la télé connectée du salon pour cuisiner en suivant depuis le canapé."
  },
  prompt: {
    en: "What is the main issue with this page on the TV?",
    fr: "Quel est le principal problème de cette page sur la télé ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The page is fixed at 1024 pixels, so on the TV it is a small strip with tiny text.",
        fr: "La page est figée à 1 024 pixels : sur la télé, c’est une bande étroite au texte minuscule."
      }
    },
    {
      id: "b",
      text: {
        en: "The recipe photo sits above the steps, where beside them it would use the width.",
        fr: "La photo de la recette est au-dessus des étapes, alors qu’à côté elle exploiterait la largeur."
      }
    },
    {
      id: "c",
      text: {
        en: "The ingredients are a bulleted list, where a table would align quantities better.",
        fr: "Les ingrédients forment une liste à puces, alors qu’un tableau alignerait mieux les quantités."
      }
    },
    {
      id: "d",
      text: {
        en: "The page has a white background, where a dark theme would suit a living room more.",
        fr: "La page a un fond blanc, alors qu’un thème sombre conviendrait mieux à un salon."
      }
    }
  ],
  explanation: {
    en: [
      "The site was built at a fixed 1024px width with 13px text. On a 4K TV seen from three metres away, it sits in a narrow strip in the middle of the screen, and the steps are unreadable from the sofa.",
      "Use fluid layouts and relative units, scale type with the viewport, and consider the viewing distance for TV-like screens: larger text, focusable large targets and fewer, bigger columns.",
      "Photo above the steps, a bulleted ingredient list and a white background are all reasonable recipe layouts.",
      photoCredits([PHOTO_RISOTTO], "en")
    ],
    fr: [
      "Le site a été conçu avec une largeur fixe de 1 024 px et un texte de 13 px. Sur une télé 4K regardée à trois mètres, il occupe une bande étroite au milieu de l’écran, et les étapes sont illisibles depuis le canapé.",
      "Utilisez des mises en page fluides et des unités relatives, adaptez la taille du texte à la fenêtre et tenez compte de la distance de lecture pour les écrans de type télé : texte plus grand, grandes cibles focalisables, colonnes moins nombreuses et plus larges.",
      "Une photo au-dessus des étapes, une liste d’ingrédients à puces et un fond blanc sont des mises en page de recette tout à fait raisonnables.",
      photoCredits([PHOTO_RISOTTO], "fr")
    ]
  }
};
