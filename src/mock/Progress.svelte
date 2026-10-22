<script lang="ts">
    import type {ProgressProps} from "./types/progress.types";

    let { value, label, showValue = false }: ProgressProps = $props();
  const clamped: number = $derived(Math.max(0, Math.min(100, value)));
</script>

<div class="progress">
  {#if label !== undefined || showValue}
    <div class="progress__meta">
      <span>{label ?? ""}</span>
      {#if showValue}<strong>{clamped}%</strong>{/if}
    </div>
  {/if}
  <div class="progress__track"><span style="width: {clamped}%"></span></div>
</div>

<style lang="scss">
  .progress {
    display: grid;
    gap: 6px;

    &__meta {
      display: flex;
      justify-content: space-between;
      color: var(--mock-muted);
      font-size: 12px;

      strong {
        color: var(--mock-text);
        font-weight: 600;
      }
    }

    &__track {
      height: 6px;
      overflow: hidden;
      border-radius: 999px;
      background: var(--mock-track);

      span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: var(--mock-primary);
      }
    }
  }
</style>
