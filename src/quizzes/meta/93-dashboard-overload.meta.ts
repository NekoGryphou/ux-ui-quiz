import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "dashboard-overload",
  kind: "multiple",
  title: { en: "Everything, everywhere, all at once", fr: "Tout, partout, tout à la fois" },
  principle: {
    en: "Show the few numbers that answer the question",
    fr: "Afficher les quelques chiffres qui répondent à la question"
  },
  scenario: {
    en: "The CEO opens the company dashboard five minutes before a meeting to answer one question: are sales up this month?",
    fr: "Cinq minutes avant une réunion, la direction générale ouvre le tableau de bord de l’entreprise pour répondre à une seule question : les ventes sont-elles en hausse ce mois-ci ?"
  },
  prompt: {
    en: "Which issues make this dashboard hard to read?",
    fr: "Quels problèmes rendent ce tableau de bord difficile à lire ?"
  },
  correct: ["a", "b", "c"],
  choices: [
    {
      id: "a",
      text: {
        en: "Sixteen widgets compete for attention, so the one sales figure the CEO needs is buried.",
        fr: "Seize widgets se disputent l’attention, si bien que le seul chiffre de ventes utile à la direction est noyé."
      }
    },
    {
      id: "b",
      text: {
        en: "The pie chart splits into twelve similar slices, so no share can be compared at a glance.",
        fr: "Le camembert est découpé en douze parts similaires, si bien qu’aucune part ne se compare d’un coup d’œil."
      }
    },
    {
      id: "c",
      text: {
        en: "Several charts use 3D and gauges, so values are hard to read and compare accurately.",
        fr: "Plusieurs graphiques utilisent la 3D et des jauges, si bien que les valeurs se lisent et se comparent mal."
      }
    },
    {
      id: "d",
      text: {
        en: "Numbers use thousands separators, where raw digits would fit more data in each card.",
        fr: "Les nombres utilisent des séparateurs de milliers, alors que des chiffres bruts tiendraient mieux dans chaque carte."
      }
    }
  ],
  explanation: {
    en: [
      "Every metric the company tracks sits on one screen with equal weight: sixteen widgets, three gauges, a 3D bar chart and a twelve-slice pie. The month-on-month sales change exists, but it is a small number in the corner.",
      "Start from the questions people bring to a dashboard and lead with those answers (“Sales: €1.2M, +8% vs last month”). Use few, flat charts: bars or lines over pies, no 3D, and move detail into drill-downs.",
      "Thousands separators make large numbers readable; keep them."
    ],
    fr: [
      "Chaque indicateur suivi par l’entreprise se trouve sur un seul écran, avec le même poids : seize widgets, trois jauges, un histogramme en 3D et un camembert en douze parts. L’évolution des ventes d’un mois sur l’autre est bien là, mais c’est un petit chiffre dans un coin.",
      "Partez des questions que l’on pose à un tableau de bord et mettez ces réponses en avant (« Ventes : 1,2 M€, +8 % par rapport au mois dernier »). Utilisez peu de graphiques, et à plat : barres ou courbes plutôt que camemberts, pas de 3D, et renvoyez le détail vers des vues approfondies.",
      "Les séparateurs de milliers rendent les grands nombres lisibles : gardez-les."
    ]
  }
};
