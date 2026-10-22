import { session } from "./session";

/**
 * @export
 * @desc Starts runs one at a time, asking to abandon the active run first.
 */
export class RunGuard {
  /**
   * @public
   * @desc Whether the abandon confirmation is shown.
   */
  public confirming: boolean = $state(false);
  /**
   * @private
   * @desc Start action waiting for confirmation.
   */
  private pending: (() => void) | null = null;

  /**
   * @public
   * @desc Runs an action that starts a new run, or asks to abandon the active run first.
   *
   * @param action - Starts the new run.
   */
  public start(action: () => void): void {
    if (session.activeRun === null) {
      action();
      return;
    }
    this.pending = action;
    this.confirming = true;
  }

  /**
   * @public
   * @desc Abandons the active run, then runs the pending start.
   */
  public confirm(): void {
    session.abandonActive();
    this.pending?.();
    this.pending = null;
  }
}
