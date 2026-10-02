<script lang="ts">
  import type { RetroWindowProps } from "./types/retro-window.types";

  let { title, menu = [], status = [], width = 560, toolbar, children }: RetroWindowProps = $props();
</script>

<div class="window" style:width="{width}px">
  <div class="window__title">
    <span>{title}</span>
    <span class="window__controls" aria-hidden="true"><i>_</i><i>□</i><i>×</i></span>
  </div>
  {#if menu.length > 0}
    <div class="window__menu">
      {#each menu as item (item)}
        <span><u>{item.charAt(0)}</u>{item.slice(1)}</span>
      {/each}
    </div>
  {/if}
  {#if toolbar !== undefined}
    <div class="window__toolbar">{@render toolbar()}</div>
  {/if}
  <div class="window__body">{@render children()}</div>
  {#if status.length > 0}
    <div class="window__status">
      {#each status as cell (cell)}
        <span>{cell}</span>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @use "$styles/mixins" as *;

  .window {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    padding: 3px;
    @include retro-raised;
    color: var(--mock-retro-dark);
    font: 11px/1.4 var(--mock-retro-font);
    box-shadow:
      inset -1px -1px var(--mock-retro-dark),
      inset 1px 1px var(--mock-retro-soft),
      inset -2px -2px var(--mock-retro-shade),
      inset 2px 2px var(--mock-retro-light),
      var(--mock-shadow-md);

    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 3px 3px 3px 6px;
      background: var(--mock-retro-title);
      color: var(--mock-retro-title-text);
      font-weight: 700;
    }

    &__controls {
      display: flex;
      gap: 2px;

      i {
        display: grid;
        place-items: center;
        width: 16px;
        height: 14px;
        @include retro-raised;
        color: var(--mock-retro-dark);
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 1;
      }
    }

    &__menu {
      display: flex;
      gap: 14px;
      padding: 3px 6px;
    }

    &__toolbar {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 6px;
      border-top: 1px solid var(--mock-retro-shade);
      border-bottom: 1px solid var(--mock-retro-light);
    }

    &__body {
      padding: 6px;
    }

    &__status {
      display: flex;
      gap: 2px;

      span {
        flex: 1;
        padding: 2px 6px;
        box-shadow:
          inset 1px 1px var(--mock-retro-shade),
          inset -1px -1px var(--mock-retro-light);

        &:last-child {
          flex: 0 0 120px;
        }
      }
    }
  }
</style>
