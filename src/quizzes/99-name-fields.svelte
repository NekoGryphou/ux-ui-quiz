<script lang="ts">
  import { BrandTheme, Field, MockButton } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="luxury">
  <div class="card">
    <p class="card__step">{t("Step 1 of 4 · Personal details", "Étape 1 sur 4 · Informations personnelles")}</p>
    <p class="card__title">{t("Welcome to Northwind!", "Bienvenue chez Northwind !")}</p>
    <div class="pair">
      <Field label={t("First name", "Prénom")} value="Sukarni" required />
      <Field
        label={t("Last name", "Nom")}
        state="error"
        required
        message={t("Last name is required.", "Le nom est obligatoire.")}
      />
    </div>
    <Field label={t("Preferred name", "Prénom d’usage")} placeholder={t("Optional", "Facultatif")} />
    <MockButton variant="primary" block>{t("Next", "Suivant")}</MockButton>
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
