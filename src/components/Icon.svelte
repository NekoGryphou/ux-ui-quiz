<script lang="ts">
  import type { IconProps } from "./types/icon.types";
  import { ICONS } from "./const/icons.const";

  let { name, size = 18, strokeWidth = 2, label }: IconProps = $props();
</script>

<svg
  class="icon"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  role={label === undefined ? undefined : "img"}
  aria-label={label}
  aria-hidden={label === undefined ? "true" : undefined}
>
  {#each ICONS[name] as shape, index (index)}
    <svelte:element this={shape.tag} xmlns="http://www.w3.org/2000/svg" {...shape.attrs} />
  {/each}
</svg>

<style>
  .icon {
    flex: none;
    display: inline-block;
    vertical-align: middle;
  }
</style>
