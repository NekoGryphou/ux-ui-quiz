<script lang="ts">
  import type { RetroFieldProps } from "./types/retro-field.types";

  let { value = "", width = 140, grow = false }: RetroFieldProps = $props();
</script>

<span class="field" class:field--grow={grow} style:width={grow ? undefined : `${String(width)}px`}>{value}</span>

<style lang="scss">
  @use "$styles/mixins" as *;

  .field {
    display: inline-block;
    min-height: 21px;
    padding: 3px 5px;
    @include retro-sunken;
    color: var(--mock-retro-dark);
    font: 11px/1.4 var(--mock-retro-font);
    white-space: nowrap;

    &--grow {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
