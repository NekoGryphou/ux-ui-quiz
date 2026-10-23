import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "fake-countdown",
  kind: "single",
  title: { en: "Only 09:59 left, again", fr: "Plus que 09:59, encore et toujours" },
  principle: { en: "Never invent urgency", fr: "Ne jamais inventer d’urgence" },
  scenario: {
    en: "A shopper looks at the same jacket on Monday morning and again on Tuesday evening.",
    fr: "Une personne regarde la même veste le lundi matin, puis de nouveau le mardi soir."
  },
  prompt: { en: "What is the main issue with this offer?", fr: "Quel est le principal problème de cette offre ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The countdown restarts at 10:00 on each visit, so the deadline is fake and only adds pressure.",
        fr: "Le compte à rebours repart de 10:00 à chaque visite : l’échéance est fausse et ne sert qu’à mettre la pression."
      }
    },
    {
      id: "b",
      text: {
        en: "The discount badge is red, where a calmer colour would make the price look more trustworthy.",
        fr: "Le badge de réduction est rouge, là où une couleur plus calme rendrait le prix plus digne de confiance."
      }
    },
    {
      id: "c",
      text: {
        en: "The old price is struck through, where hiding it would keep the price block easier to read.",
        fr: "L’ancien prix est barré, là où le masquer rendrait le bloc de prix plus facile à lire."
      }
    },
    {
      id: "d",
      text: {
        en: "The Buy button spans the card, where a smaller button would feel less pushy for a sale item.",
        fr: "Le bouton Acheter occupe toute la carte, là où un bouton plus petit semblerait moins insistant pour un article soldé."
      }
    }
  ],
  explanation: {
    en: [
      "Monday morning and Tuesday evening, the “offer ends in” timer shows the same 09:59: it simply restarts on every visit. The deadline doesn’t exist: it only rushes shoppers into buying before they compare or think.",
      "Show real deadlines only, with the actual end date (“Sale ends Sunday 23:59”). Fake countdowns, fake low-stock alerts and fake “12 people are looking” banners are dark patterns, and illegal in many regions.",
      "A red discount badge, a struck-through old price and a full-width Buy button are standard product page patterns."
    ],
    fr: [
      "Lundi matin comme mardi soir, le minuteur « Fin de l’offre dans » affiche le même 09:59 : il repart simplement à chaque visite. L’échéance n’existe pas ; elle ne sert qu’à précipiter l’achat avant toute comparaison ou réflexion.",
      "N’affichez que de vraies échéances, avec la date de fin réelle (« Fin des soldes dimanche à 23 h 59 »). Les faux comptes à rebours, les fausses alertes de stock faible et les faux bandeaux « 12 personnes regardent cet article » sont des dark patterns, illégaux dans de nombreux pays.",
      "Un badge de réduction rouge, un ancien prix barré et un bouton Acheter pleine largeur sont des pratiques courantes sur une page produit."
    ]
  }
};
