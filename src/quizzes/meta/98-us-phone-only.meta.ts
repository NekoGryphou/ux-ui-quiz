import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "us-phone-only",
  kind: "single",
  title: { en: "Please enter a valid phone number", fr: "Veuillez saisir un numéro de téléphone valide" },
  principle: {
    en: "Accept international formats for phone numbers and addresses",
    fr: "Accepter les formats internationaux pour les numéros de téléphone et les adresses"
  },
  scenario: {
    en: "A customer in Lyon enters their mobile number at checkout so the courier can reach them.",
    fr: "À Lyon, une personne saisit son numéro de portable au moment de payer, pour être joignable à la livraison."
  },
  prompt: { en: "What is the main issue with this field?", fr: "Quel est le principal problème de ce champ ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The field only accepts the US (XXX) XXX-XXXX pattern, so a valid French number is refused.",
        fr: "Le champ n’accepte que le format américain (XXX) XXX-XXXX, si bien qu’un numéro français valide est refusé."
      }
    },
    {
      id: "b",
      text: {
        en: "The field shows an example under it, where a placeholder inside would keep the form shorter.",
        fr: "Le champ affiche un exemple en dessous, alors qu’un texte indicatif à l’intérieur raccourcirait le formulaire."
      }
    },
    {
      id: "c",
      text: {
        en: "The error appears in red under the field, where a toast would make the problem more visible.",
        fr: "L’erreur s’affiche en rouge sous le champ, alors qu’une notification toast rendrait le problème plus visible."
      }
    },
    {
      id: "d",
      text: {
        en: "The form asks for a phone number at all, where an email address would be enough for delivery.",
        fr: "Le formulaire demande un numéro de téléphone, alors qu’une adresse e-mail suffirait pour la livraison."
      }
    }
  ],
  explanation: {
    en: [
      "“06 12 34 56 78” is a perfectly valid French mobile number, but the validation expects ten digits in the US pattern and refuses it. The customer can’t complete checkout without inventing a number.",
      "Accept numbers as people write them: allow spaces, dots, dashes and a leading “+”, offer a country code selector, and validate with a library that knows international rules (libphonenumber), not a single regex.",
      "An example under the field, an inline error and asking for a phone number for delivery are all reasonable."
    ],
    fr: [
      "« 06 12 34 56 78 » est un numéro de portable français parfaitement valide, mais la validation attend dix chiffres au format américain et le refuse. Impossible de finaliser la commande sans inventer un numéro.",
      "Acceptez les numéros tels que les gens les écrivent : autorisez les espaces, les points, les tirets et un « + » initial, proposez un sélecteur d’indicatif pays et validez avec une bibliothèque qui connaît les règles internationales (libphonenumber), pas une simple regex.",
      "Un exemple sous le champ, une erreur affichée en ligne et la demande d’un numéro de téléphone pour la livraison sont tout à fait raisonnables."
    ]
  }
};
