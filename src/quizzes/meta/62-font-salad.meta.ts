import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "font-salad",
  kind: "single",
  title: { en: "Six fonts, no hierarchy", fr: "Six polices, aucune hiérarchie" },
  principle: {
    en: "Limit typefaces and sizes to build a clear hierarchy",
    fr: "Limiter les polices et les tailles pour créer une hiérarchie claire"
  },
  scenario: {
    en: "A couple looks up a neighbourhood bistro to check tonight’s set menu and its price.",
    fr: "Un couple consulte le site d’un bistrot de quartier pour vérifier le menu du soir et son prix."
  },
  prompt: { en: "What is the main issue with this page?", fr: "Quel est le principal problème de cette page ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Six typefaces and sizes compete, so nothing reads as the title and the price gets lost.",
        fr: "Six polices et tailles se font concurrence : rien ne se lit comme le titre et le prix se perd."
      }
    },
    {
      id: "b",
      text: {
        en: "The menu sits in a single column, where two columns would fit more dishes on screen.",
        fr: "Le menu tient sur une seule colonne, alors que deux colonnes afficheraient plus de plats à l’écran."
      }
    },
    {
      id: "c",
      text: {
        en: "The page uses a cream background, where plain white would make the text look sharper.",
        fr: "La page utilise un fond crème, alors qu’un blanc pur rendrait le texte plus net."
      }
    },
    {
      id: "d",
      text: {
        en: "Dish names come before the descriptions, where the reverse would build more appetite.",
        fr: "Le nom des plats précède leur description, alors que l’inverse mettrait davantage en appétit."
      }
    }
  ],
  explanation: {
    en: [
      "A script, a slab, a typewriter face, a condensed display font and two sans serifs all fight for attention. With no consistent scale, the restaurant name, the menu title and the price look equally important, and the €38 hides in the middle.",
      "One or two typefaces are enough: a distinctive one for headings and a readable one for text. Build hierarchy with a small set of sizes and weights, used the same way everywhere.",
      "A single column suits a short menu, a cream background is a classic restaurant choice, and leading with dish names is how menus are read."
    ],
    fr: [
      "Une manuscrite, une égyptienne, une police machine à écrire, une police d’affichage condensée et deux linéales se disputent l’attention. Sans échelle cohérente, le nom du restaurant, le titre du menu et le prix paraissent aussi importants les uns que les autres, et les 38 € se cachent au milieu.",
      "Une ou deux polices suffisent : une police marquante pour les titres et une police lisible pour le texte. Construisez la hiérarchie avec un petit jeu de tailles et de graisses, utilisées partout de la même façon.",
      "Une seule colonne convient à un menu court, un fond crème est un choix classique pour un restaurant, et commencer par le nom des plats correspond à la façon dont on lit un menu."
    ]
  }
};
