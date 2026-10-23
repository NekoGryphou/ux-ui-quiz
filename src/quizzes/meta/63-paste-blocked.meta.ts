import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "paste-blocked",
  kind: "single",
  title: { en: "Type it, don’t paste it", fr: "Tapez-le, ne le collez pas" },
  principle: {
    en: "Let people paste into login fields",
    fr: "Autoriser le collage dans les champs de connexion"
  },
  scenario: {
    en: "A customer signs in to their bank, pasting the long password stored in their password manager.",
    fr: "Une personne se connecte à sa banque en collant le long mot de passe enregistré dans son gestionnaire de mots de passe."
  },
  prompt: {
    en: "What is the main issue with this sign-in?",
    fr: "Quel est le principal problème de cette connexion ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The password field refuses pasting, so a long generated password has to be typed by hand.",
        fr: "Le champ Mot de passe refuse le collage, il faut donc taper à la main un long mot de passe généré."
      }
    },
    {
      id: "b",
      text: {
        en: "The username is the customer number, where an email address would be easier to remember.",
        fr: "L’identifiant est le numéro client, alors qu’une adresse e-mail serait plus facile à retenir."
      }
    },
    {
      id: "c",
      text: {
        en: "The sign-in card sits on the left, where a centered card would draw the eye more directly.",
        fr: "Le bloc de connexion est à gauche, alors qu’un bloc centré attirerait le regard plus directement."
      }
    },
    {
      id: "d",
      text: {
        en: "The “Forgot password?” link sits under the button, where beside the field it’s found faster.",
        fr: "Le lien « Mot de passe oublié ? » est sous le bouton, alors qu’à côté du champ on le trouverait plus vite."
      }
    }
  ],
  explanation: {
    en: [
      "Blocking paste doesn’t stop attackers; it stops people using password managers. The customer must now retype a 24-character random password, or switch to a short one they can remember, which is exactly what security teams don’t want.",
      "Let people paste and let password managers fill the field. Don’t make sign-in depend on memorising or transcribing a password (WCAG 3.3.8 Accessible Authentication).",
      "A customer number as username, a left-aligned card and the link placement are ordinary choices for a banking app."
    ],
    fr: [
      "Bloquer le collage n’arrête pas les attaquants ; cela pénalise les personnes qui utilisent un gestionnaire de mots de passe. Il faut désormais retaper un mot de passe aléatoire de 24 caractères, ou passer à un mot de passe court et facile à retenir, exactement ce que les équipes sécurité veulent éviter.",
      "Autorisez le collage et laissez les gestionnaires de mots de passe remplir le champ. La connexion ne doit pas dépendre de la mémorisation ou de la recopie d’un mot de passe (WCAG 3.3.8 Authentification accessible).",
      "Un numéro client comme identifiant, un bloc aligné à gauche et la position du lien sont des choix courants pour une application bancaire."
    ]
  },
  links: [
    wcag(
      "3.3.8",
      { en: "Accessible Authentication (Minimum)", fr: "Authentification accessible (minimum)" },
      "accessible-authentication-minimum"
    )
  ]
};
