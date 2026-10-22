<script lang="ts">
    import type {TabsProps} from "./types/tabs.types";

    let { items, active = 0 }: TabsProps = $props();
</script>

<div class="tabs">
  {#each items as item, i (i)}
    <span class="tabs__item" class:tabs__item--active={i === active}>{item}</span>
  {/each}
</div>

<style lang="scss">
  .tabs {
    display: flex;
    gap: 20px;
    border-bottom: 1px solid var(--mock-border);

    &__item {
      padding: 8px 0;
      margin-bottom: -1px;
      border-bottom: 2px solid transparent;
      color: var(--mock-muted);
      font-weight: 500;

      &--active {
        border-color: var(--mock-primary);
        color: var(--mock-text);
      }
    }
  }
</style>
