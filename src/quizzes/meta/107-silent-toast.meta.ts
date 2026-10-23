import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "silent-toast",
  kind: "single",
  title: { en: "A confirmation nobody hears", fr: "Une confirmation que personne n’entend" },
  principle: {
    en: "Announce status messages to screen readers without moving focus",
    fr: "Annoncer les messages d’état aux lecteurs d’écran sans déplacer le focus"
  },
  scenario: {
    en: "A blind customer updates their delivery address with a screen reader, presses Save and waits to know it worked.",
    fr: "Une personne aveugle modifie son adresse de livraison avec un lecteur d’écran, appuie sur Enregistrer et attend de savoir si cela a fonctionné."
  },
  prompt: {
    en: "What is the main issue with this confirmation?",
    fr: "Quel est le principal problème de cette confirmation ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The toast is added as a plain div, so screen readers never announce the message.",
        fr: "Le toast est ajouté comme une simple div, si bien que les lecteurs d’écran n’annoncent jamais le message."
      }
    },
    {
      id: "b",
      text: {
        en: "The toast is removed after five seconds, so slow readers may lose the message too soon.",
        fr: "Le toast disparaît au bout de cinq secondes, si bien qu’une lecture lente peut manquer le message."
      }
    },
    {
      id: "c",
      text: {
        en: "The toast is appended at the end of the body, so it renders far from the Save button.",
        fr: "Le toast est ajouté à la fin du body, si bien qu’il s’affiche loin du bouton Enregistrer."
      }
    },
    {
      id: "d",
      text: {
        en: "The toast is styled in dark grey, so it doesn’t look like a success confirmation.",
        fr: "Le toast est gris foncé, si bien qu’il ne ressemble pas à une confirmation de réussite."
      }
    }
  ],
  explanation: {
    en: [
      "Sighted users see “Address saved” appear, but the new div has no role or live region, and focus stays on the Save button: the screen reader says nothing, so the customer can’t tell whether the save worked (WCAG 4.1.3 Status Messages).",
      'Put an empty container with role="status" (or aria-live="polite") in the page from the start, then write the message into it: screen readers announce it without moving focus. A live region inserted together with its text is often missed.',
      "Five seconds is enough for a two-word message with no action, a corner toast is a common pattern, and the text itself says the save succeeded, so neither duration, position nor colour blocks anyone here."
    ],
    fr: [
      "Les personnes voyantes voient apparaître « Adresse enregistrée », mais la nouvelle div n’a ni rôle ni région live, et le focus reste sur le bouton Enregistrer : le lecteur d’écran ne dit rien, et la personne ne peut pas savoir si l’enregistrement a réussi (WCAG 4.1.3 Messages d’état).",
      'Placez dès le départ dans la page un conteneur vide avec role="status" (ou aria-live="polite"), puis écrivez-y le message : les lecteurs d’écran l’annoncent sans déplacer le focus. Une région live insérée en même temps que son texte est souvent ignorée.',
      "Cinq secondes suffisent pour un message de deux mots sans action, un toast dans un coin est un schéma courant et le texte indique bien que l’enregistrement a réussi : ni la durée, ni la position, ni la couleur ne bloquent personne ici."
    ]
  },
  links: [wcag("4.1.3", { en: "Status Messages", fr: "Messages d’état" }, "status-messages")]
};
