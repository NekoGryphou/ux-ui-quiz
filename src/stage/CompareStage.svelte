<script lang="ts">
  import { outcomeLabel } from "../components/utils/choice.utils";
  import type { ChoiceOutcome } from "../engine/types/quiz.types";
  import { choiceOutcome } from "../engine/utils/scoring.utils";
  import type { CompareStageProps } from "./types/compare-stage.types";
  import { isFromControl, positionLetter } from "./utils/compare.utils";
  import VisualStage from "./VisualStage.svelte";

  let { quiz, visual, options, answer, onselect }: CompareStageProps = $props();

  /**
   * @private
   * @desc Selects a version when its card is clicked, ignoring clicks on inner controls and after submission.
   *
   * @param event - Click event.
   * @param id - Version id.
   */
  const pickFromCard = (event: MouseEvent, id: string): void => {
    if (answer.submitted || isFromControl(event)) return;
    onselect(id);
  };
</script>

<fieldset class="compare" class:compare--stacked={quiz.layout === "stacked"} disabled={answer.submitted}>
  <legend class="visually-hidden">{quiz.prompt}</legend>
  {#each options as option, index (option.id)}
    {@const outcome: ChoiceOutcome = choiceOutcome(quiz, answer, option.id)}
    {@const selected: boolean = answer.selected.includes(option.id)}
    <div
      class="compare__card compare__card--{outcome}"
      class:compare__card--selected={selected}
      role="presentation"
      onclick={(event: MouseEvent): void => {
        pickFromCard(event, option.id);
      }}
    >
      <label class="compare__head">
        <input
          class="compare__input"
          type="radio"
          name="compare-{quiz.id}"
          value={option.id}
          checked={selected}
          onchange={(): void => {
            onselect(option.id);
          }}
        />
        <span class="compare__control" aria-hidden="true"></span>
        <span class="compare__letter">Version {positionLetter(index)}</span>
        {#if outcome !== "neutral"}
          <span class="compare__tag">{outcomeLabel(outcome, false)}</span>
        {/if}
      </label>
      <VisualStage {visual} variant={option.id} label="Version {positionLetter(index)}" compact />
    </div>
  {/each}
</fieldset>

<style lang="scss">
  @use "$styles/mixins" as *;

  .compare {
    display: grid;
    gap: var(--space-4);
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;

    @include up(sm) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    &--stacked {
      @include up(sm) {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    &__card {
      --accent: var(--compare);
      --accent-soft: var(--compare-soft);
      --edge: var(--compare-edge);
      display: grid;
      grid-template-rows: auto 1fr;
      gap: var(--space-3);
      padding: var(--space-3);
      border: var(--card-border) solid var(--border);
      border-radius: var(--radius-xl);
      background: var(--surface);
      box-shadow: var(--shadow-card);
      cursor: pointer;
      transition:
        border-color var(--duration) var(--ease),
        box-shadow var(--duration) var(--ease);

      &:hover:not(&--selected) {
        border-color: var(--border-strong);
      }

      &:has(:focus-visible) {
        @include card-focus-ring;
      }

      &--selected {
        border-color: var(--edge);
        background: var(--accent-soft);
        box-shadow:
          -6px 6px 0 var(--edge),
          0 12px 28px color-mix(in srgb, var(--edge) 28%, transparent);
      }

      &--correct,
      &--missed {
        --accent: var(--success);
        --accent-soft: var(--success-soft);
        --edge: var(--success);
        border-color: var(--accent);
      }

      &--correct,
      &--wrong {
        box-shadow:
          -6px 6px 0 var(--edge),
          0 12px 28px color-mix(in srgb, var(--edge) 28%, transparent);
      }

      &--missed {
        border-style: dashed;
      }

      &--wrong {
        --accent: var(--danger);
        --accent-soft: var(--danger-soft);
        --edge: var(--danger);
        border-color: var(--accent);
      }
    }

    &:disabled &__card {
      cursor: default;
    }

    &__head {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: 0 var(--space-1);
      font-weight: 600;
      cursor: inherit;
    }

    &__input {
      @include visually-hidden;
    }

    &__control {
      display: grid;
      flex: none;
      place-items: center;
      width: 20px;
      height: 20px;
      border: 2px solid var(--control-border);
      border-radius: 50%;
      background: var(--surface);
    }

    &__card--selected &__control,
    &__card--correct &__control,
    &__card--wrong &__control {
      border-color: var(--edge);
      box-shadow: inset 0 0 0 4px var(--surface);
      background: var(--edge);
    }

    &__letter {
      flex: 1;
    }

    &__tag {
      @include pill;
      background: var(--accent);
      color: var(--on-success);
    }

    &__card--wrong &__tag {
      color: var(--on-danger);
    }
  }
</style>
