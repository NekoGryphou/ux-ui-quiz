<script lang="ts">
  import { href, navigate } from "../app/utils/router.utils";
  import Button from "../components/Button.svelte";
  import RestartButton from "../components/RestartButton.svelte";
  import { session } from "../engine/session.svelte";
  import { HOME_STEPS } from "./const/home.const";
  import { historyLine } from "./utils/home.utils";

  const history: string | null = $derived(historyLine(session.bestFull, session.lastFull));

  const quick = (): void => {
    if (session.practice === null || session.practice.isComplete) session.startQuick();
    navigate(href.quiz("practice", session.practice?.resumeIndex ?? 0));
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
      {#if session.main.isComplete}
        <Button variant="accent" size="lg" href={href.results("main")} iconEnd="arrow-right">View results</Button>
        <RestartButton size="lg" />
      {:else if session.main.hasStarted}
        <Button variant="accent" size="lg" href={href.quiz("main", session.main.resumeIndex)} iconEnd="arrow-right">
          Resume at question {session.main.resumeIndex + 1}
        </Button>
        <RestartButton size="lg" />
      {:else}
        <Button variant="accent" size="lg" href={href.quiz("main", 0)} iconEnd="arrow-right">Start the quiz</Button>
      {/if}
      <Button size="lg" onclick={quick} iconStart="refresh">
        {session.practice !== null && !session.practice.isComplete ? "Resume practice" : "Quick 10"}
      </Button>
    </div>

    {#if history !== null}
      <p class="hero__history">{history}</p>
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
      color: var(--on-brand-muted);
      font-size: var(--text-sm);
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-3);
      margin-top: var(--space-2);
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
      font-family: var(--font-display);
      font-size: var(--text-md);
      font-weight: 700;
    }
  }
</style>
