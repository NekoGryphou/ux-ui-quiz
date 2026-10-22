<script lang="ts">
  import { AVATAR_FALLBACK_COLOR, AVATAR_PALETTE } from "./const/mock.const";
  import type { AvatarProps } from "./types/avatar.types";

  let { name, size = 28 }: AvatarProps = $props();

  const color: string = $derived(AVATAR_PALETTE[name.length % AVATAR_PALETTE.length] ?? AVATAR_FALLBACK_COLOR);
  const initials: string = $derived(
    name
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  );
</script>

<span class="avatar" style="--size: {size}px; --color: {color}">{initials}</span>

<style lang="scss">
  .avatar {
    display: inline-grid;
    flex: none;
    place-items: center;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background: color-mix(in srgb, var(--color) 16%, #fff);
    color: color-mix(in srgb, var(--color) 65%, #000);
    font-size: calc(var(--size) * 0.38);
    font-weight: 600;
  }
</style>
