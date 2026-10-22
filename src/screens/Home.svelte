<script lang="ts">
    import RestartButton from "../app/RestartButton.svelte";
    import {router} from "../app/router.svelte";
    import {RunGuard} from "../app/run-guard.svelte";
    import RunGuardDialog from "../app/RunGuardDialog.svelte";
    import {session} from "../app/session";
    import {href} from "../app/utils/router.utils";
    import {resumeLabel} from "../app/utils/run-label.utils";
    import Button from "../components/Button.svelte";
    import type {Run} from "../engine/run.svelte";
    import {HOME_STEPS} from "./const/home.const";
    import type {HistorySegment} from "./types/home.types";
    import {historyLine} from "./utils/home.utils";

    const guard: RunGuard = new RunGuard();

  const history: HistorySegment[] | null = $derived(historyLine(session.bestFull, session.lastFull));
  const practice: Run | null = $derived(session.activeRun === session.main ? null : session.activeRun);

  /**
   * @private
   * @desc Starts a new Quick 10, after confirming if another run is active.
   */
  const quick = (): void => {
    guard.start((): void => {
      session.startQuick();
      router.navigate(href.quiz("practice", 0));
    });
  };

  /**
   * @private
   * @desc Opens the main quiz where it stopped, after confirming if a practice run is active.
   */
  const startQuiz = (): void => {
    guard.start((): void => {
      router.navigate(href.quiz("main", session.main.hasStarted ? session.main.resumeIndex : 0));
    });
  };
</script>

<div class="home">
  <section class="hero">
    <p class="hero__eyebrow">UX · UI · Accessibility</p>
    <h1 class="hero__title" tabindex="-1">Spot the UX/UI issue <span>before it ships.</span></h1>
    <p class="hero__lede">
      Realistic interface critiques covering accessibility, hierarchy, feedback, microcopy, dark patterns and more.
    </p>

    <div class="hero__actions">
      <div class="hero__group">
        {#if session.main.isComplete}
          <Button
            variant={practice === null ? "accent" : "secondary"}
            size="lg"
            href={href.results("main")}
            iconEnd="arrow-right"
          >
            View results
          </Button>
          <RestartButton size="lg" />
        {:else if session.main.hasStarted && practice === null}
          <Button variant="accent" size="lg" href={href.quiz("main", session.main.resumeIndex)} iconEnd="arrow-right">
            {resumeLabel("full", session.main.answeredCount, session.main.total)}
          </Button>
          <RestartButton size="lg" />
        {:else}
          <Button
            variant={practice === null ? "accent" : "secondary"}
            size="lg"
            onclick={startQuiz}
            iconEnd="arrow-right"
          >
            {session.main.hasStarted
              ? resumeLabel("full", session.main.answeredCount, session.main.total)
              : "Start the quiz"}
          </Button>
        {/if}
      </div>
      <span class="hero__or" aria-hidden="true">or</span>
      <div class="hero__group">
        {#if practice !== null}
          <Button variant="accent" size="lg" href={href.quiz("practice", practice.resumeIndex)} iconEnd="arrow-right">
            {resumeLabel(practice.kind, practice.answeredCount, practice.total)}
          </Button>
          {#if practice.kind === "quick"}
            <Button size="lg" onclick={quick} iconStart="refresh">Restart Quick 10</Button>
          {:else}
            <Button size="lg" onclick={quick} iconStart="zap">Quick 10</Button>
          {/if}
        {:else}
          <Button size="lg" onclick={quick} iconStart="zap">Quick 10</Button>
        {/if}
      </div>
    </div>

    <RunGuardDialog {guard} />

    {#if history !== null}
      <p class="hero__history">
        {#each history as segment, index (index)}
          {#if segment.score}<strong class="hero__score">{segment.text}</strong>{:else}<span>{segment.text}</span>{/if}
        {/each}
      </p>
    {/if}
  </section>

  <ol class="steps">
    {#each HOME_STEPS as step, i (step.title)}
      <li class="steps__item">
        <div class="steps__head">
          <span class="steps__index">{i + 1}</span>
          <h2>{step.title}</h2>
        </div>
        <p>{step.body}</p>
      </li>
    {/each}
  </ol>
</div>

<style lang="scss">
  @use "$styles/mixins" as *;

  .home {
    display: grid;
    gap: var(--space-7);
    padding-bottom: var(--space-6);
  }

  .hero {
    --focus-ring: var(--brand-yellow);
    display: grid;
    justify-items: center;
    gap: var(--space-5);
    margin-inline: calc(50% - 50vw);
    padding: calc(var(--header-height) + var(--space-7)) var(--space-4) var(--space-8);
    border-radius: 0 0 var(--radius-xl) var(--radius-xl);
    background: var(--brand-gradient);
    color: var(--on-brand);
    text-align: center;

    @include up(md) {
      padding-top: calc(var(--header-height) + var(--space-8));
      padding-bottom: calc(var(--space-8) + var(--space-6));
      border-radius: 0 0 160px 160px;
    }

    &__eyebrow {
      color: var(--brand-yellow);
      // noinspection CssNoGenericFontName
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;

      @include up(md) {
        font-size: var(--text-2xl);
      }
    }

    &__title {
      max-width: 16ch;
      font-size: var(--text-display);
      font-weight: 700;
      line-height: 1;

      span {
        color: var(--brand-yellow);
      }
    }

    &__lede {
      max-width: 56ch;
      color: var(--on-brand-muted);
      font-size: var(--text-lg);
    }

    &__history {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: center;
      gap: 0 0.35em;
      color: var(--on-brand-muted);
      font-size: var(--text-sm);
    }

    &__score {
      color: var(--brand-yellow);
      font-size: var(--text-md);
      font-weight: 800;
      font-variant-numeric: tabular-nums;
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-3) var(--space-5);
      margin-top: var(--space-2);
    }

    &__group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-3);
    }

    &__or {
      --or-line: color-mix(in srgb, var(--on-brand) 60%, transparent);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-1);
      color: var(--on-brand-muted);
      // noinspection CssNoGenericFontName
      font-family: var(--font-display);
      font-size: var(--text-sm);
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      user-select: none;

      &::before,
      &::after {
        content: "";
        width: 1px;
        height: 14px;
        background: linear-gradient(transparent, var(--or-line));
      }

      &::after {
        background: linear-gradient(var(--or-line), transparent);
      }

      @include down(sm) {
        flex-basis: 100%;
        flex-direction: row;
        gap: var(--space-2);

        &::before,
        &::after {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--or-line));
        }

        &::after {
          background: linear-gradient(90deg, var(--or-line), transparent);
        }
      }
    }
  }

  .steps {
    display: grid;
    gap: var(--space-6);
    @include list-reset;
    width: min(100%, 960px);
    margin-inline: auto;

    @include up(md) {
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-5);
      margin-top: calc(-2 * var(--space-7));
    }

    &__item {
      display: grid;
      align-content: start;
      gap: var(--space-2);
      padding: var(--space-5);
      border-radius: var(--radius-xl);
      background: var(--surface-2);
      box-shadow: -8px 8px 0 var(--brand-violet);
      rotate: -1.5deg;

      &:nth-child(2) {
        rotate: 1deg;
      }

      &:nth-child(3) {
        rotate: -0.5deg;
      }

      h2 {
        font-size: var(--text-lg);
      }

      p {
        color: var(--text-muted);
        font-size: var(--text-sm);
      }
    }

    &__head {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }

    &__index {
      @include chip;
      background: var(--brand-yellow);
      color: var(--on-accent);
      // noinspection CssNoGenericFontName
      font-family: var(--font-display);
      font-size: var(--text-md);
      font-weight: 700;
    }
  }
</style>
