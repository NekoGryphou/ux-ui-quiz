import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "confirmshaming",
  kind: "single",
  title: { en: "No thanks, I hate saving money", fr: "Non merci, je déteste faire des économies" },
  principle: {
    en: "Let people decline without guilt-tripping them",
    fr: "Laisser refuser sans culpabiliser"
  },
  scenario: {
    en: "A reader who has had enough of a store’s emails clicks “Unsubscribe” at the bottom of a newsletter.",
    fr: "Une personne lassée des e-mails d’une boutique clique sur « Se désabonner » en bas d’une newsletter."
  },
  prompt: { en: "What is the main issue with this page?", fr: "Quel est le principal problème de cette page ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The way out is worded to shame the reader, while staying gets the big friendly button.",
        fr: "La sortie est formulée pour faire honte, tandis que rester a droit au gros bouton engageant."
      }
    },
    {
      id: "b",
      text: {
        en: "The page offers a smaller frequency, where a single unsubscribe option would be quicker.",
        fr: "La page propose une fréquence réduite, là où une seule option de désabonnement serait plus rapide."
      }
    },
    {
      id: "c",
      text: {
        en: "The page shows a sad mascot, where a plain icon would keep the tone more professional.",
        fr: "La page affiche une mascotte triste, là où une simple icône garderait un ton plus professionnel."
      }
    },
    {
      id: "d",
      text: {
        en: "The confirmation sits on a new page, where unsubscribing from the email would be faster.",
        fr: "La confirmation s’ouvre sur une nouvelle page, là où se désabonner depuis l’e-mail serait plus rapide."
      }
    }
  ],
  explanation: {
    en: [
      "The reader came to unsubscribe, but the only way to do it is a small grey link that makes them say “I don’t like saving money”. This is confirmshaming: it uses guilt to push people towards the option the company wants.",
      "Label both choices neutrally and give them comparable weight (“Unsubscribe” and “Keep my emails”). Respect the decision in one click; you can mention a lower frequency as a secondary option.",
      "Offering fewer emails can be genuinely helpful, a mascot is a style choice, and a confirmation page is common."
    ],
    fr: [
      "La personne est venue se désabonner, mais le seul moyen d’y parvenir est un petit lien gris qui lui fait dire « je n’aime pas faire des économies ». C’est du confirmshaming : la culpabilité sert à pousser vers l’option que souhaite l’entreprise.",
      "Formulez les deux choix de façon neutre et donnez-leur un poids comparable (« Me désabonner » et « Garder mes e-mails »). Respectez la décision en un clic ; vous pouvez proposer une fréquence réduite comme option secondaire.",
      "Proposer moins d’e-mails peut réellement rendre service, une mascotte relève du style, et une page de confirmation est courante."
    ]
  }
};
