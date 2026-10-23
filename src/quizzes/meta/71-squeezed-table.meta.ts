import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "squeezed-table",
  kind: "single",
  title: { en: "Five columns in a phone", fr: "Cinq colonnes dans un téléphone" },
  principle: {
    en: "Restructure dense tables for narrow screens",
    fr: "Restructurer les tableaux denses pour les écrans étroits"
  },
  scenario: {
    en: "A customer checks on their phone whether their last order has shipped yet.",
    fr: "Une personne vérifie sur son téléphone si sa dernière commande a déjà été expédiée."
  },
  prompt: { en: "What is the main issue with this screen?", fr: "Quel est le principal problème de cet écran ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The desktop table is squeezed into five thin columns, so values break across lines.",
        fr: "Le tableau de bureau est compressé en cinq colonnes étroites, si bien que les valeurs se coupent."
      }
    },
    {
      id: "b",
      text: {
        en: "The header row uses grey text, where black headers would be quicker to pick out.",
        fr: "Les en-têtes sont en texte gris, alors que des en-têtes noirs se repéreraient plus vite."
      }
    },
    {
      id: "c",
      text: {
        en: "Orders are sorted newest first, where oldest first would show the full history.",
        fr: "Les commandes récentes sont en tête, alors que l’ordre inverse montrerait tout l’historique."
      }
    },
    {
      id: "d",
      text: {
        en: "Each row shows a total price, where the item count alone would keep rows lighter.",
        fr: "Chaque ligne affiche un prix total, alors que le seul nombre d’articles allégerait les lignes."
      }
    }
  ],
  explanation: {
    en: [
      "The desktop table keeps all five columns on a 360px screen: “Delivered” breaks into two lines, dates wrap, and the eye zigzags to find which status belongs to which order.",
      "On narrow screens, turn rows into cards (order number and status first, details below), or keep only the columns that matter and move the rest into the detail view.",
      "Grey headers, newest-first sorting and showing the total are all reasonable choices for an order history."
    ],
    fr: [
      "Le tableau de bureau garde ses cinq colonnes sur un écran de 360 px : « Remboursée » se coupe sur deux lignes, les dates passent à la ligne, et l’œil zigzague pour savoir quel statut correspond à quelle commande.",
      "Sur un écran étroit, transformez les lignes en cartes (numéro de commande et statut d’abord, détails en dessous), ou ne gardez que les colonnes utiles et déplacez le reste dans la vue détaillée.",
      "Des en-têtes gris, un tri du plus récent au plus ancien et l’affichage du total sont des choix raisonnables pour un historique de commandes."
    ]
  }
};
