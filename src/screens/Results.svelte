<script lang="ts">
  import RestartButton from "../app/RestartButton.svelte";
  import { router } from "../app/router.svelte";
  import { RunGuard } from "../app/run-guard.svelte";
  import RunGuardDialog from "../app/RunGuardDialog.svelte";
  import { session } from "../app/session";
  import { href } from "../app/utils/router.utils";
  import Button from "../components/Button.svelte";
  import Icon from "../components/Icon.svelte";
  import type { Attempt } from "../engine/types/run.types";
  import { RING_LENGTH, RING_RADIUS, RUN_EYEBROWS } from "./const/results.const";
  import type { ReviewRow, RingState } from "./types/results.types";
  import type { ResultsScreenProps } from "./types/results-screen.types";
  import { deltaText, previousFullAttempt, reviewStatus, ringState, verdict } from "./utils/results.utils";

  let { run, target }: ResultsScreenProps = $props();

  const guard: RunGuard = new RunGuard();

  const ring: RingState = $derived(ringState(run.score, run.answeredCount, run.total, run.isComplete));
  const summary: string = $derived(verdict(run.score, run.answeredCount, run.total, run.isComplete));
  const attempt: Attempt | null = $derived(session.history.find((entry) => entry.runId === run.id) ?? null);
  const delta: string | null = $derived(
    run.kind === "full" ? deltaText(attempt, previousFullAttempt(session.history, run.id)) : null
  );

  const rows: ReviewRow[] = $derived(
    run.order.map((quiz, index): ReviewRow => ({ quiz, index, status: reviewStatus(quiz, run.answers[quiz.id]) }))
  );
  const missed: ReviewRow[] = $derived(rows.filter((row) => row.status !== "correct"));

  /**
   * @private
   * @desc Link opened by a review row.
   *
   * @param row - Review row.
   *
   * @returns Review href for wrong answers, question href otherwise.
   */
  const rowHref = (row: ReviewRow): string => {
    if (target === "practice") return href.quiz("practice", row.index);
    return row.status === "wrong" ? href.review(row.index) : href.quiz("main", row.index);
  };

  /**
   * @private
   * @desc Starts a practice run of the missed questions.
   */
  const retryMissed = (): void => {
    guard.start((): void => {
      session.startRetry();
      router.navigate(href.quiz("practice", 0));
    });
  };

  /**
   * @private
   * @desc Starts a new quick practice run.
   */
  const quickAgain = (): void => {
    guard.start((): void => {
      session.startQuick();
      router.navigate(href.quiz("practice", 0));
    });
  };

  /**
   * @private
   * @desc Ends the practice run and returns home.
   */
  const finishPractice = (): void => {
    session.endPractice();
    router.navigate(href.home);
  };
</script>

<div class="results">
  <section class="summary">
    <svg class="summary__ring" viewBox="0 0 120 120" role="img" aria-label={ring.label}>
      <circle class="summary__track" cx="60" cy="60" r={RING_RADIUS} />
      <circle
        class="summary__value"
        cx="60"
        cy="60"
        r={RING_RADIUS}
        stroke-dasharray={RING_LENGTH}
        stroke-dashoffset={RING_LENGTH * (1 - ring.value)}
      />
      <text x="60" y="60" class="summary__percent">{ring.text}</text>
    </svg>

    <div class="summary__copy">
      <p class="summary__eyebrow">{run.isComplete ? RUN_EYEBROWS[run.kind] : "In progress"}</p>
      <h1 tabindex="-1">
        {#if run.isComplete}
          {run.score} of {run.total} correct
        {:else}
          {run.score} correct so far
        {/if}
      </h1>
      <p class="summary__verdict">{summary}</p>
      {#if delta !== null}
        <p class="summary__delta">{delta}</p>
      {/if}
      <div class="summary__actions">
        {#if !run.isComplete}
          <Button variant="accent" href={href.quiz(target, run.resumeIndex)} iconEnd="arrow-right">
            Continue at question {run.resumeIndex + 1}
          </Button>
          {#if target === "main"}
            <RestartButton />
          {:else}
            <Button onclick={finishPractice}>Stop practising</Button>
          {/if}
        {:else if target === "main"}
          {#if missed.length > 0}
            <Button variant="accent" onclick={retryMissed} iconStart="refresh">
              Retry the {missed.length} you missed
            </Button>
          {/if}
          <Button href={href.review(0)} iconStart="eye">Review all answers</Button>
          <RestartButton />
        {:else}
          <Button variant="accent" onclick={finishPractice} iconEnd="arrow-right">Back to home</Button>
          {#if run.kind === "quick"}
            <Button onclick={quickAgain} iconStart="zap">Another Quick 10</Button>
          {/if}
        {/if}
      </div>
    </div>
  </section>

  <RunGuardDialog {guard} />

  <section class="panel" aria-labelledby="review-heading">
    <h2 id="review-heading" class="panel__title">To review <span>{missed.length}</span></h2>
    {#if missed.length > 0}
      <ul class="review">
        {#each missed as row (row.quiz.id)}
          <li>
            <a class="review__item" href={rowHref(row)}>
              <span class="review__status review__status--{row.status}">
                <Icon name={row.status === "wrong" ? "x" : "more"} size={14} strokeWidth={3} />
              </span>
              <span class="review__copy">
                <strong>{row.status === "wrong" ? row.quiz.title : `Question ${String(row.index + 1)}`}</strong>
                <small>{row.status === "wrong" ? row.quiz.principle : "Not answered"}</small>
              </span>
              <Icon name="chevron-right" size={16} />
            </a>
          </li>
        {/each}
      </ul>
    {:else}
      <p class="panel__empty">Nothing to review. Every answer was right.</p>
    {/if}
  </section>
</div>

<style lang="scss">
  @use "$styles/mixins" as *;

  .results {
    display: grid;
    gap: var(--space-5);
    max-width: 1040px;
    margin-inline: auto;
  }

  .summary {
    --focus-ring: var(--brand-yellow);
    display: grid;
    justify-items: center;
    gap: var(--space-5);
    padding: var(--space-6);
    border-radius: var(--radius-xl);
    background: var(--brand-gradient-deep);
    color: var(--on-brand);
    text-align: center;
    box-shadow: var(--shadow-md);

    @include up(md) {
      padding: var(--space-7);
    }

    @include up(sm) {
      grid-template-columns: auto 1fr;
      justify-items: start;
      gap: var(--space-6);
      text-align: left;
    }

    &__ring {
      width: 160px;
      height: 160px;
      transform: rotate(-90deg);
    }

    &__track,
    &__value {
      fill: none;
      stroke-width: 10;
    }

    &__track {
      stroke: rgb(255 255 255 / 0.18);
    }

    &__value {
      stroke: var(--brand-yellow);
      stroke-linecap: round;
      transition: stroke-dashoffset var(--duration-slower) var(--ease);
    }

    &__percent {
      fill: var(--on-brand);
      // noinspection CssNoGenericFontName
      font-family: var(--font-display);
      font-size: 28px;
      font-weight: 700;
      text-anchor: middle;
      dominant-baseline: central;
      transform: rotate(90deg);
      transform-origin: 60px 60px;
    }

    &__copy {
      display: grid;
      gap: var(--space-2);

      h1 {
        font-size: clamp(1.75rem, 4vw, 2.5rem);
      }
    }

    &__eyebrow {
      @include eyebrow;
      color: var(--brand-yellow);
    }

    &__verdict,
    &__delta {
      color: var(--on-brand-muted);
    }

    &__delta {
      font-size: var(--text-sm);
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-3);
      margin-top: var(--space-3);

      @include up(sm) {
        justify-content: flex-start;
      }
    }
  }

  .panel {
    display: grid;
    gap: var(--space-4);
    padding: var(--space-5);
    @include card;

    &__title {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--text-lg);

      span {
        @include pill;
        background: var(--surface-2);
        color: var(--text-muted);
      }
    }

    &__empty {
      color: var(--text-muted);
    }
  }

  .review {
    display: grid;
    gap: var(--space-1);
    @include list-reset;

    &__item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3);
      border-radius: var(--radius-md);
      color: var(--text-subtle);
      text-decoration: none;

      &:hover {
        background: var(--surface-2);
      }
    }

    &__status {
      @include chip;

      &--wrong {
        background: var(--danger-soft);
        color: var(--danger);
      }

      &--skipped {
        background: var(--surface-2);
        color: var(--text-subtle);
      }
    }

    &__copy {
      display: grid;
      flex: 1;
      min-width: 0;

      strong {
        color: var(--text);
        font-size: var(--text-sm);
        font-weight: 600;
      }

      small {
        font-size: var(--text-xs);
      }
    }
  }
</style>
