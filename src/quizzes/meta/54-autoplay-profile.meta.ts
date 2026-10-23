import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "autoplay-profile",
  kind: "hotspot",
  motion: true,
  title: { en: "Surprise soundtrack", fr: "Bande-son surprise" },
  principle: {
    en: "Never start sound the user didn’t ask for",
    fr: "Ne jamais lancer un son que personne n’a demandé"
  },
  scenario: {
    en: "A friend opens this profile from the office, in an open-plan room, to check the date of Saturday’s party.",
    fr: "Depuis son bureau en open space, un proche ouvre ce profil pour vérifier la date de la soirée de samedi."
  },
  prompt: {
    en: "Click the part of the page that will cause the most trouble.",
    fr: "Cliquez sur la partie de la page qui posera le plus de problèmes."
  },
  correct: ["player"],
  regions: [
    { id: "name", text: { en: "Profile name", fr: "Nom du profil" } },
    { id: "photo", text: { en: "Profile photo", fr: "Photo de profil" } },
    { id: "player", text: { en: "Music player", fr: "Lecteur de musique" } },
    { id: "about", text: { en: "About me", fr: "À propos de moi" } },
    { id: "friends", text: { en: "Top friends", fr: "Top des amis" } },
    { id: "comments", text: { en: "Comments", fr: "Commentaires" } }
  ],
  explanation: {
    en: [
      "The song starts by itself the moment the page opens, at full volume, with no visible pause or volume control: the whole office hears it, and a screen reader user can no longer hear their reader over the music (WCAG 1.4.2 Audio Control).",
      "Never autoplay sound. Let people press play, and always give a visible pause and volume control near the player.",
      "Glitter, a busy wall and a Top 8 are a matter of taste on a personal page; they don’t take control away from the visitor."
    ],
    fr: [
      "La chanson démarre toute seule dès l’ouverture de la page, à plein volume, sans bouton pause ni réglage du volume visible : tout le bureau l’entend, et une personne qui utilise un lecteur d’écran ne l’entend plus par-dessus la musique (WCAG 1.4.2 Contrôle du son).",
      "Ne lancez jamais de son automatiquement. Laissez les gens appuyer sur lecture, et proposez toujours un bouton pause et un réglage du volume visibles près du lecteur.",
      "Les paillettes, un mur chargé et un Top 8 sont une affaire de goût sur une page perso ; ils n’enlèvent pas le contrôle à la personne qui visite."
    ]
  },
  links: [wcag("1.4.2", { en: "Audio Control", fr: "Contrôle du son" }, "audio-control")]
};
