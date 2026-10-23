import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "german-overflow",
  kind: "hotspot",
  title: { en: "Kontoeinstellungen, cut in half", fr: "Kontoeinstellungen, coupé en deux" },
  principle: {
    en: "Leave room for longer translations",
    fr: "Prévoir de la place pour des traductions plus longues"
  },
  scenario: {
    en: "A customer in Munich opens the German version of a banking app’s account screen.",
    fr: "À Munich, une personne ouvre l’écran de compte d’une appli bancaire dans sa version allemande."
  },
  prompt: {
    en: "Click every place where the translation breaks the layout.",
    fr: "Cliquez sur chaque endroit où la traduction casse la mise en page."
  },
  correct: ["tabs", "buttons"],
  regions: [
    { id: "title", text: { en: "Screen title", fr: "Titre de l’écran" } },
    { id: "tabs", text: { en: "Tabs", fr: "Onglets" } },
    { id: "balance", text: { en: "Balance", fr: "Solde" } },
    { id: "buttons", text: { en: "Action buttons", fr: "Boutons d’action" } },
    { id: "list", text: { en: "Transactions", fr: "Opérations" } }
  ],
  explanation: {
    en: [
      "The layout was sized for English labels like “Transfer” and “Settings”. German words are often 30–50% longer: tab labels overlap and the fixed-width buttons cut “Überweisung” and “Kontoeinstellungen” mid-word.",
      "Design for expansion: let buttons and tabs grow, allow wrapping or a scrollable tab row, avoid fixed widths around text, and test every screen with the longest supported language (or a pseudo-localised build).",
      "The title, balance and transaction list adapt correctly to the longer text."
    ],
    fr: [
      "La mise en page a été dimensionnée pour des libellés anglais comme « Transfer » et « Settings ». Les mots allemands sont souvent 30 à 50 % plus longs : les onglets se chevauchent et les boutons à largeur fixe coupent « Überweisung » et « Kontoeinstellungen » en plein mot.",
      "Prévoyez l’expansion du texte : laissez les boutons et les onglets s’agrandir, autorisez le retour à la ligne ou une rangée d’onglets défilante, évitez les largeurs fixes autour du texte et testez chaque écran avec la langue la plus longue prise en charge (ou une version pseudo-localisée).",
      "Le titre, le solde et la liste des opérations s’adaptent correctement au texte plus long."
    ]
  }
};
