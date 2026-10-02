<script lang="ts">
  import { HotspotLayer } from "./hotspot-layer.svelte";
  import HotspotRing from "./HotspotRing.svelte";
  import type { HotspotContext } from "./types/hotspot-context.types";
  import type { RingItem } from "./types/hotspot-ring.types";
  import type { MockFrameProps } from "./types/mock-frame.types";
  import { measureRing, ringState } from "./utils/hotspot-ring.utils";
  import { provideHotspotLayer, readHotspotContext } from "./utils/hotspot.utils";

  let { visual: Visual, variant }: MockFrameProps = $props();

  const layer: HotspotLayer = new HotspotLayer();
  provideHotspotLayer(layer);
  const hotspot: HotspotContext | undefined = readHotspotContext();

  let frame: HTMLDivElement | undefined = $state();
  let rings: RingItem[] = $state([]);

  $effect(() => {
    const root: HTMLDivElement | undefined = frame;
    const targets: [string, HTMLElement][] = [...layer.elements];
    if (root === undefined || targets.length === 0) return;
    const update = (): void => {
      rings = targets.map(([id, element]): RingItem => ({ id, geometry: measureRing(root, element) }));
    };
    const observer: ResizeObserver = new ResizeObserver(update);
    observer.observe(root);
    targets.forEach(([, element]) => {
      observer.observe(element);
    });
    update();
    return (): void => {
      observer.disconnect();
    };
  });
</script>

<div class="frame" bind:this={frame}>
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
    font-family: var(--mock-font);
    width: max-content;

    &__rings {
      position: absolute;
      inset: 0;
      z-index: 5;
      pointer-events: none;
    }
  }
</style>
