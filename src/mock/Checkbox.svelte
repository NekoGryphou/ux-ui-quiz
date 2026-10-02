<script lang="ts">
  import type { CheckboxProps } from "./types/checkbox.types";
  import Icon from "../components/Icon.svelte";

  let { label, checked = false, radio = false, hint }: CheckboxProps = $props();
</script>

<div class="check">
  <span class="check__box" class:check__box--radio={radio} class:check__box--on={checked}>
    {#if checked && !radio}<Icon name="check" size={12} strokeWidth={3} />{/if}
  </span>
  <span class="check__copy">
    <span>{label}</span>
    {#if hint}<small>{hint}</small>{/if}
  </span>
</div>

<style lang="scss">
  .check {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    &__box {
      display: grid;
      place-items: center;
      width: 16px;
      height: 16px;
      margin-top: 1px;
      border: 1.5px solid var(--mock-control-border);
      border-radius: var(--mock-radius-check);
      background: var(--mock-surface);
      color: var(--mock-on-accent);

      &--radio {
        border-radius: 50%;
      }

      &--on {
        border-color: var(--mock-primary);
        background: var(--mock-primary);
      }

      &--radio.check__box--on {
        background: var(--mock-surface);
        box-shadow:
          inset 0 0 0 3px var(--mock-surface),
          inset 0 0 0 8px var(--mock-primary);
      }
    }

    &__copy {
      display: grid;

      small {
        font-size: 12px;
        color: var(--mock-muted);
      }
    }
  }
</style>
