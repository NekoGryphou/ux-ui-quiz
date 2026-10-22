<script lang="ts">
    import type {MetricProps} from "./types/metric.types";

    let { label, value, delta, trend = "flat", featured = false }: MetricProps = $props();
</script>

<div class="metric" class:metric--featured={featured}>
  <span class="metric__label">{label}</span>
  <strong class="metric__value">{value}</strong>
  {#if delta}<span class="metric__delta metric__delta--{trend}">{delta}</span>{/if}
</div>

<style lang="scss">
  .metric {
    display: grid;
    gap: 4px;
    padding: 14px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);

    &__label {
      color: var(--mock-muted);
      font-size: 12px;
    }

    &__value {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }

    &__delta {
      font-size: 12px;
      font-weight: 500;
      color: var(--mock-muted);

      &--up {
        color: var(--mock-success);
      }
      &--down {
        color: var(--mock-danger);
      }
    }

    &--featured {
      padding: 22px;
      border-color: transparent;
      background: linear-gradient(135deg, var(--mock-primary), var(--mock-accent-2));
      color: var(--mock-on-accent);
    }

    &--featured &__label,
    &--featured &__delta {
      color: color-mix(in srgb, var(--mock-on-accent) 80%, transparent);
    }

    &--featured &__value {
      font-size: 28px;
    }
  }
</style>
