<script lang="ts">
  import { HotspotLayer } from "./hotspot-layer.svelte";
  import HotspotRing from "./HotspotRing.svelte";
  import type { HotspotContext } from "./types/hotspot-context.types";
  import type { RingItem } from "./types/hotspot-ring.types";
  import type { MockFrameProps } from "./types/mock-frame.types";
  import { provideHotspotLayer, readHotspotContext } from "./utils/hotspot.utils";
  import { measureRings, ringState } from "./utils/hotspot-ring.utils";

  let { visual: Visual, variant }: MockFrameProps = $props();

  const layer: HotspotLayer = new HotspotLayer();
  const hotspot: HotspotContext | undefined = readHotspotContext();

  let frame: HTMLDivElement | undefined = $state();
  let rings: RingItem[] = $state([]);

  const targets: [string, HTMLElement][] = $derived([...layer.elements]);

  provideHotspotLayer(layer);

  $effect(() => {
    const root: HTMLDivElement | undefined = frame;
    const list: [string, HTMLElement][] = targets;
    if (root === undefined || list.length === 0) return;
    let disposed: boolean = false;
    /**
     * @private
     * @desc Re-measures the rings unless the effect was disposed.
     */
    const update = (): void => {
      if (!disposed) rings = measureRings(root, list);
    };
    const observer: ResizeObserver = new ResizeObserver(update);
    observer.observe(root);
    list.forEach(([, element]) => {
      observer.observe(element);
    });
    update();
    void document.fonts.ready.then(update);
    return (): void => {
      disposed = true;
      observer.disconnect();
    };
  });

  $effect(() => {
    const root: HTMLDivElement | undefined = frame;
    const list: [string, HTMLElement][] = targets;
    const active: string | null = layer.hovered ?? layer.focused;
    if (root === undefined || list.length === 0 || active === null) return;
    const request: number = requestAnimationFrame((): void => {
      rings = measureRings(root, list);
    });
    return (): void => {
      cancelAnimationFrame(request);
    };
  });
</script>

<div class="frame" class:frame--ringed={hotspot !== undefined && rings.length > 0} bind:this={frame}>
  <Visual {variant} />
  {#if hotspot !== undefined && rings.length > 0}
    <div class="frame__rings" aria-hidden="true">
      {#each rings as ring (ring.id)}
        <HotspotRing
          geometry={ring.geometry}
          state={ringState(
            hotspot.outcomeOf(ring.id),
            hotspot.isSelected(ring.id),
            hotspot.interactive && layer.hovered === ring.id
          )}
          focused={layer.focused === ring.id}
        />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .frame {
    position: relative;
    --font-heading: var(--mock-heading-font);
    // noinspection CssNoGenericFontName
    font-family: var(--mock-font);
    width: max-content;

    // noinspection CssUnusedSymbol
    &--ringed :global(.hotspot__target:focus-visible) {
      outline: none;
    }

    &__rings {
      position: absolute;
      inset: 0;
      z-index: 5;
      pointer-events: none;
    }
  }
</style>
