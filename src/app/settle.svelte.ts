import { SETTLE_MS } from "./const/settle.const";

/**
 * @export
 * @desc Brief click guard that stops a double click from hitting freshly shown controls.
 */
export class Settle {
  /**
   * @public
   * @desc Whether clicks are currently swallowed.
   */
  public active: boolean = $state(false);
  /**
   * @private
   * @desc Pending timer that ends the guard.
   */
  private timer: ReturnType<typeof setTimeout> | undefined;

  /**
   * @public
   * @desc Capture handler that blocks mouse clicks while active.
   * Keyboard clicks are let through.
   *
   * @param event - Mouse event to filter.
   */
  public readonly guard = (event: MouseEvent): void => {
    if (!this.active) return;
    if (event.type === "click" && event.detail === 0) return;
    event.preventDefault();
    event.stopPropagation();
  };

  /**
   * @public
   * @desc Starts or restarts the guard.
   */
  public trigger(): void {
    this.active = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.active = false;
    }, SETTLE_MS);
  }

  /**
   * @public
   * @desc Clears the pending timer.
   */
  public dispose(): void {
    clearTimeout(this.timer);
  }
}
