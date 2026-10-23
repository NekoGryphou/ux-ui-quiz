import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "misaligned-amounts",
  kind: "hotspot",
  title: { en: "Numbers you can’t compare", fr: "Des montants impossibles à comparer" },
  principle: {
    en: "Right-align numbers and format them consistently",
    fr: "Aligner les nombres à droite et les formater de façon homogène"
  },
  scenario: {
    en: "A finance manager scans this month’s invoices to spot the largest payments.",
    fr: "La personne en charge des finances parcourt les factures du mois pour repérer les plus gros paiements."
  },
  prompt: {
    en: "Click the part of the table that makes this task hard.",
    fr: "Cliquez sur la partie du tableau qui complique cette tâche."
  },
  correct: ["amount-column"],
  regions: [
    { id: "page-header", text: { en: "Page title and export", fr: "Titre de la page et export" } },
    { id: "filters", text: { en: "Date filters", fr: "Filtres de date" } },
    { id: "customer-column", text: { en: "Customer column", fr: "Colonne Client" } },
    { id: "date-column", text: { en: "Date column", fr: "Colonne Date" } },
    { id: "amount-column", text: { en: "Amount column", fr: "Colonne Montant" } },
    { id: "pagination", text: { en: "Pagination", fr: "Pagination" } }
  ],
  explanation: {
    en: [
      "Amounts are left-aligned and use different decimal formats, so digits of the same magnitude never line up: €12,000.00 looks shorter than €1,240.5.",
      "Right-align numeric columns, use the same number of decimals, and use tabular (fixed-width) figures so values can be compared at a glance.",
      "Text columns such as customer names are correctly left-aligned."
    ],
    fr: [
      "Les montants sont alignés à gauche et n’ont pas le même nombre de décimales : les chiffres de même rang ne s’alignent jamais, et l’œil doit lire chaque valeur pour comparer 12 000,00 € et 1 240,5 €.",
      "Alignez les colonnes numériques à droite, gardez le même nombre de décimales et utilisez des chiffres tabulaires (à chasse fixe) pour comparer les valeurs d’un coup d’œil.",
      "Les colonnes de texte, comme les noms d’entreprise, sont à juste titre alignées à gauche."
    ]
  }
};
