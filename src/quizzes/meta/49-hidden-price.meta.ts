import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "hidden-price",
  kind: "multiple",
  title: { en: "€9 a month, €108 today", fr: "9 € par mois, 108 € aujourd’hui" },
  principle: { en: "Show the full price upfront", fr: "Afficher le prix complet dès le départ" },
  scenario: {
    en: "A freelancer compares plans for a design tool and picks the one that fits their monthly budget.",
    fr: "Une personne en freelance compare les offres d’un outil de design et choisit celle qui correspond à son budget mensuel."
  },
  prompt: {
    en: "Which issues make these prices hard to trust?",
    fr: "Quels problèmes rendent ces prix peu fiables ?"
  },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The big €9 is a monthly rate on a yearly bill, so the charge today is €108, not €9.",
        fr: "Le gros 9 € est un tarif mensuel facturé à l’année : le montant débité aujourd’hui est de 108 €, pas 9 €."
      }
    },
    {
      id: "b",
      text: {
        en: "A setup fee is mentioned but not priced, so the real total only shows at checkout.",
        fr: "Des frais de mise en service sont mentionnés sans montant, donc le vrai total n’apparaît qu’au paiement."
      }
    },
    {
      id: "c",
      text: {
        en: "The plans sit side by side, where a comparison table would line up every feature.",
        fr: "Les offres sont côte à côte, alors qu’un tableau comparatif alignerait chaque fonctionnalité."
      }
    },
    {
      id: "d",
      text: {
        en: "The prices end in 9 instead of round numbers, which can make plans feel less premium.",
        fr: "Les prix finissent par 9 au lieu de chiffres ronds, ce qui peut donner aux offres un air moins haut de gamme."
      }
    }
  ],
  explanation: {
    en: [
      "The headline €9 isn’t what the freelancer pays: the plan is billed yearly (€108 today), and a setup fee of unknown size is added at checkout. The price they budgeted for is not the price they’ll be charged.",
      "Lead with the amount charged and its period (“€108 billed yearly”, with “€9/month” as a helper), and include every mandatory fee upfront. Many consumer laws require the total price, unavoidable fees included, to be shown before purchase.",
      "Side-by-side cards are fine for two plans, and prices ending in 9 are a marketing choice, not a usability flaw."
    ],
    fr: [
      "Les 9 € mis en avant ne correspondent pas à ce que la personne paie : l’offre est facturée à l’année (108 € aujourd’hui), et des frais de mise en service au montant inconnu s’ajoutent au paiement. Le prix prévu dans son budget n’est pas celui qui sera débité.",
      "Mettez en avant le montant débité et sa période (« 108 € facturés par an », avec « 9 €/mois » en complément), et indiquez tous les frais obligatoires dès le départ. De nombreuses lois de protection des consommateurs imposent d’afficher le prix total, frais inévitables compris, avant l’achat.",
      "Des cartes côte à côte conviennent pour deux offres, et les prix finissant par 9 relèvent d’un choix marketing, pas d’un défaut d’utilisabilité."
    ]
  }
};
