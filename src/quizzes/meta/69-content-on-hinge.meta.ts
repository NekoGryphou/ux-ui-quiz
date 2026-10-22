import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "content-on-hinge",
  kind: "hotspot",
  title: "Hang up on the hinge",
  principle: "Keep key content and controls off the fold",
  scenario: "A designer joins a video call on their unfolded phone and needs to mute their microphone quickly.",
  prompt: "Click the part of the screen placed in the wrong spot for this device.",
  correct: ["controls"],
  regions: [
    { id: "bar", text: "Call info bar" },
    { id: "remote", text: "Remote video" },
    { id: "self", text: "Self view" },
    { id: "controls", text: "Call buttons" },
    { id: "chat", text: "Chat panel" }
  ],
  explanation: [
    "The call buttons are centred on the screen, which on an unfolded phone means right on the crease: mute and hang up sit in a dip that distorts touch and reflections, and on dual-screen devices they would fall into the physical gap between the two panels.",
    "Treat the fold as a boundary: detect it (CSS viewport segments, the window segments API or platform fold events) and lay out content on either side, for example video on one panel and controls with chat on the other.",
    "The video, self view and chat each sit inside one half of the screen, which works well on a foldable."
  ]
};
