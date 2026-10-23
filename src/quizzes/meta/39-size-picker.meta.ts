import { PHOTO_SHOE_TRAIL } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "size-picker",
  kind: "multiple",
  title: { en: "Sold out, but you can’t tell", fr: "Épuisé, mais rien ne l’indique" },
  principle: {
    en: "Show availability and explain disabled actions",
    fr: "Montrer la disponibilité et expliquer les actions désactivées"
  },
  scenario: {
    en: "A shopper needs size 44, which is sold out. They select it and try to add the shoes to their cart.",
    fr: "Une personne cherche des chaussures en pointure 44, qui est épuisée. Elle la sélectionne et tente d’ajouter les chaussures au panier."
  },
  prompt: {
    en: "Which issues make this product page frustrating?",
    fr: "Quels problèmes rendent cette fiche produit frustrante ?"
  },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "Sold-out sizes look exactly like available ones, so shoppers can select them.",
        fr: "Les pointures épuisées ressemblent en tout point aux autres, si bien qu’on peut les sélectionner."
      }
    },
    {
      id: "b",
      text: {
        en: "Add to cart is disabled without any message explaining why it can’t be used.",
        fr: "Ajouter au panier est désactivé sans aucun message expliquant pourquoi il est inutilisable."
      }
    },
    {
      id: "c",
      text: {
        en: "Sizes are shown in EU format only, with no conversion to UK or US sizes.",
        fr: "Les pointures ne sont affichées qu’au format EU, sans conversion en tailles UK ou US."
      }
    },
    {
      id: "d",
      text: {
        en: "The price sits above the size picker, where it’s read before the size is chosen.",
        fr: "Le prix est placé au-dessus des pointures, si bien qu’il est lu avant le choix de la taille."
      }
    }
  ],
  explanation: {
    en: [
      "Nothing marks 41 and 44 as unavailable, so the shopper picks one and hits a wall. Strike through or dim sold-out sizes, and say so in text for screen reader users.",
      "A disabled button with no reason is a dead end. Explain it next to the button (“Size 44 is sold out”) and offer a way forward: “Notify me when it’s back”.",
      "EU sizing with a size guide link is standard for this market, and showing the price before the options is the usual product page order.",
      photoCredits([PHOTO_SHOE_TRAIL], "en")
    ],
    fr: [
      "Rien n’indique que le 41 et le 44 sont indisponibles : la personne en choisit un et se heurte à un mur. Barrez ou estompez les pointures épuisées, et précisez-le en texte pour les lecteurs d’écran.",
      "Un bouton désactivé sans raison est une impasse. Expliquez-la à côté du bouton (« La pointure 44 est épuisée ») et proposez une suite : « Me prévenir du retour en stock ».",
      "Les pointures EU avec un lien vers un guide des tailles sont la norme sur ce marché, et afficher le prix avant les options est l’ordre habituel d’une fiche produit.",
      photoCredits([PHOTO_SHOE_TRAIL], "fr")
    ]
  }
};
