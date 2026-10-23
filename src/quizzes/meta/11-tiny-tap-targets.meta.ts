import { PHOTO_COLD_BREW, PHOTO_GRANOLA, PHOTO_HONEY } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "tiny-tap-targets",
  kind: "single",
  title: { en: "Controls too small to tap", fr: "Des commandes trop petites pour le doigt" },
  principle: {
    en: "Size and space touch targets for fingers",
    fr: "Dimensionner et espacer les zones tactiles pour les doigts"
  },
  scenario: {
    en: "A shopper on their phone wants to add a second jar of honey to their cart before checking out.",
    fr: "Sur son téléphone, une personne veut ajouter un deuxième pot de miel à son panier avant de commander."
  },
  prompt: { en: "What is the main issue on this screen?", fr: "Quel est le principal problème de cet écran ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The quantity and delete controls are tiny and packed together, so taps easily miss.",
        fr: "Les commandes de quantité et de suppression sont minuscules et serrées, si bien qu’on rate facilement sa cible."
      }
    },
    {
      id: "b",
      text: {
        en: "Each row shows the unit price next to the quantity, which makes totals harder to scan.",
        fr: "Chaque ligne affiche le prix unitaire à côté de la quantité, ce qui rend les totaux moins lisibles."
      }
    },
    {
      id: "c",
      text: {
        en: "The checkout button sits at the bottom, where it could cover the last item in the cart.",
        fr: "Le bouton de commande est en bas, où il risque de masquer le dernier article du panier."
      }
    },
    {
      id: "d",
      text: {
        en: "Product photos are small thumbnails, so shoppers can’t check exactly what they ordered.",
        fr: "Les photos produit sont de petites vignettes, si bien qu’on ne peut pas vérifier précisément sa commande."
      }
    }
  ],
  explanation: {
    en: [
      "Fingers need room: aim for 44×44 pt (Apple) or 48×48 dp (Material), and never below 24×24 px with spacing (WCAG 2.5.8 Target Size).",
      "Here “+” sits a few pixels from the delete icon, so trying to add a jar can remove the item instead.",
      "Give each control a large hit area and keep destructive actions away from frequent ones, e.g. delete via swipe or a separate “Remove” link.",
      photoCredits([PHOTO_HONEY, PHOTO_GRANOLA, PHOTO_COLD_BREW], "en")
    ],
    fr: [
      "Les doigts ont besoin de place : visez 44 × 44 pt (Apple) ou 48 × 48 dp (Material), et jamais moins de 24 × 24 px avec de l’espacement (WCAG 2.5.8 Taille de la cible).",
      "Ici, le « + » est à quelques pixels de l’icône de suppression : en voulant ajouter un pot, on peut retirer l’article.",
      "Donnez à chaque commande une grande zone cliquable et éloignez les actions destructrices des actions fréquentes, par exemple une suppression par balayage ou un lien « Retirer » séparé.",
      photoCredits([PHOTO_HONEY, PHOTO_GRANOLA, PHOTO_COLD_BREW], "fr")
    ]
  },
  links: [wcag("2.5.8", { en: "Target Size (Minimum)", fr: "Taille de la cible (minimum)" }, "target-size-minimum")]
};
