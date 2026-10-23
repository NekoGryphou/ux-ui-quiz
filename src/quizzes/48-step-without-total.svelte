<script lang="ts">
  import { AppBar, BrandTheme, Checkbox, Field, MockButton, PhoneShell } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="playful">
  <PhoneShell>
    <AppBar title={t("Delivery", "Livraison")} back />
    <div class="screen">
      <p class="step">{t("Step 2", "Étape 2")}</p>
      <Field label={t("Street address", "Adresse")} value="12 rue des Lilas" />
      <div class="pair">
        <Field label={t("Postcode", "Code postal")} value="75011" />
        <Field label={t("City", "Ville")} value="Paris" />
      </div>
      <div class="options">
        <p class="options__title">{t("Delivery method", "Mode de livraison")}</p>
        <Checkbox radio label={t("Standard · 3–5 days · Free", "Standard · 3 à 5 jours · Gratuit")} checked />
        <Checkbox radio label={t("Express · next day · €6.90", "Express · lendemain · 6,90 €")} />
      </div>
      <div class="footer">
        <MockButton variant="primary" block>{t("Continue", "Continuer")}</MockButton>
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
