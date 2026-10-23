<script lang="ts">
  import { BrandTheme, BrowserShell, MockButton } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="eco">
  <BrowserShell url="pulsegym.com/account/membership">
    <div class="page">
      <p class="page__title">{t("Your membership", "Votre abonnement")}</p>
      <div class="plan">
        <strong>{t("Premium · €39.90/month", "Premium · 39,90 €/mois")}</strong>
        <span
          >{t(
            "Member since March 2024 · next payment 1 Dec",
            "Membre depuis mars 2024 · prochain prélèvement le 1er déc."
          )}</span
        >
      </div>
      <div class="pause">
        <strong>{t("Need a break?", "Besoin d’une pause ?")}</strong>
        <span>{t("Pause your membership for up to 3 months.", "Suspendez votre abonnement jusqu’à 3 mois.")}</span>
        <MockButton variant="primary">{t("Pause membership", "Suspendre l’abonnement")}</MockButton>
      </div>
      <div class="cancel">
        <strong>{t("Want to cancel?", "Vous souhaitez résilier ?")}</strong>
        <span>
          {t("To cancel, please call our member services on", "Pour résilier, appelez notre service adhérents au")}
          <b>0 800 123 456</b>{t(
            ", Monday to Friday, 10:00–16:00. Please have your member number ready.",
            ", du lundi au vendredi, de 10 h à 16 h. Munissez-vous de votre numéro d’adhérent."
          )}
        </span>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 14px;
    padding: 24px 28px;

    &__title {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .plan,
  .pause,
  .cancel {
    display: grid;
    gap: 6px;
    padding: 14px 16px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    span {
      color: var(--mock-muted);
    }
  }

  // noinspection CssUnusedSymbol
  .pause :global(.btn) {
    justify-self: start;
    margin-top: 4px;
  }
</style>
