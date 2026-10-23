<script lang="ts">
  import { Alert, BrandTheme, Field, MockButton } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="fintech">
  <div class="bank">
    <div class="card">
      <p class="card__logo">◆ Northbank</p>
      <p class="card__title">{t("Sign in", "Connexion")}</p>
      <Field label={t("Customer number", "Numéro client")} value="0048 2291 7735" />
      <Field label={t("Password", "Mot de passe")} type="password" value="" state="focus" />
      <Alert
        tone="warning"
        title={t("Pasting is not allowed", "Le collage n’est pas autorisé")}
        body={t(
          "For your security, please type your password.",
          "Pour votre sécurité, veuillez saisir votre mot de passe."
        )}
      />
      <MockButton variant="primary" block>{t("Sign in", "Se connecter")}</MockButton>
      <span class="card__link">{t("Forgot password?", "Mot de passe oublié ?")}</span>
    </div>
    <div class="side">
      <p class="side__title">{t("Banking that keeps up with you", "La banque qui suit votre rythme")}</p>
      <p>
        {t(
          "Instant transfers, card controls and savings goals in one place.",
          "Virements instantanés, contrôle de la carte et objectifs d’épargne réunis au même endroit."
        )}
      </p>
    </div>
  </div>
</BrandTheme>

<style lang="scss">
  .bank {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 28px;
    align-items: center;
    width: 620px;
    padding: 28px;
    border-radius: var(--mock-radius-card);
    background: var(--mock-bg);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);
  }

  .card {
    display: grid;
    gap: 14px;
    padding: 22px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    &__logo {
      color: var(--mock-primary);
      font-weight: 600;
    }

    &__title {
      font-size: 20px;
      font-weight: 600;
    }

    &__link {
      color: var(--mock-primary);
      font-size: 12px;
      text-align: center;
    }
  }

  .side {
    display: grid;
    gap: 8px;
    color: var(--mock-muted);

    &__title {
      color: var(--mock-text);
      font-size: 20px;
      font-weight: 600;
      line-height: 1.2;
    }
  }
</style>
