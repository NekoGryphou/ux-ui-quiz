<script lang="ts">
    import {BrandTheme, Field, MockButton} from "../mock";
</script>

<BrandTheme brand="corporate">
  <div class="card">
    <p class="card__title">Delivery contact</p>
    <Field label="Full name" value="Léa Martin" />
    <Field
      label="Mobile phone"
      value="06 12 34 56 78"
      state="error"
      message="Please enter a valid phone number, e.g. (555) 123-4567."
    />
    <MockButton variant="primary" block>Continue to payment</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 14px;
    width: 320px;
    padding: 22px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);

    &__title {
      font-size: 16px;
      font-weight: 600;
    }
  }
</style>
