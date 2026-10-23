import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "install-interstitial",
  kind: "multiple",
  title: { en: "The app wall", fr: "Le mur de l’appli" },
  principle: {
    en: "Don’t block content to push an install",
    fr: "Ne pas bloquer le contenu pour pousser à l’installation"
  },
  scenario: {
    en: "Someone taps a link to a design file a colleague shared and it opens in their phone browser.",
    fr: "Une personne touche le lien d’un fichier de design partagé par son équipe, qui s’ouvre dans le navigateur de son téléphone."
  },
  prompt: { en: "Which issues does this screen have?", fr: "Quels problèmes cet écran présente-t-il ?" },
  correct: ["a", "b", "c"],
  choices: [
    {
      id: "a",
      text: {
        en: "A full-screen app prompt covers the shared file the user actually came to see.",
        fr: "Une invitation plein écran à installer l’appli masque le fichier partagé que l’on venait voir."
      }
    },
    {
      id: "b",
      text: {
        en: "The way to keep using the browser is a tiny, pale link that’s easy to overlook.",
        fr: "Le moyen de rester dans le navigateur est un lien minuscule et pâle, facile à manquer."
      }
    },
    {
      id: "c",
      text: {
        en: "The decline link guilt-trips users by calling the browser a “worse experience”.",
        fr: "Le lien de refus culpabilise en qualifiant le navigateur d’« expérience dégradée »."
      }
    },
    {
      id: "d",
      text: {
        en: "The prompt shows the app’s star rating, which can come across as a sales pitch.",
        fr: "L’invitation affiche la note de l’appli en étoiles, ce qui peut passer pour un argument commercial."
      }
    },
    {
      id: "e",
      text: {
        en: "The “Get the app” button uses the brand color rather than the app store blue.",
        fr: "Le bouton « Télécharger l’appli » utilise la couleur de la marque plutôt que le bleu des stores."
      }
    }
  ],
  explanation: {
    en: [
      "The user came for one file. A full-screen interstitial puts a detour in front of it, and search engines penalise intrusive interstitials on mobile.",
      "The escape route is styled to be missed, and its wording shames the user for declining: a dark pattern known as confirmshaming.",
      "Offer a small, dismissible banner (“Open in app”) and show the file right away. A rating and a brand-colored button are ordinary marketing, not the problem."
    ],
    fr: [
      "La personne venait pour un seul fichier. Un interstitiel plein écran lui impose un détour, et les moteurs de recherche pénalisent les interstitiels intrusifs sur mobile.",
      "L’échappatoire est conçue pour passer inaperçue, et son libellé fait honte de refuser : un dark pattern appelé confirmshaming.",
      "Proposez une petite bannière que l’on peut fermer (« Ouvrir dans l’appli ») et affichez le fichier tout de suite. Une note et un bouton aux couleurs de la marque relèvent du marketing ordinaire, pas du problème."
    ]
  }
};
