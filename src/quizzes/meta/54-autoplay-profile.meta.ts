import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "autoplay-profile",
  kind: "hotspot",
  motion: true,
  title: "Surprise soundtrack",
  principle: "Never start sound the user didn’t ask for",
  scenario: "A friend opens this profile from the office, in an open-plan room, to check the date of Saturday’s party.",
  prompt: "Click the part of the page that will cause the most trouble.",
  correct: ["player"],
  regions: [
    { id: "name", text: "Profile name" },
    { id: "photo", text: "Profile photo" },
    { id: "player", text: "Music player" },
    { id: "about", text: "About me" },
    { id: "friends", text: "Top friends" },
    { id: "comments", text: "Comments" }
  ],
  explanation: [
    "The song starts by itself the moment the page opens, at full volume, with no visible pause or volume control: the whole office hears it, and a screen reader user can no longer hear their reader over the music (WCAG 1.4.2 Audio Control).",
    "Never autoplay sound. Let people press play, and always give a visible pause and volume control near the player.",
    "Glitter, a busy wall and a Top 8 are a matter of taste on a personal page; they don’t take control away from the visitor."
  ],
  links: [wcag("1.4.2", "Audio Control", "audio-control")]
};
