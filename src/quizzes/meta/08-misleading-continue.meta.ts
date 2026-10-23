import { PHOTO_SHOE_TRAIL } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "misleading-continue",
  kind: "single",
  title: { en: "“Continue” that places the order", fr: "Un « Continuer » qui passe la commande" },
  principle: { en: "Label actions by their real outcome", fr: "Nommer les actions selon leur véritable effet" },
  scenario: {
    en: "A shopper reaches the payment step of checkout and wants to double-check the order before paying.",
    fr: "Une personne arrive à l’étape de paiement et veut vérifier sa commande une dernière fois avant de payer."
  },
  prompt: { en: "What is the main issue on this step?", fr: "Quel est le principal problème de cette étape ?" },
  correct: ["b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The saved Visa card is preselected, which nudges users to pay without checking it.",
        fr: "La carte Visa enregistrée est présélectionnée, ce qui pousse à payer sans la vérifier."
      }
    },
    {
      id: "b",
      text: {
        en: "The button reads “Continue”, yet clicking it places the order and charges the card.",
        fr: "Le bouton indique « Continuer », mais un clic passe la commande et débite la carte."
      }
    },
    {
      id: "c",
      text: {
        en: "The order summary sits on the right, away from the payment details it relates to.",
        fr: "Le récapitulatif de commande est à droite, loin des informations de paiement qu’il concerne."
      }
    },
    {
      id: "d",
      text: {
        en: "The way back to Shipping is a plain text link, so it’s easy to overlook.",
        fr: "Le retour vers Livraison est un simple lien texte, facile à manquer."
      }
    }
  ],
  explanation: {
    en: [
      "Button labels set expectations. “Continue”, with a stepper that still shows a Review step, promises another step, not a payment.",
      "Commitments involving money need an explicit label such as “Pay €84.90” or “Place order”.",
      "Fine print under the button doesn’t fix a misleading label: most users never read it.",
      photoCredits([PHOTO_SHOE_TRAIL], "en")
    ],
    fr: [
      "Le libellé d’un bouton crée une attente. « Continuer », avec un indicateur d’étapes qui affiche encore une étape Vérification, promet une étape de plus, pas un paiement.",
      "Un engagement financier exige un libellé explicite comme « Payer 84,90 € » ou « Passer la commande ».",
      "Une mention en petits caractères sous le bouton ne corrige pas un libellé trompeur : la plupart des gens ne la lisent jamais.",
      photoCredits([PHOTO_SHOE_TRAIL], "fr")
    ]
  }
};
