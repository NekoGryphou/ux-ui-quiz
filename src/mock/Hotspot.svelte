<script lang="ts">
  import { t } from "../shared/locale.svelte";
  import type { HotspotLayer } from "../stage/hotspot-layer.svelte";
  import type { HotspotContext } from "../stage/types/hotspot-context.types";
  import { readHotspotContext, readHotspotLayer } from "../stage/utils/hotspot.utils";
  import type { HotspotProps } from "./types/hotspot.types";

  let { id, inline = false, children }: HotspotProps = $props();

  const context: HotspotContext | undefined = readHotspotContext();
  const layer: HotspotLayer | undefined = readHotspotLayer();

  let element: HTMLElement | undefined = $state();

  const selected: boolean = $derived(context?.isSelected(id) ?? false);

  /**
   * @private
   * @desc Toggles this region as a selected answer.
   */
  const select = (): void => {
    context?.toggle(id);
  };

  /**
   * @private
   * @desc Shows the hover ring for this region while answering.
   */
  const enter = (): void => {
    if (context?.interactive !== true) return;
    layer?.hover(id);
  };

  /**
   * @private
   * @desc Clears the hover ring.
   */
  const leave = (): void => {
    layer?.hover(null);
  };

  /**
   * @private
   * @desc Shows the focus ring when focus came from the keyboard.
   *
   * @param event - Focus event on the target button.
   */
  const focus = (event: FocusEvent & { currentTarget: HTMLButtonElement }): void => {
    layer?.focus(event.currentTarget.matches(":focus-visible") ? id : null);
  };

  /**
   * @private
   * @desc Clears the focus ring.
   */
  const blur = (): void => {
    layer?.focus(null);
  };

  $effect(() => {
    if (element === undefined || layer === undefined) return;
    layer.register(id, element);
    return (): void => {
      layer.unregister(id);
    };
  });
</script>

<svelte:element
  this={inline ? "span" : "div"}
  bind:this={element}
  class="hotspot"
  class:hotspot--inline={inline}
  data-region={id}
>
  {@render children()}
  {#if context !== undefined}
    <button
      class="hotspot__target"
      type="button"
      aria-label={t(`Area: ${context.labelOf(id)}`, `Zone : ${context.labelOf(id)}`)}
      aria-pressed={selected}
      disabled={!context.interactive}
      onclick={select}
      onpointerenter={enter}
      onpointerleave={leave}
      onfocus={focus}
      onblur={blur}
    ></button>
  {/if}
</svelte:element>

<style lang="scss">
  .hotspot {
    position: relative;
    isolation: isolate;
    display: block;

    &--inline {
      display: inline-block;
    }

    &__target {
      position: absolute;
      inset: 0;
      z-index: 2;
      padding: 0;
      border: 0;
      background: transparent;
      cursor: pointer;

      &:disabled {
        cursor: default;
      }
    }
  }
</style>
