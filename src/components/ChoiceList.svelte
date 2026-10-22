<script lang="ts">
    import type {ChoiceOutcome} from "../engine/types/quiz.types";
    import {choiceOutcome} from "../engine/utils/scoring.utils";
    import Icon from "./Icon.svelte";
    import type {ChoiceListProps} from "./types/choice-list.types";
    import {outcomeLabel} from "./utils/choice.utils";

    let { quiz, choices, answer, ontoggle }: ChoiceListProps = $props();

  const isMultiple: boolean = $derived(quiz.kind === "multiple");
</script>

<fieldset class="choices" class:choices--multiple={isMultiple} disabled={answer.submitted}>
  <legend class="choices__legend">{quiz.prompt}</legend>

  {#each choices as choice (choice.id)}
    {@const outcome: ChoiceOutcome = choiceOutcome(quiz, answer, choice.id)}
    {@const selected: boolean = answer.selected.includes(choice.id)}
    <label class="choice choice--{outcome}" class:choice--selected={selected} class:choice--locked={answer.submitted}>
      <input
        class="choice__input"
        type={isMultiple ? "checkbox" : "radio"}
        name="quiz-{quiz.id}"
        value={choice.id}
        checked={selected}
        onchange={(): void => {
          ontoggle(choice.id);
        }}
      />
      <span class="control" class:control--box={isMultiple} aria-hidden="true">
        {#if outcome === "correct" || outcome === "missed"}
          <Icon name="check" size={12} strokeWidth={3.5} />
        {:else if outcome === "wrong"}
          <Icon name="x" size={12} strokeWidth={3.5} />
        {:else if selected && isMultiple}
          <Icon name="check" size={12} strokeWidth={3.5} />
        {:else if selected}
          <span class="control__dot"></span>
        {/if}
      </span>
      <span class="choice__text">{choice.text}</span>
      {#if outcome !== "neutral"}
        <span class="choice__tag">{outcomeLabel(outcome, isMultiple)}</span>
      {/if}
    </label>
  {/each}
</fieldset>

<style lang="scss">
  @use "$styles/mixins" as *;

  .choices {
    --select: var(--primary);
    --select-soft: var(--primary-soft);
    --on-select: var(--on-primary);
    display: grid;
    gap: var(--space-3);
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;

    &--multiple {
      --select: var(--multi);
      --select-soft: var(--multi-soft);
      --on-select: var(--on-multi);
    }

    &__legend {
      margin-bottom: var(--space-2);
      padding: 0;
      font-size: var(--text-lg);
      font-weight: 600;
      line-height: 1.35;
    }
  }

  .choice {
    --accent: var(--select);
    --accent-soft: var(--select-soft);
    --on-accent: var(--on-select);
    --edge: var(--accent);
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
    border: var(--card-border) solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    box-shadow: var(--shadow-card);
    cursor: pointer;
    transition:
      border-color var(--duration) var(--ease),
      background-color var(--duration) var(--ease),
      box-shadow var(--duration) var(--ease),
      opacity var(--duration) var(--ease);

    &:hover:not(.choice--locked, .choice--selected) {
      border-color: var(--border-strong);

      .control {
        border-color: var(--accent);
      }
    }

    &:has(:focus-visible) {
      @include card-focus-ring;
    }

    &__input {
      @include visually-hidden;
    }

    &__text {
      flex: 1;
      font-size: var(--text-sm);
      line-height: 1.5;

      @include up(md) {
        font-size: var(--text-md);
      }
    }

    &__tag {
      @include pill;
      position: absolute;
      top: 0;
      right: var(--space-3);
      padding-block: 1px;
      background: var(--accent);
      color: var(--on-accent);
      transform: translateY(-50%);
    }

    &--selected,
    &--correct,
    &--wrong {
      box-shadow:
        -5px 5px 0 var(--edge),
        0 10px 24px color-mix(in srgb, var(--edge) 28%, transparent);
    }

    &--selected {
      border-color: var(--accent);
      background: var(--accent-soft);
    }

    &--locked {
      cursor: default;
    }

    &--correct,
    &--missed {
      --accent: var(--success);
      --accent-soft: var(--success-soft);
      --on-accent: var(--on-success);
      border-color: var(--accent);
      background: var(--accent-soft);
    }

    &--missed {
      border-style: dashed;
    }

    &--wrong {
      --accent: var(--danger);
      --accent-soft: var(--danger-soft);
      --on-accent: var(--on-danger);
    }

    // noinspection CssUnusedSymbol
    &--locked.choice--neutral {
      border-color: var(--border);
      background: var(--surface-2);

      .choice__text {
        color: var(--text-muted);
      }
    }
  }

  .control {
    display: grid;
    flex: none;
    place-items: center;
    width: 20px;
    height: 20px;
    margin-top: 1px;
    border: 2px solid var(--control-border);
    border-radius: 50%;
    background: var(--surface);
    color: var(--on-accent);
    transition:
      border-color var(--duration) var(--ease),
      background-color var(--duration) var(--ease);

    &--box {
      border-radius: 5px;
    }

    &__dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent);
    }

    .choice--selected & {
      border-color: var(--accent);
    }

    .choice--selected &--box,
    .choice--correct &,
    .choice--wrong & {
      border-color: var(--accent);
      background: var(--accent);
    }

    .choice--missed & {
      border-color: var(--accent);
      border-style: dashed;
      color: var(--accent);
    }
  }
</style>
