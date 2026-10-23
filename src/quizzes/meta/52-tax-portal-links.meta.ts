import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "tax-portal-links",
  kind: "multiple",
  title: { en: "Forty links, one task", fr: "Quarante liens, une seule tâche" },
  principle: {
    en: "Make frequent tasks stand out and every link label specific",
    fr: "Faire ressortir les tâches fréquentes et préciser chaque libellé de lien"
  },
  scenario: {
    en: "A café owner logs in to the tax portal to pay this quarter’s VAT before tonight’s deadline.",
    fr: "Une personne qui tient un café se connecte au portail des impôts pour payer la TVA du trimestre avant l’échéance de ce soir."
  },
  prompt: {
    en: "Which issues make this task harder than it needs to be?",
    fr: "Quels problèmes rendent cette tâche plus difficile que nécessaire ?"
  },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "“VAT” appears under both Declare and Pay with the same label, so the link doesn’t say what it does.",
        fr: "« TVA » figure sous Déclarer et sous Payer avec le même libellé, donc le lien ne dit pas ce qu’il fait."
      }
    },
    {
      id: "b",
      text: {
        en: "Dozens of services share one style and weight, so the frequent tasks don’t stand out from rare ones.",
        fr: "Des dizaines de services ont le même style et la même graisse, donc les tâches fréquentes ne ressortent pas."
      }
    },
    {
      id: "c",
      text: {
        en: "Each link starts with an orange arrow, where plain bullets would make the long lists look calmer.",
        fr: "Chaque lien commence par une flèche orange, alors que de simples puces rendraient les listes plus sobres."
      }
    },
    {
      id: "d",
      text: {
        en: "The account number shows in the side panel, where hiding it behind a menu would save some space.",
        fr: "Le numéro de compte figure dans le panneau latéral, alors que le cacher dans un menu ferait gagner de la place."
      }
    }
  ],
  explanation: {
    en: [
      "Every service gets the same small link, so paying VAT (the task most visitors come for) hides among property duty and cross-border payments. Worse, “VAT” exists twice with identical labels: only the small heading above says which one pays and which one declares.",
      "Bring the few frequent tasks forward (“Pay VAT”, “File VAT return”) and make each label specific on its own, so it works when scanned, read by a screen reader or found by search.",
      "The arrows are the portal’s link style, and showing the account number helps people check they’re in the right account."
    ],
    fr: [
      "Chaque service a droit au même petit lien, si bien que le paiement de la TVA (la raison de venir pour la plupart des gens) se perd entre les droits immobiliers et les paiements transfrontaliers. Pire, « TVA » apparaît deux fois avec un libellé identique : seul le petit intertitre au-dessus indique lequel sert à payer et lequel à déclarer.",
      "Mettez en avant les quelques tâches fréquentes (« Payer la TVA », « Déclarer la TVA ») et rendez chaque libellé explicite à lui seul, pour qu’il fonctionne en lecture rapide, avec un lecteur d’écran ou dans une recherche.",
      "Les flèches sont le style de lien du portail, et afficher le numéro de compte permet de vérifier qu’on est sur le bon compte."
    ]
  }
};
