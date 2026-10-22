<script lang="ts">
    import {BrandTheme, Field, MockButton} from "../mock";
</script>

<BrandTheme brand="luxury">
  <div class="card">
    <p class="card__step">Step 1 of 4 · Personal details</p>
    <p class="card__title">Welcome to Northwind!</p>
    <div class="pair">
      <Field label="First name" value="Sukarni" required />
      <Field label="Last name" state="error" required message="Last name is required." />
    </div>
    <Field label="Preferred name" placeholder="Optional" />
    <MockButton variant="primary" block>Next</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 14px;
    width: 420px;
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
      font: 500 20px/1.2 var(--mock-heading-font);
    }
  }

  .pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
</style>
