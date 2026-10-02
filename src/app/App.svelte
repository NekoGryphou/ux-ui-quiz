<script lang="ts">
  import { tick } from "svelte";
  import AppHeader from "../components/AppHeader.svelte";
  import type { Run } from "../engine/run.svelte";
  import { session } from "../engine/session.svelte";
  import type { Quiz } from "../engine/types/quiz.types";
  import Home from "../screens/Home.svelte";
  import QuizScreen from "../screens/Quiz.svelte";
  import Results from "../screens/Results.svelte";
  import { router } from "./router.svelte";
  import { Settle } from "./settle.svelte";
  import type { Route, RunTarget } from "./types/router.types";
  import { href } from "./utils/router.utils";
  import { pageTitle } from "./utils/title.utils";

  const route: Route = $derived(router.route);
  const target: RunTarget = $derived(
    (route.name === "quiz" || route.name === "results") && route.run === "practice" ? "practice" : "main"
  );
  const run: Run | null = $derived(target === "practice" ? session.practice : session.main);
  const quiz: Quiz | undefined = $derived(
    route.name === "quiz" || route.name === "review" ? run?.order[route.index] : undefined
  );
  const isMissing: boolean = $derived(
    run === null || ((route.name === "quiz" || route.name === "review") && quiz === undefined)
  );

  $effect(() => {
    if (isMissing) router.replace(href.home);
  });

  const screenSettle: Settle = new Settle();
  let mainEl: HTMLElement | undefined = $state();
  let isFirstRoute: boolean = true;

  const focusScreen = async (): Promise<void> => {
    await tick();
    (mainEl?.querySelector<HTMLElement>("h1") ?? mainEl)?.focus({ preventScroll: true });
  };

  $effect(() => {
    document.title = pageTitle(route, run?.total ?? 0);
    screenSettle.trigger();

    if (isFirstRoute) {
      isFirstRoute = false;
      return;
    }
    void focusScreen();
  });

  const skipToContent = (event: MouseEvent): void => {
    event.preventDefault();
    mainEl?.focus();
  };
</script>

<a class="skip-link" href="#main" onclick={skipToContent}>Skip to content</a>

<div class="app-band" aria-hidden="true"></div>

<AppHeader run={route.name === "home" || route.name === "kit" ? null : run} {target} />

<main
  id="main"
  class="app-main"
  class:app-main--flush={route.name === "home"}
  tabindex="-1"
  bind:this={mainEl}
  onclickcapture={screenSettle.guard}
  onmousedowncapture={screenSettle.guard}
>
  {#if route.name === "home"}
    <Home />
  {:else if (route.name === "quiz" || route.name === "review") && quiz !== undefined && run !== null}
    {#key `${target}-${route.name}-${quiz.id}`}
      <QuizScreen {quiz} index={route.index} {run} {target} mode={route.name === "review" ? "review" : "answer"} />
    {/key}
  {:else if route.name === "results" && run !== null}
    <Results {run} {target} />
  {:else if route.name === "kit" && import.meta.env.DEV}
    {#await import("../screens/Kit.svelte") then { default: Kit }}
      <Kit />
    {/await}
  {/if}
</main>

{#if import.meta.env.DEV}
  {#await import("../components/DebugPanel.svelte") then { default: DebugPanel }}
    <DebugPanel />
  {/await}
{/if}

<style lang="scss">
  @use "$styles/mixins" as *;

  .skip-link {
    position: fixed;
    top: var(--space-2);
    left: var(--space-2);
    z-index: var(--z-skip-link);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    background: var(--primary);
    color: var(--on-primary);
    font-weight: 600;
    text-decoration: none;
    transform: translateY(-200%);

    &:focus-visible {
      transform: none;
    }
  }

  .app-band {
    position: absolute;
    inset: 0 0 auto;
    z-index: -1;
    height: var(--band-height);
    border-radius: 0 0 var(--radius-xl) var(--radius-xl);
    background: var(--brand-gradient);
    background-size: 100% 400%;

    @include up(md) {
      border-radius: 0 0 48px 48px;
    }
  }

  .app-main {
    @include container;
    padding-block: calc(var(--band-height) + var(--space-5)) var(--space-8);

    @include up(md) {
      padding-block: calc(var(--band-height) + var(--space-6)) var(--space-8);
    }

    &--flush {
      padding-top: 0;
    }
  }
</style>
