<script lang="ts">
  import Icon from "../components/Icon.svelte";
  import type { KeyboardSandboxProps, KeyStop } from "./types/keyboard.types";
  import { nextStop, provideKeyboardContext } from "./utils/keyboard.utils";

  let { stops, children }: KeyboardSandboxProps = $props();

  const uid: string = $props.id();
  let index: number = $state(-1);
  let active: boolean = $state(false);

  const current: KeyStop | undefined = $derived(index >= 0 ? stops[index] : undefined);

  provideKeyboardContext({
    get focusedId(): string | null {
      return current?.id ?? null;
    }
  });

  const onkeydown = (event: KeyboardEvent & { currentTarget: HTMLDivElement }): void => {
    if (event.key === "Escape") {
      index = -1;
      event.currentTarget.blur();
      return;
    }
    if (event.key !== "Tab") return;
    const next: number | null = nextStop(index, stops.length, event.shiftKey);
    if (next === null) {
      index = -1;
      return;
    }
    event.preventDefault();
    index = next;
  };

  const onfocus = (): void => {
    active = true;
  };

  const onblur = (): void => {
    active = false;
    index = -1;
  };
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
<div
  class="sandbox"
  class:sandbox--active={active}
  role="application"
  tabindex="0"
  aria-label="Interactive preview. Press Tab to move keyboard focus through the page, Escape to leave."
  aria-describedby="{uid}-status"
  {onkeydown}
  {onfocus}
  {onblur}
>
  <div class="sandbox__hint" aria-hidden="true">
    <Icon name="arrow-right" size={14} />
    {#if active}
      <span><kbd>Tab</kbd> next · <kbd>Shift</kbd>+<kbd>Tab</kbd> back · <kbd>Esc</kbd> leave</span>
      <span class="sandbox__count"
        >{current === undefined ? "Ready" : `Stop ${String(index + 1)} of ${String(stops.length)}`}</span
      >
    {:else}
      <span>Click here, then press <kbd>Tab</kbd> to try it with your keyboard</span>
    {/if}
  </div>
  {@render children()}
  <p id="{uid}-status" class="sandbox__status" aria-live="polite">
    {current === undefined ? "" : `Focus: ${current.label}, stop ${String(index + 1)} of ${String(stops.length)}`}
  </p>
</div>

<style lang="scss">
  .sandbox {
    position: relative;
    border-radius: 16px;
    outline: none;
    cursor: pointer;

    &__hint {
      display: flex;
      justify-content: center;
      width: max-content;
      margin: -12px auto 22px;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      border-radius: 999px;
      background: var(--pill-bg);
      color: var(--pill-text);
      font-size: 12px;
      white-space: nowrap;

      kbd {
        padding: 0 5px;
        border: 1px solid var(--pill-line);
        border-radius: 4px;
        font: inherit;
        font-weight: 600;
      }
    }

    &__count {
      padding-left: 8px;
      border-left: 1px solid var(--pill-line);
      color: var(--pill-accent);
      font-weight: 600;
    }

    &--active {
      box-shadow: 0 0 0 3px #f59e0b;
      cursor: default;
    }

    &__status {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
    }
  }
</style>
