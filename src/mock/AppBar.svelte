<script lang="ts">
  import type { AppBarProps } from "./types/app-bar.types";
  import Icon from "../components/Icon.svelte";

  let { title, back = false, large = false, actions }: AppBarProps = $props();
</script>

<div class="appbar" class:appbar--large={large}>
  {#if !large || back || actions}
    <div class="appbar__row">
      <span class="appbar__side">
        {#if back}<Icon name="chevron-left" size={22} />{/if}
      </span>
      {#if !large}<strong class="appbar__title">{title}</strong>{/if}
      <span class="appbar__side appbar__side--end">
        {#if actions}{@render actions()}{/if}
      </span>
    </div>
  {/if}
  {#if large}<strong class="appbar__large">{title}</strong>{/if}
</div>

<style lang="scss">
  .appbar {
    padding: 4px 12px 8px;
    border-bottom: 1px solid var(--mock-border);
    background: var(--mock-surface);

    &--large {
      border-bottom: 0;
      background: transparent;
    }

    &__row {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      min-height: 36px;
    }

    &__side {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--mock-primary);

      &--end {
        justify-content: flex-end;
      }
    }

    &__title {
      font-size: 15px;
      font-weight: 600;
    }

    &__large {
      display: block;
      padding: 2px 4px 0;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
  }
</style>
