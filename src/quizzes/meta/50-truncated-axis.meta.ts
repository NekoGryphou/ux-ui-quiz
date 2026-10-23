import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "truncated-axis",
  kind: "hotspot",
  title: { en: "A 4% rise that looks like a rocket", fr: "Une hausse de 4 % qui ressemble à une fusée" },
  principle: { en: "Start bar charts at zero", fr: "Faire partir les histogrammes de zéro" },
  scenario: {
    en: "A sales director glances at the dashboard before a board meeting to see how this quarter compares with the first one.",
    fr: "Avant un conseil d’administration, la direction commerciale jette un œil au tableau de bord pour comparer ce trimestre au premier."
  },
  prompt: {
    en: "Click the part of the chart that misleads the director.",
    fr: "Cliquez sur la partie du graphique qui induit la direction en erreur."
  },
  correct: ["axis"],
  regions: [
    { id: "title", text: { en: "Chart title", fr: "Titre du graphique" } },
    { id: "period", text: { en: "Year selector", fr: "Sélecteur d’année" } },
    { id: "export", text: { en: "Export button", fr: "Bouton d’export" } },
    { id: "axis", text: { en: "Vertical axis", fr: "Axe vertical" } },
    { id: "bars", text: { en: "Bars", fr: "Barres" } },
    { id: "legend", text: { en: "Legend", fr: "Légende" } }
  ],
  explanation: {
    en: [
      "The vertical axis starts at €96k, so Q4’s bar looks about five times taller than Q1’s for a rise of roughly 4%. People read bar length as quantity; cutting the baseline turns a small change into a dramatic one.",
      "Start bar charts at zero. If small differences matter, use a line chart with a clearly labelled range, or show the change itself (“+4.1% since Q1”).",
      "The title, legend and controls are clear; the distortion comes entirely from where the axis begins."
    ],
    fr: [
      "L’axe vertical commence à 96 k€ : la barre de T4 paraît environ cinq fois plus haute que celle de T1 pour une hausse d’à peine 4 %. On lit la longueur d’une barre comme une quantité ; tronquer la ligne de base transforme un petit écart en changement spectaculaire.",
      "Faites partir les histogrammes de zéro. Si les petits écarts comptent, utilisez une courbe avec une plage clairement indiquée, ou affichez directement la variation (« +4,1 % depuis T1 »).",
      "Le titre, la légende et les commandes sont clairs ; la distorsion vient uniquement du point de départ de l’axe."
    ]
  }
};
