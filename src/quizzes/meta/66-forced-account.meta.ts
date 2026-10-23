import { PHOTO_CANDLES } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "forced-account",
  kind: "single",
  title: { en: "Join us, or no candle", fr: "Inscrivez-vous, ou pas de bougie" },
  principle: {
    en: "Let people buy without creating an account",
    fr: "Permettre d’acheter sans créer de compte"
  },
  scenario: {
    en: "A visitor buys a single scented candle as a last-minute gift and heads to checkout.",
    fr: "Une personne achète une seule bougie parfumée comme cadeau de dernière minute et passe à la commande."
  },
  prompt: {
    en: "What is the main issue with this checkout step?",
    fr: "Quel est le principal problème de cette étape de commande ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Paying requires creating an account first, so a one-off gift buyer must sign up to pay.",
        fr: "Payer exige de créer un compte d’abord : pour un simple cadeau, il faut s’inscrire avant de payer."
      }
    },
    {
      id: "b",
      text: {
        en: "The order summary sits on the right, where above the form it would be seen sooner.",
        fr: "Le récapitulatif de commande est à droite, alors qu’au-dessus du formulaire il serait vu plus tôt."
      }
    },
    {
      id: "c",
      text: {
        en: "The password needs eight characters, where four would make the form quicker to fill.",
        fr: "Le mot de passe exige huit caractères, alors que quatre rendraient le formulaire plus rapide."
      }
    },
    {
      id: "d",
      text: {
        en: "The sign-up asks for a first name, where an email alone would be enough to continue.",
        fr: "L’inscription demande un prénom, alors qu’un e-mail seul suffirait pour continuer."
      }
    }
  ],
  explanation: {
    en: [
      "Forcing an account before payment is one of the most common reasons people abandon checkout: a one-off buyer has to invent a password and accept marketing terms just to send a €24 candle.",
      "Offer guest checkout as the default path, and suggest creating an account after the order, when the benefit (tracking, faster reorders) is clear and the email is already known.",
      "A summary on the side, an eight-character minimum and a first name for the delivery are all reasonable on their own.",
      photoCredits([PHOTO_CANDLES], "en")
    ],
    fr: [
      "Imposer un compte avant le paiement est l’une des causes d’abandon de commande les plus fréquentes : pour un achat ponctuel, il faut inventer un mot de passe et accepter des conditions marketing juste pour offrir une bougie à 24 €.",
      "Proposez la commande sans compte comme parcours par défaut, et suggérez la création d’un compte après la commande, quand l’intérêt (suivi, commandes plus rapides) est clair et que l’e-mail est déjà connu.",
      "Un récapitulatif sur le côté, un minimum de huit caractères et un prénom pour la livraison sont tous raisonnables en soi.",
      photoCredits([PHOTO_CANDLES], "fr")
    ]
  }
};
