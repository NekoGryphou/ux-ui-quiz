<script lang="ts">
  import type { HotspotLayer } from "../components/hotspot-layer.svelte";
  import type { HotspotContext } from "../components/types/hotspot-context.types";
  import { readHotspotContext, readHotspotLayer } from "../components/utils/hotspot.utils";
  import type { HotspotProps } from "./types/hotspot.types";

  let { id, inline = false, children }: HotspotProps = $props();

  const context: HotspotContext | undefined = readHotspotContext();
  const layer: HotspotLayer | undefined = readHotspotLayer();
  const selected: boolean = $derived(context?.isSelected(id) ?? false);

  let element: HTMLElement | undefined = $state();

  $effect(() => {
    if (element === undefined || layer === undefined) return;
    layer.register(id, element);
    return (): void => {
      layer.unregister(id);
    };
  });

  const select = (): void => {
    context?.toggle(id);
  };

  const enter = (): void => {
    if (context?.interactive !== true) return;
    layer?.hover(id);
  };

  const leave = (): void => {
    layer?.hover(null);
  };

  const focus = (event: FocusEvent & { currentTarget: HTMLButtonElement }): void => {
    layer?.focus(event.currentTarget.matches(":focus-visible") ? id : null);
  };

  const blur = (): void => {
    layer?.focus(null);
  };
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
      aria-label="Area: {context.labelOf(id)}"
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

      &:focus-visible {
        outline: none;
      }

      &:disabled {
        cursor: default;
      }
    }
  }
</style>
