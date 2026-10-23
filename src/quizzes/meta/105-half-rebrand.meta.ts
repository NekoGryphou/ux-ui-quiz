import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "half-rebrand",
  kind: "hotspot",
  title: { en: "Two brands in one app", fr: "Deux marques dans une même appli" },
  principle: {
    en: "Migrate old features to the current design system",
    fr: "Migrer les anciennes fonctionnalités vers le design system actuel"
  },
  scenario: {
    en: "An accountant exports this month’s invoices in an app that was rebranded last year, one feature at a time.",
    fr: "Un service comptable exporte les factures du mois dans une appli dont l’identité visuelle a été refaite l’an dernier, une fonctionnalité à la fois."
  },
  prompt: {
    en: "Click every part still built on the old design.",
    fr: "Cliquez sur chaque partie encore construite avec l’ancien design."
  },
  correct: ["invoices", "export"],
  regions: [
    { id: "header", text: { en: "Header", fr: "En-tête" } },
    { id: "nav", text: { en: "Side navigation", fr: "Navigation latérale" } },
    { id: "summary", text: { en: "Revenue card", fr: "Carte du chiffre d’affaires" } },
    { id: "invoices", text: { en: "Invoices table", fr: "Tableau des factures" } },
    { id: "export", text: { en: "Export dialog", fr: "Boîte de dialogue d’export" } }
  ],
  explanation: {
    en: [
      "The shell and dashboard use the new brand (violet, rounded, “Save” on the right), but the invoices table and export dialog were never migrated: an old teal and orange palette that clashes with the violet, square corners, an old logo, a fixed-width module embedded like an iframe that scrolls sideways, “Submit” on the left and “OK/Cancel” wording. The accountant has to relearn where the main action is on every screen.",
      "Track legacy screens as design debt: list them, migrate the most used first, and until then wrap them with the new tokens (colours, radius, button order) so behaviour, placement and responsiveness stay consistent even if the internals are old.",
      "The header, navigation and revenue card already follow the current design system."
    ],
    fr: [
      "Le cadre et le tableau de bord utilisent la nouvelle marque (violet, coins arrondis, « Enregistrer » à droite), mais le tableau des factures et la boîte d’export n’ont jamais été migrés : une ancienne palette bleu canard et orange qui jure avec le violet, des coins carrés, un ancien logo, un module à largeur fixe intégré comme une iframe qui défile horizontalement, « Valider » à gauche et les libellés « OK/Annuler ». Il faut réapprendre où se trouve l’action principale à chaque écran.",
      "Suivez les écrans hérités comme une dette de design : listez-les, migrez d’abord les plus utilisés et, en attendant, habillez-les avec les nouveaux tokens (couleurs, arrondis, ordre des boutons) pour que le comportement, la disposition et l’adaptation à l’écran restent cohérents, même si le code interne est ancien.",
      "L’en-tête, la navigation et la carte du chiffre d’affaires suivent déjà le design system actuel."
    ]
  }
};
