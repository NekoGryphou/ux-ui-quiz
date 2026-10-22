<script lang="ts">
  import { MARK_PATHS } from "./const/brand-mark.const";
  import type { BrandMarkProps, MarkStyle } from "./types/brand-mark.types";
  import { markStyle } from "./utils/brand-mark.utils";

  let { name, size = 22 }: BrandMarkProps = $props();

  const id: string = $props.id();

  const style: MarkStyle = $derived(markStyle(name));
</script>

<svg class="mark" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
  <defs>
    <linearGradient id="{id}-fill" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl({style.hue} 80% 62%)" />
      <stop offset="100%" stop-color="hsl({(style.hue + 40) % 360} 75% 42%)" />
    </linearGradient>
  </defs>
  <path d={MARK_PATHS[style.shape]} fill="url(#{id}-fill)" />
  <path d="M8 6c4-2 10-2 14 1" stroke="rgb(255 255 255 / 0.45)" stroke-width="2" fill="none" stroke-linecap="round" />
  <text x="16" y="21.5" text-anchor="middle" font-size="14" font-weight="800" fill="#ffffff">{style.initial}</text>
</svg>

<style lang="scss">
  .mark {
    flex: none;
    // noinspection CssNoGenericFontName
    font-family: var(--mock-font);
  }
</style>
