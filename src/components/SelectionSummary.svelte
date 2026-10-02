<script lang="ts">
  import Icon from "./Icon.svelte";
  import type { SelectionSummaryProps } from "./types/selection-summary.types";

  let { prompt, labels, several }: SelectionSummaryProps = $props();
</script>

<div class="summary">
  <p class="summary__prompt">{prompt}</p>
  <p class="summary__state" aria-live="polite">
    <span class="summary__icon"><Icon name="crosshair" size={16} /></span>
    {#if labels.length === 0}
      {several
        ? "Click every area of the screen that causes a problem."
        : "Click the area of the screen that causes the problem."}
    {:else}
      <span>Selected: <strong>{labels.join(", ")}</strong></span>
    {/if}
  </p>
</div>

<style lang="scss">
  .summary {
    display: grid;
    gap: var(--space-3);

    &__prompt {
      font-size: var(--text-lg);
      font-weight: 600;
      line-height: 1.35;
    }

    &__state {
      display: flex;
      align-items: flex-start;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-4);
      border: var(--card-border) dashed var(--hotspot);
      border-radius: var(--radius-lg);
      background: var(--hotspot-soft);
      color: var(--text);
      font-size: var(--text-sm);
    }

    &__icon {
      display: inline-flex;
      margin-top: 2px;
      color: var(--hotspot);
    }
  }
</style>
