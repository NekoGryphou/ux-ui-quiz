<script lang="ts">
  import Icon from "./Icon.svelte";
  import type { IconButtonProps } from "./types/icon-button.types";

  let { icon, text, label, variant = "outline", onclick }: IconButtonProps = $props();
</script>

<button class="icon-button icon-button--{variant}" type="button" aria-label={label} title={label} {onclick}>
  {#if text !== undefined}
    <span class="icon-button__text">{text}</span>
  {:else if icon !== undefined}
    <Icon name={icon} size={18} />
  {/if}
</button>

<style lang="scss">
  @use "$styles/mixins" as *;

  .icon-button {
    display: grid;
    flex: none;
    place-items: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-full);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    transition:
      color var(--duration) var(--ease),
      border-color var(--duration) var(--ease),
      background-color var(--duration) var(--ease);
    @include touch-target;

    &:hover {
      color: var(--text);
    }

    &--outline {
      border-color: var(--border);
      background: var(--surface);

      &:hover {
        border-color: var(--border-strong);
      }
    }

    &--ghost:hover {
      background: var(--surface-2);
    }

    &__text {
      font-size: var(--text-xs);
      font-weight: 700;
      letter-spacing: 0.04em;
    }
  }
</style>
