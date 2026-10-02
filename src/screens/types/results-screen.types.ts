import type { RunTarget } from "../../app/types/router.types";
import type { Run } from "../../engine/run.svelte";

export interface ResultsScreenProps {
  run: Run;
  target: RunTarget;
}
