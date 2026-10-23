import {
  PHOTO_AMARYLLIS,
  PHOTO_ARMCHAIR,
  PHOTO_CANDLES,
  PHOTO_LAMP,
  PHOTO_MUG,
  PHOTO_SIDE_TABLE,
  PHOTO_VASE,
  PHOTO_VASE_FLORAL
} from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "footer-chase",
  kind: "single",
  motion: true,
  title: { en: "The footer that runs away", fr: "Le pied de page qui s’enfuit" },
  principle: {
    en: "Don’t put infinite scroll above content people need to reach",
    fr: "Ne pas placer de défilement infini au-dessus d’un contenu à atteindre"
  },
  scenario: {
    en: "A customer scrolls to the bottom of a homeware shop to find the returns policy link. Watch the page.",
    fr: "Une personne fait défiler une boutique de décoration jusqu’en bas pour trouver le lien vers la politique de retour. Observez la page."
  },
  prompt: {
    en: "What is the main issue with this page?",
    fr: "Quel est le principal problème de cette page ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "New products load each time the footer appears, so its links can never be reached.",
        fr: "De nouveaux produits se chargent dès que le pied de page apparaît : ses liens restent inaccessibles."
      }
    },
    {
      id: "b",
      text: {
        en: "Products show in a three-column grid, where a list would show more details for each.",
        fr: "Les produits sont sur une grille de trois colonnes, alors qu’une liste détaillerait davantage chacun."
      }
    },
    {
      id: "c",
      text: {
        en: "The footer holds many small links, where a single “Help” link would keep it simpler.",
        fr: "Le pied de page contient beaucoup de petits liens, alors qu’un seul lien « Aide » le simplifierait."
      }
    },
    {
      id: "d",
      text: {
        en: "New products fade in as they load, where showing them all at once would feel faster.",
        fr: "Les nouveaux produits apparaissent en fondu, alors que les afficher d’un coup semblerait plus rapide."
      }
    }
  ],
  explanation: {
    en: [
      "Every time the customer reaches the footer, infinite scroll loads another batch of products and pushes it away. The returns policy, contact and legal links are visible for a second, then out of reach, forever.",
      "If you use infinite scroll, keep essential links elsewhere (a sticky help link or the header), or switch to a “Load more” button so people choose when to add products and can always reach the footer.",
      "A product grid, a detailed footer and a soft fade-in are all fine on their own.",
      photoCredits(
        [
          PHOTO_ARMCHAIR,
          PHOTO_LAMP,
          PHOTO_VASE,
          PHOTO_CANDLES,
          PHOTO_SIDE_TABLE,
          PHOTO_MUG,
          PHOTO_AMARYLLIS,
          PHOTO_VASE_FLORAL
        ],
        "en"
      )
    ],
    fr: [
      "Chaque fois que la personne atteint le pied de page, le défilement infini charge un nouveau lot de produits qui le repousse plus bas. Les liens vers la politique de retour, le contact et les mentions légales sont visibles une seconde, puis hors d’atteinte, pour toujours.",
      "Si vous utilisez le défilement infini, placez les liens essentiels ailleurs (un lien d’aide fixe ou l’en-tête), ou passez à un bouton « Afficher plus » pour que chacun choisisse quand ajouter des produits et puisse toujours atteindre le pied de page.",
      "Une grille de produits, un pied de page détaillé et un fondu discret conviennent très bien en soi.",
      photoCredits(
        [
          PHOTO_ARMCHAIR,
          PHOTO_LAMP,
          PHOTO_VASE,
          PHOTO_CANDLES,
          PHOTO_SIDE_TABLE,
          PHOTO_MUG,
          PHOTO_AMARYLLIS,
          PHOTO_VASE_FLORAL
        ],
        "fr"
      )
    ]
  }
};
