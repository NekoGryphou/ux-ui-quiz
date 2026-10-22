import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "car-dashboard-targets",
  kind: "hotspot",
  title: "Tap precisely, at 110 km/h",
  principle: "Design in-car screens for glances and big targets",
  scenario: "A driver on the motorway wants to turn down the music and warm up the cabin a little.",
  prompt: "Click every control that is unsafe to use while driving.",
  correct: ["media", "climate"],
  regions: [
    { id: "map", text: "Navigation map" },
    { id: "media", text: "Media controls" },
    { id: "climate", text: "Climate controls" },
    { id: "clock", text: "Clock and outside temperature" },
    { id: "drive", text: "Speed display" }
  ],
  explanation: [
    "Volume and temperature are frequent, safety-relevant adjustments, yet they are tiny touch targets packed close together, with no physical feedback: the driver has to look away from the road for several seconds to hit the right one.",
    "In cars, keep frequent controls large, spaced and in fixed places (or physical knobs), favour glanceable status over dense UI, and limit interactions while moving.",
    "The map, clock and speed display are glanceable information, not controls that need precise touches."
  ]
};
