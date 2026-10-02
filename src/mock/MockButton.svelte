<script lang="ts">
  import type { MockButtonProps } from "./types/mock-button.types";
  import Icon from "../components/Icon.svelte";

  let {
    variant = "secondary",
    size = "md",
    icon,
    disabled = false,
    block = false,
    children
  }: MockButtonProps = $props();
</script>

<span
  class="btn btn--{variant} btn--{size}"
  class:btn--block={block}
  class:btn--disabled={disabled}
  class:btn--icon-only={icon !== undefined && children === undefined}
>
  {#if icon}<Icon name={icon} size={size === "sm" ? 14 : 16} />{/if}
  {#if children}<span>{@render children()}</span>{/if}
</span>

<style lang="scss">
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 34px;
    padding: 0 14px;
    border: var(--mock-border-width) solid transparent;
    border-radius: var(--mock-radius);
    font-weight: var(--mock-button-weight);
    letter-spacing: var(--mock-button-tracking);
    text-transform: var(--mock-button-transform);
    white-space: nowrap;
    user-select: none;

    &--sm {
      height: 28px;
      padding: 0 10px;
      font-size: 12px;
    }

    &--lg {
      height: 42px;
      padding: 0 18px;
      font-size: 14px;
    }

    &--block {
      display: flex;
      width: 100%;
    }

    &--icon-only {
      width: 34px;
      padding: 0;

      &.btn--sm {
        width: 28px;
      }
    }

    &--primary {
      box-shadow: var(--mock-button-shadow);
      background: var(--mock-primary);
      color: var(--mock-primary-text);
    }

    &--secondary {
      border-color: var(--mock-border);
      background: var(--mock-surface);
      color: var(--mock-text);
      box-shadow: var(--mock-shadow-sm);
    }

    &--ghost {
      color: var(--mock-text);
    }

    &--danger {
      background: var(--mock-danger);
      color: var(--mock-on-accent);
    }

    &--success {
      background: var(--mock-success);
      color: var(--mock-on-accent);
    }

    &--link {
      height: auto;
      padding: 0;
      color: var(--mock-primary);
    }

    &--disabled {
      opacity: 0.45;
    }
  }
</style>
