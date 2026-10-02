<script lang="ts">
  import type { KeyboardContext, KeyTargetProps } from "./types/keyboard.types";
  import { readKeyboardContext } from "./utils/keyboard.utils";

  let { id, inline = false, children }: KeyTargetProps = $props();

  const keyboard: KeyboardContext | undefined = readKeyboardContext();
  const focused: boolean = $derived(keyboard?.focusedId === id);
</script>

<svelte:element
  this={inline ? "span" : "div"}
  class="target"
  class:target--inline={inline}
  class:target--focused={focused}
>
  {@render children()}
</svelte:element>

<style lang="scss">
  .target {
    display: block;
    border-radius: 6px;
    transition: outline-color 120ms ease;

    &--inline {
      display: inline-block;
    }

    &--focused {
      outline: 3px solid #f59e0b;
      outline-offset: 3px;
    }
  }
</style>
