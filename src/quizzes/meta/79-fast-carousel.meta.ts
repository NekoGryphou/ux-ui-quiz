import { PHOTO_CINEMA_SCREEN, PHOTO_CINEMA_SEATS, PHOTO_POPCORN } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "fast-carousel",
  kind: "single",
  motion: true,
  title: { en: "Gone before you finish reading", fr: "Disparu avant la fin de la lecture" },
  principle: {
    en: "Let people control carousels, and give slides time to be read",
    fr: "Laisser le contrôle des carrousels et le temps de lire chaque diapositive"
  },
  scenario: {
    en: "A visitor on a cinema chain’s homepage tries to read the student offer shown in the hero. Watch the hero.",
    fr: "Sur la page d’accueil d’une chaîne de cinémas, une personne essaie de lire l’offre étudiante affichée dans la bannière. Observez la bannière."
  },
  prompt: {
    en: "What is the main issue with this hero?",
    fr: "Quel est le principal problème de cette bannière ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Slides change every two seconds with no pause, so offers vanish before they can be read.",
        fr: "Les diapositives changent toutes les deux secondes sans pause : les offres disparaissent avant d’être lues."
      }
    },
    {
      id: "b",
      text: {
        en: "Each slide uses a full-width photo, where a plain color would load faster on mobile data.",
        fr: "Chaque diapositive utilise une photo pleine largeur, alors qu’une couleur unie chargerait plus vite en 4G."
      }
    },
    {
      id: "c",
      text: {
        en: "The hero shows three offers, where showing only the most popular one would be clearer.",
        fr: "La bannière présente trois offres, alors que n’afficher que la plus populaire serait plus clair."
      }
    },
    {
      id: "d",
      text: {
        en: "The slide text is left-aligned, where centered text would balance the photos better.",
        fr: "Le texte des diapositives est aligné à gauche, alors qu’un texte centré équilibrerait mieux les photos."
      }
    }
  ],
  explanation: {
    en: [
      "Each slide stays about two seconds: barely enough to read a headline, never the conditions. The only controls are three tiny dots, and nothing pauses on hover or focus, so slow readers, screen magnifier users and anyone distracted miss the offer.",
      "If you use a carousel, keep slides up at least 5–7 seconds, pause on hover and focus, and offer visible previous, next and pause controls (WCAG 2.2.2 Pause, Stop, Hide). Often, a static hero with the single most important offer works better.",
      "Photo backgrounds with a dark scrim, several offers and left-aligned text are all normal hero choices.",
      photoCredits([PHOTO_CINEMA_SEATS, PHOTO_CINEMA_SCREEN, PHOTO_POPCORN], "en")
    ],
    fr: [
      "Chaque diapositive reste environ deux secondes : à peine le temps de lire un titre, jamais les conditions. Les seuls contrôles sont trois points minuscules, et rien ne se met en pause au survol ou au focus : les personnes qui lisent lentement, qui utilisent une loupe d’écran ou qui sont distraites ratent l’offre.",
      "Si vous utilisez un carrousel, affichez chaque diapositive au moins 5 à 7 secondes, mettez-le en pause au survol et au focus, et proposez des contrôles visibles précédent, suivant et pause (WCAG 2.2.2 Mettre en pause, arrêter, masquer). Souvent, une bannière fixe avec l’offre la plus importante fonctionne mieux.",
      "Des photos de fond avec un voile sombre, plusieurs offres et un texte aligné à gauche sont des choix de bannière tout à fait normaux.",
      photoCredits([PHOTO_CINEMA_SEATS, PHOTO_CINEMA_SCREEN, PHOTO_POPCORN], "fr")
    ]
  },
  links: [wcag("2.2.2", { en: "Pause, Stop, Hide", fr: "Mettre en pause, arrêter, masquer" }, "pause-stop-hide")]
};
