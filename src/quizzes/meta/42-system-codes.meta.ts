import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "system-codes",
  kind: "multiple",
  title: { en: "Status 3, flag Y", fr: "Statut 3, indicateur Y" },
  principle: {
    en: "Speak the user’s language, not the system’s",
    fr: "Parler la langue des utilisateurs, pas celle du système"
  },
  scenario: {
    en: "A new support agent looks up an order to tell a customer on the phone where their parcel is.",
    fr: "Une personne qui vient d’arriver au support recherche une commande pour indiquer, au téléphone, où en est le colis."
  },
  prompt: {
    en: "Which issues make this screen hard for the agent to use?",
    fr: "Quels problèmes rendent cet écran difficile à utiliser pour le support ?"
  },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The status column shows a bare number, so the agent can’t say where the parcel actually is.",
        fr: "La colonne de statut n’affiche qu’un chiffre, si bien qu’on ne peut pas dire où se trouve le colis."
      }
    },
    {
      id: "b",
      text: {
        en: "Column headers are internal names like SHP_DT, so each one needs a lookup sheet to decode.",
        fr: "Les en-têtes sont des noms internes comme SHP_DT, qu’il faut décoder un par un avec une table de codes."
      }
    },
    {
      id: "c",
      text: {
        en: "The grid lists eight orders at once, where showing only the searched one would cut the noise.",
        fr: "La grille liste huit commandes à la fois, alors qu’afficher la seule commande cherchée réduirait le bruit."
      }
    },
    {
      id: "d",
      text: {
        en: "The window uses a grey system theme, where a white background would make the data feel lighter.",
        fr: "La fenêtre utilise un thème système gris, alors qu’un fond blanc rendrait les données plus légères."
      }
    }
  ],
  explanation: {
    en: [
      "Status “3” and headers like CUST_REF, SHP_DT or FLG make sense to the database, not to a new agent: every lookup means checking a code sheet, and misread codes reach the customer.",
      "Use the words people use: “In transit”, “Shipped on 12 May”, “Priority”. Keep raw codes as secondary detail if other systems need them.",
      "The dense grid and grey theme look dated, but agents who scan many orders benefit from compact rows, and the searched order is highlighted."
    ],
    fr: [
      "Le statut « 3 » et des en-têtes comme CUST_REF, SHP_DT ou FLG ont du sens pour la base de données, pas pour une recrue : chaque recherche oblige à consulter une table de codes, et les codes mal lus finissent par atteindre la clientèle.",
      "Employez les mots de tous les jours : « En transit », « Expédiée le 12 mai », « Prioritaire ». Gardez les codes bruts en information secondaire si d’autres systèmes en ont besoin.",
      "La grille dense et le thème gris font daté, mais des lignes compactes aident à parcourir beaucoup de commandes, et la commande recherchée est mise en évidence."
    ]
  }
};
