<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "year-dropdown",
    title: "Scroll back to 1987",
    principle: "Pick input controls that fit the data",
    scenario: "A new customer fills in their date of birth on a car insurance quote form, on their laptop.",
    prompt: "What is the main issue with this form?",
    kind: "single",
    choices: [
      {
        id: "a",
        text: "The birth year is a dropdown starting at 1900, so most people scroll past ninety years first."
      },
      { id: "b", text: "Day, month and year are three separate fields, where a single text field would look tidier." },
      { id: "c", text: "The months are listed as names, where numbers from 1 to 12 would make the list shorter." },
      { id: "d", text: "The form asks for the date of birth first, where the car details would be a gentler start." }
    ],
    correct: ["a"],
    explanation: [
      "A known date of birth is typed in a second, but here the year hides in a 125-item list that opens at 1900: everyone scrolls through decades, overshoots and scrolls back. Dropdowns are slow for long, familiar values.",
      "Use plain text fields for dates people know by heart (day, month, year with the right keyboard), and keep dropdowns or pickers for short lists or dates people need to look up.",
      "Separate day, month and year fields are a recommended pattern, month names avoid confusion, and insurers need the birth date to price a quote."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, Field, MockButton } from "../mock";

  const years: number[] = Array.from({ length: 7 }, (_, i) => 1900 + i);
</script>

<BrandTheme brand="corporate">
  <div class="quote">
    <p class="quote__step">Step 1 of 3 · About you</p>
    <p class="quote__title">Get your car insurance quote</p>
    <Field label="Full name" value="Jordan Lefèvre" />
    <div class="dob">
      <span class="dob__label">Date of birth</span>
      <div class="dob__row">
        <Field type="select" value="14" />
        <Field type="select" value="March" />
        <div class="dob__open">
          <Field type="select" value="Year" state="focus" />
          <div class="list">
            {#each years as year (year)}
              <span class="list__item" class:list__item--active={year === 1900}>{year}</span>
            {/each}
            <span class="list__more">⋮</span>
          </div>
        </div>
      </div>
    </div>
    <MockButton variant="primary">Continue</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .quote {
    display: grid;
    gap: 14px;
    width: 460px;
    min-height: 480px;
    align-content: start;
    padding: 24px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);

    &__step {
      color: var(--mock-muted);
      font-size: 12px;
    }

    &__title {
      font-size: 18px;
      font-weight: 600;
    }

    :global(.btn) {
      justify-self: start;
    }
  }

  .dob {
    display: grid;
    gap: 6px;

    &__label {
      font-weight: 500;
    }

    &__row {
      display: grid;
      grid-template-columns: 70px 1fr 110px;
      gap: 10px;
    }

    &__open {
      position: relative;
    }
  }

  .list {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    left: 0;
    z-index: 2;
    display: grid;
    padding: 4px 0;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius);
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);

    &__item {
      padding: 4px 12px;

      &--active {
        background: var(--mock-primary);
        color: var(--mock-primary-text);
      }
    }

    &__more {
      padding: 0 12px;
      color: var(--mock-muted);
    }
  }
</style>
