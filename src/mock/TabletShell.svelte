<script lang="ts">
    import type {TabletShellProps} from "./types/tablet-shell.types";

    let { width = 600, height = 440, children }: TabletShellProps = $props();
</script>

<div class="tablet" style:width="{width}px">
  <div class="tablet__screen" style:height="{height}px">{@render children()}</div>
  <span class="tablet__camera" aria-hidden="true"></span>
</div>

<style lang="scss">
  .tablet {
    position: relative;
    padding: 18px;
    border-radius: 30px;
    background: var(--mock-device);
    box-shadow: var(--mock-shadow-lg);

    &__screen {
      overflow: hidden;
      border-radius: 12px;
      background: var(--mock-bg);
      color: var(--mock-text);
      font-size: 13px;
      line-height: 1.45;
    }

    &__camera {
      position: absolute;
      top: 7px;
      left: calc(50% - 3px);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #3a3d46;
    }
  }
</style>
