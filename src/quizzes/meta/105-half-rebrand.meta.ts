import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "half-rebrand",
  kind: "hotspot",
  title: "Two brands in one app",
  principle: "Migrate old features to the current design system",
  scenario:
    "An accountant exports this month’s invoices in an app that was rebranded last year, one feature at a time.",
  prompt: "Click every part still built on the old design.",
  correct: ["invoices", "export"],
  regions: [
    { id: "header", text: "Header" },
    { id: "nav", text: "Side navigation" },
    { id: "summary", text: "Revenue card" },
    { id: "invoices", text: "Invoices table" },
    { id: "export", text: "Export dialog" }
  ],
  explanation: [
    "The shell and dashboard use the new brand (violet, rounded, “Save” on the right), but the invoices table and export dialog were never migrated: an old teal and orange palette that clashes with the violet, square corners, an old logo, a fixed-width module embedded like an iframe that scrolls sideways, “Submit” on the left and “OK/Cancel” wording. The accountant has to relearn where the main action is on every screen.",
    "Track legacy screens as design debt: list them, migrate the most used first, and until then wrap them with the new tokens (colours, radius, button order) so behaviour, placement and responsiveness stay consistent even if the internals are old.",
    "The header, navigation and revenue card already follow the current design system."
  ]
};
