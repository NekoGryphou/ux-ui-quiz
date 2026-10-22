import type { Run } from "../../engine/run.svelte";
import type { RunTarget } from "./router.types";

/**
 * @export
 * @desc Props of the AppHeader component.
 *
 * @property run - Run whose progress is shown.
 * @property target - Run the screen belongs to.
 */
export interface AppHeaderProps {
  /** Run whose progress is shown; null hides the stats. */
  run: Run | null;

  /** Run the screen belongs to. */
  target: RunTarget;
}
