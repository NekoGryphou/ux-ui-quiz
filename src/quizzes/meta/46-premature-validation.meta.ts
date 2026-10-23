import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "premature-validation",
  kind: "compare",
  title: { en: "Wrong before you’ve finished", fr: "Faux avant même d’avoir fini" },
  principle: {
    en: "Validate when the user is done, not on the first keystroke",
    fr: "Valider une fois la saisie terminée, pas dès la première touche"
  },
  scenario: {
    en: "A visitor creates an account and is halfway through typing their email address.",
    fr: "Une personne crée un compte et en est à la moitié de la saisie de son adresse e-mail."
  },
  prompt: {
    en: "Which version handles validation better?",
    fr: "Quelle version gère le mieux la validation ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "Flagging “camille.du” as invalid while the visitor is still typing is like correcting someone mid-sentence: the field turns red for an address that is simply unfinished.",
      "Validate when the user leaves the field or submits the form. Once an error is shown, re-check as they type so it clears as soon as the value is fixed.",
      "Both versions use the same field, message style and wording; only the moment of validation differs."
    ],
    fr: [
      "Signaler « camille.du » comme invalide pendant la saisie revient à corriger quelqu’un au milieu de sa phrase : le champ passe au rouge pour une adresse qui n’est simplement pas terminée.",
      "Validez quand la personne quitte le champ ou envoie le formulaire. Une fois l’erreur affichée, revérifiez à chaque frappe pour qu’elle disparaisse dès que la valeur est corrigée.",
      "Les deux versions utilisent le même champ, le même style de message et le même texte ; seul le moment de la validation change."
    ]
  }
};
