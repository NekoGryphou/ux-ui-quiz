<script lang="ts">
  import { RING_GAP, RING_LINE, RING_RIM, RING_STYLES, RING_TAG_SIZE } from "./const/hotspot-ring.const";
  import Icon from "./Icon.svelte";
  import type { HotspotRingProps, RingStyle } from "./types/hotspot-ring.types";
  import { cornerList, lineRadius, tagInset } from "./utils/hotspot-ring.utils";

  let { geometry, state, focused }: HotspotRingProps = $props();

  const style: RingStyle | null = $derived(state === null ? null : RING_STYLES[state]);
</script>

<span
  class="ring ring--{geometry.surface}"
  class:ring--visible={style !== null}
  class:ring--plated={style?.plate === true}
  class:ring--focused={focused}
  data-tone={style?.tone}
  data-line={style?.line}
  style:left="{geometry.left}px"
  style:top="{geometry.top}px"
  style:width="{geometry.width}px"
  style:height="{geometry.height}px"
  style:border-radius={cornerList(geometry.radii)}
  style:--plate-width="{RING_GAP}px"
  style:--rim-width="{RING_RIM}px"
  style:--line-width="{RING_LINE}px"
  style:--line-radius={cornerList(geometry.radii.map(lineRadius))}
  style:--tag-size="{RING_TAG_SIZE}px"
  style:--tag-inset="{tagInset(geometry.radii[1] ?? 0)}px"
>
  {#if style !== null && style.tag !== null}
    <span class="ring__tag"><Icon name={style.tag} size={12} strokeWidth={3.5} /></span>
  {/if}
</span>

<style lang="scss">
  .ring {
    --color: transparent;
    --plate-color: var(--ring-band-light);
    position: absolute;
    transition: box-shadow var(--duration) var(--ease);

    &::after {
      content: "";
      position: absolute;
      inset: var(--rim-width);
      border: var(--line-width) solid transparent;
      border-radius: var(--line-radius);
      transition: border-color var(--duration) var(--ease);
    }

    &--dark {
      --plate-color: transparent;
    }

    &--visible::after {
      border-color: var(--color);
    }

    &--plated {
      box-shadow: inset 0 0 0 var(--plate-width) var(--plate-color);
    }

    &[data-line="dashed"]::after {
      border-style: dashed;
    }

    &--light[data-tone="hover"] {
      --color: var(--ring-hover);
    }

    &--dark[data-tone="hover"] {
      --color: var(--ring-hover-dark);
    }

    &--light[data-tone="select"] {
      --color: var(--ring-select);
    }

    &--light[data-tone="correct"] {
      --color: var(--ring-correct);
    }

    &--light[data-tone="wrong"] {
      --color: var(--ring-wrong);
    }

    &--dark[data-tone="select"] {
      --color: var(--ring-select-dark);
    }

    &--dark[data-tone="correct"] {
      --color: var(--ring-correct-dark);
    }

    &--dark[data-tone="wrong"] {
      --color: var(--ring-wrong-dark);
    }

    &--focused::after {
      outline: var(--line-width) solid var(--ring-focus);
      outline-offset: var(--line-width);
    }

    &__tag {
      position: absolute;
      z-index: 1;
      top: var(--tag-inset);
      right: var(--tag-inset);
      display: grid;
      place-items: center;
      width: var(--tag-size);
      height: var(--tag-size);
      border: 2px solid var(--ring-band-light);
      border-radius: 50%;
      background: var(--color);
      color: var(--ring-icon-light);
      transform: translate(50%, -50%);
    }

    &--dark &__tag {
      border-color: var(--mock-code-bg);
      color: var(--ring-icon-dark);
    }
  }
</style>
