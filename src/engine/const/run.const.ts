import type { RunData } from "../types/run.types";

/**
 * @export
 * @desc Placeholder run used before a real run is loaded.
 */
export const EMPTY_RUN: RunData = { id: "", kind: "full", seed: 0, answers: {}, order: [] };
