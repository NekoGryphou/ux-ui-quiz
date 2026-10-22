<script lang="ts">
  import type { PhotoProps } from "./types/photo.types";

  let { src, hue = 0, position = "center", fit = "cover" }: PhotoProps = $props();
</script>

<img
  class="photo"
  {src}
  alt=""
  loading="lazy"
  style:object-position={position}
  style:object-fit={fit}
  style:filter={hue === 0 ? undefined : `hue-rotate(${String(hue)}deg)`}
/>

<style lang="scss">
  .photo {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
</style>
