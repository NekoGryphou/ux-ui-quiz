<script lang="ts">
  import type { RetroButtonProps } from "./types/retro-button.types";

  let { primary = false, children }: RetroButtonProps = $props();
</script>

<span class="button" class:button--primary={primary}>{@render children()}</span>

<style lang="scss">
  @use "$styles/mixins" as *;

  .button {
    display: inline-grid;
    place-items: center;
    min-width: 75px;
    padding: 4px 10px;
    @include retro-raised;
    color: var(--mock-retro-dark);
    font: 11px/1.2 var(--mock-retro-font);
    white-space: nowrap;

    &--primary {
      outline: 1px solid var(--mock-retro-dark);
    }
  }
</style>
