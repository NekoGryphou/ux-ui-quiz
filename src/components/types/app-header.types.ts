import type { RunTarget } from "../../app/types/router.types";
import type { Run } from "../../engine/run.svelte";

export interface AppHeaderProps {
  run: Run | null;
  target: RunTarget;
}
