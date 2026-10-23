import { PHOTO_SHOE_CRYSTA, PHOTO_SHOE_ECCO, PHOTO_SHOE_MIZUNO, PHOTO_SHOE_TRAIL } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "hover-only-actions",
  kind: "single",
  title: { en: "Hover to buy (on a phone)", fr: "Survoler pour acheter (sur un téléphone)" },
  principle: {
    en: "Don’t hide essential actions behind hover",
    fr: "Ne pas cacher les actions essentielles derrière le survol"
  },
  scenario: {
    en: "A shopper browses sneakers on their phone and wants to add a pair in their size to the bag.",
    fr: "Une personne parcourt des baskets sur son téléphone et veut ajouter une paire à sa pointure au panier."
  },
  prompt: {
    en: "What is the main issue with this product grid?",
    fr: "Quel est le principal problème de cette grille de produits ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Sizes and “Add to bag” only appear on hover, so touch users can’t see how to buy.",
        fr: "Les pointures et « Ajouter au panier » n’apparaissent qu’au survol : au doigt, impossible de voir comment acheter."
      }
    },
    {
      id: "b",
      text: {
        en: "The grid shows two products per row, where one per row would show bigger photos.",
        fr: "La grille affiche deux produits par ligne, alors qu’un seul par ligne donnerait des photos plus grandes."
      }
    },
    {
      id: "c",
      text: {
        en: "Prices sit under the product names, where above them they would be seen sooner.",
        fr: "Les prix sont sous les noms des produits, alors qu’au-dessus ils seraient vus plus tôt."
      }
    },
    {
      id: "d",
      text: {
        en: "The filter button sits at the top, where a bottom bar would be closer to thumbs.",
        fr: "Le bouton de filtre est en haut, alors qu’une barre en bas serait plus proche des pouces."
      }
    }
  ],
  explanation: {
    en: [
      "On desktop, hovering a card reveals the sizes and an “Add to bag” button. Touch screens have no hover: the cards show only a photo, a name and a price, and nothing hints that buying is possible from here.",
      "Show essential actions all the time, or make the whole card open a page where they are visible. Hover can add shortcuts for mouse users, never the only path.",
      "Two products per row, price under the name and a filter button at the top are standard mobile shop patterns.",
      photoCredits([PHOTO_SHOE_TRAIL, PHOTO_SHOE_CRYSTA, PHOTO_SHOE_ECCO, PHOTO_SHOE_MIZUNO], "en")
    ],
    fr: [
      "Sur ordinateur, survoler une carte révèle les pointures et un bouton « Ajouter au panier ». Les écrans tactiles n’ont pas de survol : les cartes n’affichent qu’une photo, un nom et un prix, et rien n’indique qu’on peut acheter depuis cette page.",
      "Affichez les actions essentielles en permanence, ou faites en sorte que toute la carte ouvre une page où elles sont visibles. Le survol peut ajouter des raccourcis pour la souris, jamais constituer le seul chemin.",
      "Deux produits par ligne, le prix sous le nom et un bouton de filtre en haut sont des modèles courants de boutique mobile.",
      photoCredits([PHOTO_SHOE_TRAIL, PHOTO_SHOE_CRYSTA, PHOTO_SHOE_ECCO, PHOTO_SHOE_MIZUNO], "fr")
    ]
  }
};
