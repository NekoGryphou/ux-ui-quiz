<script lang="ts">
    import type {SpinnerProps} from "./types/spinner.types";

    let { size = 28 }: SpinnerProps = $props();
</script>

<span class="spinner" style="--size: {size}px" aria-hidden="true"></span>

<style lang="scss">
  .spinner {
    display: inline-block;
    width: var(--size);
    height: var(--size);
    border: 3px solid var(--mock-border);
    border-top-color: var(--mock-primary);
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
