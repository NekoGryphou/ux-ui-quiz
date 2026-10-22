import type { QuizVisual } from "../../engine/types/quiz.types";

/**
 * @export
 * @desc Loading state of a question preview.
 */
export type VisualState = { status: "loading" } | { status: "ready"; visual: QuizVisual } | { status: "failed" };
