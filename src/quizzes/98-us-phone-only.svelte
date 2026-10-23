<script lang="ts">
  import { BrandTheme, Field, MockButton } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="corporate">
  <div class="card">
    <p class="card__title">{t("Delivery contact", "Contact pour la livraison")}</p>
    <Field label={t("Full name", "Nom complet")} value="Léa Martin" />
    <Field
      label={t("Mobile phone", "Téléphone portable")}
      value="06 12 34 56 78"
      state="error"
      message={t(
        "Please enter a valid phone number, e.g. (555) 123-4567.",
        "Veuillez saisir un numéro de téléphone valide, ex. : (555) 123-4567."
      )}
    />
    <MockButton variant="primary" block>{t("Continue to payment", "Continuer vers le paiement")}</MockButton>
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
