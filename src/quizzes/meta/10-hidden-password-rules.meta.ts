import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "hidden-password-rules",
  kind: "multiple",
  title: { en: "Secret password rules", fr: "Des règles de mot de passe secrètes" },
  principle: { en: "Show constraints before input", fr: "Afficher les contraintes avant la saisie" },
  scenario: {
    en: "A user creating an account types a password they like, confirms it and submits. The page updates as shown.",
    fr: "En créant un compte, une personne saisit un mot de passe qui lui plaît, le confirme et valide. La page se met à jour comme ci-dessous."
  },
  prompt: { en: "Which issues does this form have?", fr: "Quels problèmes ce formulaire présente-t-il ?" },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The password rules aren’t shown until after the user has submitted the form.",
        fr: "Les règles du mot de passe n’apparaissent qu’une fois le formulaire envoyé."
      }
    },
    {
      id: "b",
      text: {
        en: "The error says the password fails “requirements” without naming which one.",
        fr: "L’erreur parle d’« exigences » non respectées sans préciser laquelle."
      }
    },
    {
      id: "c",
      text: {
        en: "The error appears under the field, where a banner at the top would be noticed.",
        fr: "L’erreur apparaît sous le champ, là où un bandeau en haut serait remarqué."
      }
    },
    {
      id: "d",
      text: {
        en: "The email is shown as plain text, so users can’t correct a typo in it here.",
        fr: "L’e-mail est affiché en texte simple, impossible donc d’y corriger une faute ici."
      }
    }
  ],
  explanation: {
    en: [
      "Hidden rules turn the form into a guessing game. List the requirements upfront, ideally as a checklist that updates while typing (WCAG 3.3.2 Labels or Instructions).",
      "“Doesn’t meet requirements” gives no next step. Say what’s missing: “Add at least one number.”",
      "An error next to its field is the recommended placement, and confirming the email from a previous step is fine."
    ],
    fr: [
      "Des règles cachées transforment le formulaire en devinette. Listez les exigences dès le départ, idéalement sous forme de liste de contrôle qui se met à jour pendant la saisie (WCAG 3.3.2 Étiquettes ou instructions).",
      "« Ne respecte pas les exigences » n’indique aucune marche à suivre. Dites ce qui manque : « Ajoutez au moins un chiffre. »",
      "Une erreur à côté de son champ est l’emplacement recommandé, et rappeler l’e-mail saisi à une étape précédente ne pose pas problème."
    ]
  },
  links: [wcag("3.3.2", { en: "Labels or Instructions", fr: "Étiquettes ou instructions" }, "labels-or-instructions")]
};
