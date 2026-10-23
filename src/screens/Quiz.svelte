<script lang="ts">
  import { onDestroy, tick } from "svelte";
  import { prefersReducedMotion } from "svelte/motion";
  import { router } from "../app/router.svelte";
  import { Settle } from "../app/settle.svelte";
  import AnswerReveal from "../components/AnswerReveal.svelte";
  import Button from "../components/Button.svelte";
  import ChoiceList from "../components/ChoiceList.svelte";
  import KindBadge from "../components/KindBadge.svelte";
  import SelectionSummary from "../components/SelectionSummary.svelte";
  import ShortcutHint from "../components/ShortcutHint.svelte";
  import type { Answer, Choice, HotspotResults } from "../engine/types/quiz.types";
  import { allowsSeveral, optionsOf } from "../engine/utils/quiz.utils";
  import { choiceOutcome, hotspotResults, isCorrect } from "../engine/utils/scoring.utils";
  import { pick, t } from "../shared/locale.svelte";
  import { PRELOAD_AHEAD } from "../stage/const/visual-cache.const";
  import MotionToggle from "../stage/MotionToggle.svelte";
  import QuizStage from "../stage/QuizStage.svelte";
  import { provideHotspotContext } from "../stage/utils/hotspot.utils";
  import { visualCache } from "../stage/visual-cache.svelte";
  import { QUESTION_HEADINGS } from "./const/quiz.const";
  import type { QuizNav, QuizScreenProps } from "./types/quiz-screen.types";
  import type { ShortcutAction } from "./types/shortcuts.types";
  import { checkButtonLabel, quizNav } from "./utils/quiz.utils";
  import { shortcutFor } from "./utils/shortcuts.utils";

  let { quiz, index, run, target, mode }: QuizScreenProps = $props();

  const actionsSettle: Settle = new Settle();

  let nextButton: HTMLElement | undefined = $state();
  let heading: HTMLElement | undefined = $state();
  let announcement: string = $state("");
  let motionPlaying: boolean = $state(false);

  const options: Choice[] = $derived(run.optionsFor(quiz));
  const stored: Answer = $derived(run.answerFor(quiz));
  const answer: Answer = $derived(mode === "review" ? { selected: stored.selected, submitted: true } : stored);
  const several: boolean = $derived(allowsSeveral(quiz));
  const nav: QuizNav = $derived(quizNav(mode, target, index, run.total));
  const checkLabel: string = $derived(checkButtonLabel(quiz.kind, several, answer.selected.length));
  const motionGated: boolean = $derived(quiz.motion === true && prefersReducedMotion.current);
  const selectedLabels: string[] = $derived(
    optionsOf(quiz)
      .filter((option) => answer.selected.includes(option.id))
      .map((option) => option.text)
  );
  const position: string = $derived(
    `${mode === "review" ? t("Review · ", "Revue · ") : target === "practice" ? t("Practice · ", "Entraînement · ") : ""}Question ${String(index + 1)} ${t("of", "sur")} ${String(run.total)}`
  );

  /**
   * @private
   * @desc Toggles a choice, except in review mode.
   *
   * @param choiceId - Choice id.
   */
  const toggle = (choiceId: string): void => {
    if (mode === "review") return;
    run.toggle(quiz, choiceId);
  };

  provideHotspotContext({
    get interactive(): boolean {
      return !answer.submitted;
    },
    isSelected: (id: string): boolean => answer.selected.includes(id),
    outcomeOf: (id: string) => choiceOutcome(quiz, answer, id),
    labelOf: (id: string): string => optionsOf(quiz).find((option) => option.id === id)?.text ?? id,
    toggle
  });

  /**
   * @private
   * @desc Focuses the question heading without scrolling.
   */
  const focusHeading = (): void => {
    heading?.focus({ preventScroll: true });
  };

  /**
   * @private
   * @desc Plays or stops the preview animation.
   */
  const toggleMotion = (): void => {
    motionPlaying = !motionPlaying;
  };

  /**
   * @private
   * @desc Submits the answer, announces the result and focuses the next button.
   */
  const check = async (): Promise<void> => {
    run.submit(quiz);
    actionsSettle.trigger();
    const correct: boolean = isCorrect(quiz, run.answerFor(quiz));
    announcement = `${correct ? t("Correct", "Bonne réponse") : t("Not quite", "Pas tout à fait")}. ${quiz.title}. ${quiz.explanation.join(" ")}`;

    await tick();
    nextButton?.focus({ preventScroll: true });
  };

  /**
   * @private
   * @desc Applies the keyboard shortcut for a key press.
   *
   * @param event - Key event.
   */
  const onkeydown = (event: KeyboardEvent): void => {
    const action: ShortcutAction = shortcutFor(event);
    if (action.type === "none") return;
    if (action.type === "pick") {
      const option: Choice | undefined = quiz.kind === "hotspot" ? undefined : options[action.index];
      if (option === undefined || answer.submitted) return;
      event.preventDefault();
      toggle(option.id);
    } else if (action.type === "confirm") {
      if (!answer.submitted && answer.selected.length > 0) {
        event.preventDefault();
        void check();
      } else if (answer.submitted) {
        event.preventDefault();
        router.navigate(nav.next);
      } else if (!action.fromControl) {
        event.preventDefault();
      }
    } else if (action.type === "next") {
      if (!answer.submitted) return;
      event.preventDefault();
      router.navigate(nav.next);
    } else if (nav.previous !== null) {
      event.preventDefault();
      router.navigate(nav.previous);
    }
  };

  $effect(() => visualCache.preloadWhenIdle(run.order.slice(index + 1, index + 1 + PRELOAD_AHEAD)));

  onDestroy(() => {
    actionsSettle.dispose();
  });
</script>

<svelte:window {onkeydown} />

<article class="quiz" aria-labelledby="quiz-heading">
  <header class="quiz__intro">
    <div class="quiz__card">
      <div class="quiz__meta">
        <span class="quiz__position">{position}</span>
        <KindBadge kind={quiz.kind} {several} />
      </div>
      <h1 id="quiz-heading" class="quiz__heading" tabindex="-1" bind:this={heading}>
        {pick(QUESTION_HEADINGS[quiz.kind])}<span class="visually-hidden"> {position}</span>
      </h1>
      <p class="quiz__scenario">{quiz.scenario}</p>
    </div>
    {#if mode === "answer"}
      <ShortcutHint optionCount={quiz.kind === "hotspot" ? 0 : options.length} ondismiss={focusHeading} />
    {/if}
  </header>

  <div class="quiz__stage" data-motion={motionGated && motionPlaying ? "play" : undefined}>
    <QuizStage {quiz} {options} {answer} label="Question {index + 1}" onselect={toggle} />
    {#if motionGated}
      <MotionToggle playing={motionPlaying} ontoggle={toggleMotion} />
    {/if}
  </div>

  <section class="quiz__panel" aria-label={t("Answer", "Réponse")}>
    {#if quiz.kind === "hotspot"}
      <SelectionSummary prompt={quiz.prompt} labels={selectedLabels} {several} />
    {:else if quiz.kind === "compare"}
      <p class="quiz__prompt">{quiz.prompt}</p>
    {:else}
      <ChoiceList {quiz} choices={options} {answer} ontoggle={toggle} />
    {/if}

    <!--suppress HtmlUnknownAttribute -->
    <div class="quiz__actions" onclickcapture={actionsSettle.guard} onmousedowncapture={actionsSettle.guard}>
      {#if nav.previous !== null}
        <Button variant="ghost" href={nav.previous} iconStart="arrow-left">{t("Previous", "Précédente")}</Button>
      {/if}
      <span class="quiz__spacer"></span>
      {#if !answer.submitted}
        <Button variant="primary" disabled={answer.selected.length === 0} onclick={check}>
          {checkLabel}
        </Button>
      {:else}
        <Button variant="primary" href={nav.next} iconEnd="arrow-right" bind:element={nextButton}
          >{nav.nextLabel}</Button
        >
      {/if}
    </div>

    {#if answer.submitted}
      {@const results: HotspotResults | null = hotspotResults(quiz, answer)}
      <AnswerReveal {quiz} correct={isCorrect(quiz, answer)} {results} {several} />
    {/if}

    <p class="visually-hidden" role="status" aria-live="polite">{announcement}</p>
  </section>
</article>

<style lang="scss">
  @use "$styles/mixins" as *;

  .quiz {
    display: grid;
    grid-template-areas: "intro" "stage" "panel";
    gap: var(--space-5);
    align-items: start;

    @include up(lg) {
      grid-template-areas: "stage intro" "stage panel";
      grid-template-columns: minmax(0, 1.5fr) minmax(400px, 1fr);
      grid-template-rows: auto 1fr;
      column-gap: var(--space-7);
    }

    &__stage {
      grid-area: stage;

      @include up(lg) {
        position: sticky;
        top: calc(var(--header-height) + var(--space-6));
      }
    }

    &__intro,
    &__panel {
      width: 100%;
      max-width: 720px;

      @include up(lg) {
        max-width: none;
      }
    }

    &__panel {
      grid-area: panel;
      display: grid;
      gap: var(--space-5);
    }

    &__meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-3);
    }

    &__card {
      display: grid;
      gap: var(--space-3);
      padding: var(--space-5);
      border-radius: var(--radius-xl);
      background: var(--brand-gradient-deep);
      color: var(--on-brand);
      box-shadow: var(--shadow-md);
    }

    &__position {
      color: var(--brand-yellow);
      // noinspection CssNoGenericFontName
      font-family: var(--font-display);
      font-size: var(--text-md);
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    &__intro {
      grid-area: intro;
      display: grid;
    }

    &__heading {
      font-size: clamp(1.5rem, 2.6vw, 2rem);
      font-weight: 700;
    }

    &__prompt {
      font-size: var(--text-lg);
      font-weight: 600;
      line-height: 1.35;
    }

    &__scenario {
      line-height: 1.6;
    }

    &__card &__scenario {
      color: var(--on-brand-muted);
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-3);
      user-select: none;
    }

    &__spacer {
      flex: 1;
    }
  }
</style>
