import { SETTLE_MS } from "./const/settle.const";

export class Settle {
  active: boolean = $state(false);
  #timer: ReturnType<typeof setTimeout> | undefined;

  trigger(): void {
    this.active = true;
    clearTimeout(this.#timer);
    this.#timer = setTimeout(() => {
      this.active = false;
    }, SETTLE_MS);
  }

  guard = (event: MouseEvent): void => {
    if (!this.active) return;
    if (event.type === "click" && event.detail === 0) return;
    event.preventDefault();
    event.stopPropagation();
  };
}
