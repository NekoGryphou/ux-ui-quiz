<script lang="ts">
    import {BrandTheme, Field, MockButton} from "../mock";

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
