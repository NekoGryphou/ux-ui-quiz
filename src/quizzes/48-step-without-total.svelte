<script lang="ts">
    import {AppBar, BrandTheme, Checkbox, Field, MockButton, PhoneShell} from "../mock";
</script>

<BrandTheme brand="playful">
  <PhoneShell>
    <AppBar title="Delivery" back />
    <div class="screen">
      <p class="step">Step 2</p>
      <Field label="Street address" value="12 rue des Lilas" />
      <div class="pair">
        <Field label="Postcode" value="75011" />
        <Field label="City" value="Paris" />
      </div>
      <div class="options">
        <p class="options__title">Delivery method</p>
        <Checkbox radio label="Standard · 3–5 days · Free" checked />
        <Checkbox radio label="Express · next day · €6.90" />
      </div>
      <div class="footer">
        <MockButton variant="primary" block>Continue</MockButton>
      </div>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .screen {
    display: grid;
    align-content: start;
    gap: 14px;
    min-height: 520px;
    padding: 4px 18px 20px;
  }

  .step {
    color: var(--mock-muted);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .pair {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 10px;
  }

  .options {
    display: grid;
    gap: 10px;

    &__title {
      font-weight: 600;
    }
  }

  .footer {
    margin-top: auto;
    padding-top: 40px;
  }
</style>
