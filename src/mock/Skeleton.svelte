<script lang="ts">
  import type { SkeletonProps } from "./types/skeleton.types";

  let { lines = 3 }: SkeletonProps = $props();
</script>

<div class="skeleton" aria-hidden="true">
  {#each { length: lines }, i (i)}
    <span style="width: {[92, 76, 58][i % 3]}%"></span>
  {/each}
</div>

<style lang="scss">
  .skeleton {
    display: grid;
    gap: 8px;

    span {
      height: 10px;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--mock-track) 0%, var(--mock-surface-2) 50%, var(--mock-track) 100%);
      background-size: 200% 100%;
      animation: shimmer 1.4s linear infinite;
    }
  }

  @keyframes shimmer {
    to {
      background-position: -200% 0;
    }
  }
</style>
