<script lang="ts">
  import Icon from "../components/Icon.svelte";
  import type { StepperProps } from "./types/stepper.types";

  let { steps }: StepperProps = $props();
</script>

<ol class="stepper">
  {#each steps as step, i (i)}
    <li class="stepper__step stepper__step--{step.state}">
      <span class="stepper__dot">
        {#if step.state === "complete"}<Icon name="check" size={12} strokeWidth={3} />{:else}{i + 1}{/if}
      </span>
      <span class="stepper__label">{step.label}</span>
    </li>
  {/each}
</ol>

<style lang="scss">
  @use "$styles/mixins" as *;

  .stepper {
    display: flex;
    gap: 8px;
    @include list-reset;

    &__step {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 8px;
      color: var(--mock-muted);
      font-weight: 500;

      &:not(:last-child)::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--mock-border);
      }

      &:last-child {
        flex: none;
      }
    }

    &__dot {
      display: grid;
      flex: none;
      place-items: center;
      width: 22px;
      height: 22px;
      border: 1.5px solid var(--mock-border);
      border-radius: 50%;
      background: var(--mock-surface);
      font-size: 11px;
    }

    &__step--complete &__dot {
      border-color: var(--mock-primary);
      background: var(--mock-primary);
      color: var(--mock-on-accent);
    }

    &__step--current {
      color: var(--mock-text);
    }

    &__step--current &__dot {
      border-color: var(--mock-primary);
      color: var(--mock-primary);
    }

    &__label {
      white-space: nowrap;
    }
  }
</style>
