<script lang="ts">
  import Icon from "./Icon.svelte";
  import type { ButtonProps } from "./types/button.types";

  let {
    variant = "secondary",
    size = "md",
    href,
    iconStart,
    iconEnd,
    disabled = false,
    onclick,
    children,
    element = $bindable()
  }: ButtonProps = $props();
</script>

{#if href !== undefined}
  <a class="button button--{variant} button--{size}" {href} bind:this={element}>
    {#if iconStart !== undefined}<Icon name={iconStart} size={16} />{/if}
    {@render children()}
    {#if iconEnd !== undefined}<Icon name={iconEnd} size={16} />{/if}
  </a>
{:else}
  <button class="button button--{variant} button--{size}" type="button" {disabled} {onclick} bind:this={element}>
    {#if iconStart !== undefined}<Icon name={iconStart} size={16} />{/if}
    {@render children()}
    {#if iconEnd !== undefined}<Icon name={iconEnd} size={16} />{/if}
  </button>
{/if}

<style lang="scss">
  @use "$styles/mixins" as *;

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    min-height: 40px;
    padding: var(--space-2) var(--space-4);
    border: 1px solid transparent;
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    @include touch-target;
    transition:
      background-color var(--duration) var(--ease),
      border-color var(--duration) var(--ease),
      transform var(--duration) var(--ease);

    &:active:not(:disabled) {
      transform: translateY(1px);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.45;
    }

    &--lg {
      min-height: 48px;
      padding-inline: var(--space-5);
      font-size: var(--text-md);
    }

    &--primary {
      background: var(--primary);
      color: var(--on-primary);

      &:hover:not(:disabled) {
        background: var(--primary-hover);
      }
    }

    &--accent {
      background: var(--brand-yellow);
      color: var(--on-accent);

      &:hover:not(:disabled) {
        background: var(--brand-yellow-hover);
      }
    }

    &--secondary {
      border-color: var(--border);
      background: var(--surface);
      color: var(--text);
      box-shadow: var(--shadow-sm);

      &:hover:not(:disabled) {
        border-color: var(--border-strong);
      }
    }

    &--danger {
      background: var(--danger);
      color: var(--on-danger);

      &:hover:not(:disabled) {
        background: color-mix(in srgb, var(--danger) 88%, #000);
      }
    }

    &--ghost {
      background: transparent;
      color: var(--text-muted);

      &:hover:not(:disabled) {
        background: var(--surface-2);
        color: var(--text);
      }
    }
  }
</style>
