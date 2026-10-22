<script lang="ts">
  import { tick, untrack } from "svelte";
  import type { Run } from "../engine/run.svelte";
  import Home from "../screens/Home.svelte";
  import QuizScreen from "../screens/Quiz.svelte";
  import Results from "../screens/Results.svelte";
  import AppHeader from "./AppHeader.svelte";
  import { router } from "./router.svelte";
  import { debugRun, session } from "./session";
  import { Settle } from "./settle.svelte";
  import type { Route, RunTarget } from "./types/router.types";
  import type { Screen } from "./types/screen.types";
  import { resolveScreen } from "./utils/screen.utils";
  import { pageTitle } from "./utils/title.utils";

  const screenSettle: Settle = new Settle();
  let previousRoute: Route | null = null;

  let mainEl: HTMLElement | undefined = $state();

  const screen: Screen = $derived(resolveScreen(router.route, session.main, session.practice, debugRun));
  const headerRun: Run | null = $derived(screen.name === "quiz" || screen.name === "results" ? screen.run : null);
  const target: RunTarget = $derived(screen.name === "quiz" || screen.name === "results" ? screen.target : "main");

  /**
   * @private
   * @desc Moves focus to the new screen's heading, or the main region.
   */
  const focusScreen = async (): Promise<void> => {
    await tick();
    (mainEl?.querySelector<HTMLElement>("h1") ?? mainEl)?.focus({ preventScroll: true });
  };

  /**
   * @private
   * @desc Arms the click guard and moves focus after a route change.
   * Focus is left alone on the first route.
   *
   * @param route - New route.
   */
  const onRouteChange = (route: Route): void => {
    screenSettle.trigger();
    const isFirstRoute: boolean = previousRoute === null;
    previousRoute = route;
    if (!isFirstRoute) void focusScreen();
  };

  /**
   * @private
   * @desc Skip link handler that focuses the main region.
   *
   * @param event - Link click.
   */
  const skipToContent = (event: MouseEvent): void => {
    event.preventDefault();
    mainEl?.focus();
  };

  $effect(() => {
    if (screen.name === "redirect") router.replace(screen.to);
  });

  $effect(() => {
    document.title = pageTitle(screen);
  });

  $effect(() => {
    const route: Route = router.route;
    untrack(() => {
      onRouteChange(route);
    });
  });
</script>

<a class="skip-link" href="#main" onclick={skipToContent}>Skip to content</a>

<div class="app-band" aria-hidden="true"></div>

<AppHeader run={headerRun} {target} />

{#if import.meta.env.DEV}
  {#await import("./DebugMenu.svelte") then { default: DebugMenu }}
    <DebugMenu />
  {/await}
{/if}

<!--suppress HtmlUnknownAttribute -->
<main
  id="main"
  class="app-main"
  class:app-main--flush={screen.name === "home"}
  tabindex="-1"
  bind:this={mainEl}
  onclickcapture={screenSettle.guard}
  onmousedowncapture={screenSettle.guard}
>
  {#if screen.name === "home"}
    <Home />
  {:else if screen.name === "quiz"}
    {#key `${screen.run.id}-${screen.mode}-${screen.quiz.id}`}
      <QuizScreen quiz={screen.quiz} index={screen.index} run={screen.run} target={screen.target} mode={screen.mode} />
    {/key}
  {:else if screen.name === "results"}
    <Results run={screen.run} target={screen.target} />
  {:else if screen.name === "kit" && import.meta.env.DEV}
    {#await import("../screens/Kit.svelte") then { default: Kit }}
      <Kit />
    {/await}
  {/if}
</main>

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
