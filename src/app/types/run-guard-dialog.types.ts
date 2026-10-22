import type { RunGuard } from "../run-guard.svelte";

/**
 * @export
 * @desc Props of the RunGuardDialog component.
 *
 * @property guard - Guard whose confirmation the dialog shows.
 */
export interface RunGuardDialogProps {
  /** Guard whose confirmation the dialog shows. */
  guard: RunGuard;
}
