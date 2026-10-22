<script lang="ts">
  import Button from "../components/Button.svelte";
  import type { CompareChoice } from "../engine/types/quiz.types";
  import { isCompareChoice } from "../engine/utils/quiz.utils";
  import CompareStage from "./CompareStage.svelte";
  import type { QuizStageProps } from "./types/quiz-stage.types";
  import type { VisualState } from "./types/visual-cache.types";
  import { visualCache } from "./visual-cache.svelte";
  import VisualStage from "./VisualStage.svelte";

  let { quiz, options, answer, label, onselect }: QuizStageProps = $props();

  const loaded: VisualState = $derived(visualCache.stateOf(quiz));

  /**
   * @private
   * @desc Reloads a preview that failed to load.
   */
  const retry = (): void => {
    visualCache.retry(quiz);
  };

  $effect(() => {
    void visualCache.load(quiz);
  });
</script>

{#if loaded.status === "ready"}
  {#if quiz.kind === "compare"}
    {@const compareOptions: CompareChoice[] = options.filter(isCompareChoice)}
    <CompareStage {quiz} visual={loaded.visual} options={compareOptions} {answer} {onselect} />
  {:else}
    <VisualStage visual={loaded.visual} {label} />
  {/if}
{:else}
  <div class="pending" aria-busy={loaded.status === "loading"}>
    {#if loaded.status === "failed"}
      <p>The interface for this question didn’t load.</p>
      <Button iconStart="refresh" onclick={retry}>Try again</Button>
    {:else}
      <span class="visually-hidden">Loading the interface</span>
    {/if}
  </div>
{/if}

<style lang="scss">
  @use "$styles/mixins" as *;

  .pending {
    display: grid;
    place-content: center;
    justify-items: center;
    gap: var(--space-3);
    min-height: 360px;
    padding: var(--space-5);
    border-radius: var(--radius-xl);
    color: var(--text-muted);
    text-align: center;
    @include dot-grid;

    @include up(md) {
      min-height: 560px;
    }
  }
</style>
