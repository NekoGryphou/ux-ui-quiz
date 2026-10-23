import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "unexplained-empty-history",
  kind: "single",
  title: { en: "An empty state that explains nothing", fr: "Un état vide qui n’explique rien" },
  principle: {
    en: "Say why it’s empty and what happens next",
    fr: "Dire pourquoi c’est vide et ce qui va se passer"
  },
  scenario: {
    en: "A freelancer started a 14-day Pro trial of a design tool. Their accountant asks for an invoice, so they open Billing.",
    fr: "Une personne en freelance a démarré l’essai Pro de 14 jours d’un outil de design. Son cabinet comptable lui demande une facture, elle ouvre donc Facturation."
  },
  prompt: { en: "What is the main issue on this page?", fr: "Quel est le principal problème de cette page ?" },
  correct: ["b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The empty table still shows its column headers, which can look like a loading error.",
        fr: "Le tableau vide affiche toujours ses en-têtes de colonnes, ce qui peut ressembler à une erreur de chargement."
      }
    },
    {
      id: "b",
      text: {
        en: "Billing history says “No data” without saying why, or when the first invoice will appear.",
        fr: "L’historique affiche « Aucune donnée » sans dire pourquoi, ni quand la première facture apparaîtra."
      }
    },
    {
      id: "c",
      text: {
        en: "The plan and the billing history share one page, which makes the page feel crowded.",
        fr: "Le forfait et l’historique de facturation partagent la même page, ce qui la rend chargée."
      }
    },
    {
      id: "d",
      text: {
        en: "The trial end date sits in small text under the plan name, so it’s easy to miss.",
        fr: "La date de fin d’essai est en petit sous le nom du forfait, si bien qu’elle passe facilement inaperçue."
      }
    }
  ],
  explanation: {
    en: [
      "An empty state should answer “why is this empty?” and “what happens next?”. “No data” makes users wonder whether billing is broken or the invoice got lost.",
      "Here the answer is known: “No invoices yet. Your first invoice will be issued on Nov 1, when your trial ends.” Add a useful next step, such as setting the billing email.",
      "The trial date is shown in the plan card, but users looking at the history shouldn’t have to connect the two themselves."
    ],
    fr: [
      "Un état vide doit répondre à « pourquoi est-ce vide ? » et « que va-t-il se passer ? ». « Aucune donnée » laisse se demander si la facturation est en panne ou si la facture s’est perdue.",
      "Ici, la réponse est connue : « Aucune facture pour l’instant. Votre première facture sera émise le 1er novembre, à la fin de votre essai. » Ajoutez une prochaine étape utile, comme renseigner l’e-mail de facturation.",
      "La date de fin d’essai figure dans la carte du forfait, mais la personne qui consulte l’historique ne devrait pas avoir à faire le lien elle-même."
    ]
  }
};
