<script lang="ts">
  import { RetroButton, RetroWindow } from "../mock";
  import { t } from "../shared/locale.svelte";

  const extras: string[] = $derived([
    t("Install SearchMaster Pro toolbar (recommended)", "Installer la barre d’outils SearchMaster Pro (recommandé)"),
    t("Set SearchMaster as my homepage", "Définir SearchMaster comme page d’accueil"),
    t("Make SearchMaster my default search engine", "Utiliser SearchMaster comme moteur de recherche par défaut")
  ]);
</script>

<RetroWindow title={t("Setup - FreePDF Reader 7.0", "Installation - FreePDF Reader 7.0")} width={460}>
  <div class="wizard">
    <div class="wizard__side">
      <span class="wizard__logo">PDF</span>
    </div>
    <div class="wizard__body">
      <p class="wizard__step">{t("Step 3 of 5", "Étape 3 sur 5")}</p>
      <p class="wizard__title">{t("Get the most from FreePDF!", "Profitez au maximum de FreePDF !")}</p>
      <p>
        {t(
          "Enhance your experience with these great free tools from our partners.",
          "Améliorez votre expérience avec ces super outils gratuits de nos partenaires."
        )}
      </p>
      {#each extras as extra (extra)}
        <span class="check"><span class="check__box">✓</span>{extra}</span>
      {/each}
      <small
        >{t(
          "By clicking Next you accept the partner terms of use.",
          "En cliquant sur Suivant, vous acceptez les conditions d’utilisation des partenaires."
        )}</small
      >
    </div>
  </div>
  <div class="actions">
    <RetroButton>{t("< Back", "< Précédent")}</RetroButton>
    <RetroButton primary>{t("Next >", "Suivant >")}</RetroButton>
    <RetroButton>{t("Cancel", "Annuler")}</RetroButton>
  </div>
</RetroWindow>

<style lang="scss">
  @use "$styles/mock-mixins" as *;

  .wizard {
    display: grid;
    grid-template-columns: 110px 1fr;
    min-height: 220px;
    background: #ffffff;

    &__side {
      display: grid;
      place-items: center;
      background: linear-gradient(180deg, #8b0000, #d11a1a);
    }

    &__logo {
      color: #ffffff;
      font:
        900 26px/1 Arial,
        sans-serif;
    }

    &__body {
      display: grid;
      align-content: start;
      gap: 6px;
      padding: 12px;
      font: 11px/1.4 var(--mock-retro-font);

      small {
        color: #555555;
        font-size: 9px;
      }
    }

    &__step {
      color: #555555;
    }

    &__title {
      font-size: 13px;
      font-weight: 700;
    }
  }

  .check {
    display: flex;
    align-items: center;
    gap: 6px;

    &__box {
      display: grid;
      place-items: center;
      width: 13px;
      height: 13px;
      @include retro-sunken;
      font-size: 10px;
      font-weight: 700;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 6px;
    padding: 8px 4px 2px;
  }
</style>
