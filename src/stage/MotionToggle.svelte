<script lang="ts">
    import Button from "../components/Button.svelte";
    import type {MotionToggleProps} from "./types/motion-toggle.types";

    let { playing, ontoggle }: MotionToggleProps = $props();
</script>

<div class="motion">
  <Button iconStart={playing ? "pause" : "play"} onclick={ontoggle}>
    {playing ? "Stop animation" : "Play animation"}
  </Button>
</div>

<style lang="scss">
  .motion {
    display: flex;
    justify-content: center;
    margin-top: var(--space-3);
  }
</style>
