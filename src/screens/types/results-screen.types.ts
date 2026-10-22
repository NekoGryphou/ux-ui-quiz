import type { RunTarget } from "../../app/types/router.types";
import type { Run } from "../../engine/run.svelte";

/**
 * @export
 * @desc Props of the results screen.
 *
 * @property run - Run being summarized.
 * @property target - Run slot used for links.
 */
export interface ResultsScreenProps {
  /** Run being summarized. */
  run: Run;

  /** Run slot used for links. */
  target: RunTarget;
}
