import { PHOTO_SHOE_MIZUNO } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "toast-over-action",
  kind: "single",
  title: { en: "A confirmation in the way", fr: "Une confirmation qui gêne" },
  principle: {
    en: "Never cover the next action with feedback",
    fr: "Ne jamais masquer l’action suivante avec un retour"
  },
  scenario: {
    en: "A shopper taps “Add to cart” and wants to check out right away. The confirmation stays on screen for six seconds.",
    fr: "Une personne touche « Ajouter au panier » et veut commander tout de suite. La confirmation reste affichée six secondes."
  },
  prompt: { en: "What is the main issue on this screen?", fr: "Quel est le principal problème de cet écran ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The confirmation toast sits over the buy bar, hiding the button users need next.",
        fr: "Le toast de confirmation recouvre la barre d’achat et masque le bouton nécessaire ensuite."
      }
    },
    {
      id: "b",
      text: {
        en: "The toast confirms the action without a thumbnail of the item that was added.",
        fr: "Le toast confirme l’action sans afficher de miniature de l’article ajouté."
      }
    },
    {
      id: "c",
      text: {
        en: "The toast offers “View cart” as plain text, where a button style would stand out.",
        fr: "Le toast propose « Voir le panier » en texte simple, alors qu’un bouton ressortirait mieux."
      }
    },
    {
      id: "d",
      text: {
        en: "The toast stays for six seconds, where three seconds would feel more responsive.",
        fr: "Le toast reste six secondes, alors que trois secondes donneraient une impression plus réactive."
      }
    }
  ],
  explanation: {
    en: [
      "The feedback lands exactly where the next action lives: for six seconds the shopper can’t reach Checkout, or has to wait.",
      "Show confirmations where they don’t block anything: above the action bar, inline next to the button (“Added ✓”), or as a cart badge.",
      "Six seconds is a reasonable duration for a toast with an action; the placement is the problem.",
      photoCredits([PHOTO_SHOE_MIZUNO], "en")
    ],
    fr: [
      "Le retour apparaît exactement là où se trouve l’action suivante : pendant six secondes, impossible d’atteindre Commander, à moins d’attendre.",
      "Affichez les confirmations là où elles ne bloquent rien : au-dessus de la barre d’action, directement à côté du bouton (« Ajouté ✓ ») ou sous forme de pastille sur le panier.",
      "Six secondes est une durée raisonnable pour un toast qui contient une action ; c’est son emplacement qui pose problème.",
      photoCredits([PHOTO_SHOE_MIZUNO], "fr")
    ]
  }
};
