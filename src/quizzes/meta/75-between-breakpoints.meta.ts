import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_ARMCHAIR, PHOTO_LAMP, PHOTO_LIVING_ROOM, PHOTO_SIDE_TABLE } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "between-breakpoints",
  kind: "hotspot",
  title: "820 pixels of chaos",
  principle: "Check layouts between breakpoints, not only at them",
  scenario: "A customer opens a furniture shop on their tablet, held upright, to browse new arrivals.",
  prompt: "Click the part of the page the designers didn’t check at this width.",
  correct: ["nav"],
  regions: [
    { id: "logo", text: "Logo" },
    { id: "nav", text: "Main navigation" },
    { id: "hero", text: "Hero banner" },
    { id: "cards", text: "Product cards" },
    { id: "footer-link", text: "See all link" }
  ],
  explanation: [
    "The desktop navigation is still shown at 820px, but there isn’t room for it: the links wrap onto a second line that spills over the hero, and the cart icon ends up stranded at the end of that second line.",
    "Layouts are usually designed at a few breakpoints (375, 1024, 1440…) but used at every width in between. Switch the navigation to its compact form before it runs out of room, and test by resizing continuously, not only at the named sizes.",
    "The hero, cards and “See all” link adapt correctly to this width.",
    photoCredits([PHOTO_LIVING_ROOM, PHOTO_ARMCHAIR, PHOTO_LAMP, PHOTO_SIDE_TABLE])
  ]
};
