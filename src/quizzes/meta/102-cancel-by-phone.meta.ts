import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "cancel-by-phone",
  kind: "single",
  title: { en: "Join online, leave by phone", fr: "Inscription en ligne, résiliation par téléphone" },
  principle: { en: "Make leaving as easy as joining", fr: "Rendre le départ aussi simple que l’inscription" },
  scenario: {
    en: "A member who signed up to a gym online in two minutes wants to cancel their membership.",
    fr: "Une personne inscrite en ligne à une salle de sport en deux minutes veut résilier son abonnement."
  },
  prompt: { en: "What is the main issue with this page?", fr: "Quel est le principal problème de cette page ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Cancelling needs a weekday phone call, while joining took two minutes online.",
        fr: "Résilier exige un appel en semaine, alors que l’inscription a pris deux minutes en ligne."
      }
    },
    {
      id: "b",
      text: {
        en: "The page lists the plan details, where a short summary would fit on one screen.",
        fr: "La page détaille la formule, là où un court résumé tiendrait sur un seul écran."
      }
    },
    {
      id: "c",
      text: {
        en: "The pause option comes first, where cancel alone would make the page simpler.",
        fr: "L’option de pause vient en premier, là où la seule résiliation simplifierait la page."
      }
    },
    {
      id: "d",
      text: {
        en: "The phone number is in bold, where a normal weight would look more professional.",
        fr: "Le numéro de téléphone est en gras, là où une graisse normale ferait plus professionnel."
      }
    }
  ],
  explanation: {
    en: [
      "Joining was an online form; leaving means calling during office hours and waiting on hold. This “roach motel” pattern keeps people paying simply because cancelling is a chore.",
      "Offer cancellation in the same channel and with the same effort as sign-up: a clear “Cancel membership” button, one confirmation and an email receipt. Several countries now require exactly this by law.",
      "Showing plan details, offering a pause and highlighting a phone number are all fine on their own."
    ],
    fr: [
      "L’inscription tenait en un formulaire en ligne ; partir impose d’appeler aux heures de bureau et de patienter en ligne. Ce piège à cafards (« roach motel ») fait payer les gens simplement parce que résilier est une corvée.",
      "Proposez la résiliation par le même canal et avec le même effort que l’inscription : un bouton « Résilier l’abonnement » bien visible, une seule confirmation et un reçu par e-mail. Plusieurs pays l’imposent désormais par la loi, dont la France avec la résiliation en trois clics.",
      "Afficher le détail de la formule, proposer une pause et mettre en valeur un numéro de téléphone ne posent aucun problème en soi."
    ]
  }
};
