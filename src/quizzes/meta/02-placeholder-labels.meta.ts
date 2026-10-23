import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "placeholder-labels",
  kind: "multiple",
  title: { en: "Placeholders used as labels", fr: "Des placeholders en guise d’étiquettes" },
  principle: {
    en: "Keep field context persistent and legible",
    fr: "Garder le contexte des champs visible et lisible"
  },
  scenario: {
    en: "A returning user is signing in to a B2B tool. They have started typing their email address.",
    fr: "Une personne habituée se connecte à un outil B2B. Elle a commencé à saisir son adresse e-mail."
  },
  prompt: { en: "Which issues does this form have?", fr: "Quels problèmes ce formulaire présente-t-il ?" },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "Field names exist only as placeholders, so they disappear once the user types.",
        fr: "Le nom des champs n’existe qu’en placeholder, il disparaît donc dès que l’on commence à saisir."
      }
    },
    {
      id: "b",
      text: {
        en: "The placeholder text is so pale that it’s hard to read against the white field.",
        fr: "Le texte du placeholder est si pâle qu’il est difficile à lire sur le fond blanc du champ."
      }
    },
    {
      id: "c",
      text: {
        en: "The form asks for an email address, where a username would be quicker to type.",
        fr: "Le formulaire demande une adresse e-mail, alors qu’un identifiant serait plus rapide à saisir."
      }
    },
    {
      id: "d",
      text: {
        en: "The “Forgot your password?” link sits under the button instead of beside the field.",
        fr: "Le lien « Mot de passe oublié ? » est placé sous le bouton au lieu d’être à côté du champ."
      }
    },
    {
      id: "e",
      text: {
        en: "The Sign in button spans the full width, so it reads more like a banner than a button.",
        fr: "Le bouton Se connecter occupe toute la largeur, si bien qu’il ressemble plus à un bandeau qu’à un bouton."
      }
    }
  ],
  explanation: {
    en: [
      "Placeholders vanish on input: the half-typed email field already has no name, and users who get interrupted or use a screen reader lose the field’s purpose (WCAG 3.3.2 Labels or Instructions).",
      "The very light placeholder gray is about 1.6:1 against white, far below the 4.5:1 minimum for text (WCAG 1.4.3).",
      "Use a visible label above each field, and keep placeholders for optional examples only."
    ],
    fr: [
      "Un placeholder disparaît à la saisie : le champ e-mail à moitié rempli n’a déjà plus de nom, et une personne interrompue ou qui utilise un lecteur d’écran perd la fonction du champ (WCAG 3.3.2 Étiquettes ou instructions).",
      "Le gris très clair du placeholder atteint environ 1,6:1 sur fond blanc, bien en dessous du minimum de 4,5:1 exigé pour le texte (WCAG 1.4.3).",
      "Placez une étiquette visible au-dessus de chaque champ et réservez les placeholders à des exemples facultatifs."
    ]
  },
  links: [
    wcag("3.3.2", { en: "Labels or Instructions", fr: "Étiquettes ou instructions" }, "labels-or-instructions"),
    wcag("1.4.3", { en: "Contrast (Minimum)", fr: "Contraste (minimum)" }, "contrast-minimum")
  ]
};
