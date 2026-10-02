<script lang="ts">
  import type { BadgeProps } from "./types/badge.types";
  import Icon from "../components/Icon.svelte";

  let { tone = "neutral", removable = false, children }: BadgeProps = $props();
</script>

<span class="badge badge--{tone}">
  {@render children()}
  {#if removable}<Icon name="x" size={12} />{/if}
</span>

<style lang="scss">
  .badge {
    --tone: var(--mock-muted);
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: var(--mock-radius-pill);
    background: color-mix(in srgb, var(--tone) 12%, var(--mock-surface));
    color: color-mix(in srgb, var(--tone) 60%, var(--mock-tone-ink));
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;

    &--info {
      --tone: var(--mock-info);
    }
    &--success {
      --tone: var(--mock-success);
    }
    &--warning {
      --tone: var(--mock-warning);
    }
    &--danger {
      --tone: var(--mock-danger);
    }
  }
</style>
