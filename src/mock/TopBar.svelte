<script lang="ts">
  import BrandMark from "./BrandMark.svelte";
  import type { TopBarProps } from "./types/top-bar.types";

  let { brand, children }: TopBarProps = $props();
</script>

<div class="topbar">
  {#if brand}
    <span class="topbar__brand"><BrandMark name={brand} />{brand}</span>
  {/if}
  <div class="topbar__content">
    {#if children}{@render children()}{/if}
  </div>
</div>

<style lang="scss">
  .topbar {
    display: flex;
    align-items: center;
    gap: 20px;
    min-height: 52px;
    padding: 0 18px;
    border-bottom: 1px solid var(--mock-border);
    background: var(--mock-surface);

    &__brand {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
    }

    &__content {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }
  }
</style>
