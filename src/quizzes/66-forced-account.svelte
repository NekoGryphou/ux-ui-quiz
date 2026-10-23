<script lang="ts">
  import { BrandTheme, Checkbox, Field, MockButton, Photo } from "../mock";
  import { t } from "../shared/locale.svelte";
  import { PHOTO_CANDLES } from "./const/photo.const";
</script>

<BrandTheme brand="luxury">
  <div class="checkout">
    <div class="form">
      <p class="form__step">{t("Checkout", "Commande")}</p>
      <p class="form__title">
        {t("Create your Maison Lune account to continue", "Créez votre compte Maison Lune pour continuer")}
      </p>
      <Field label={t("First name", "Prénom")} value="Camille" />
      <Field label={t("Email", "E-mail")} value="camille@example.com" />
      <Field
        label={t("Choose a password", "Choisissez un mot de passe")}
        type="password"
        hint={t("At least 8 characters", "8 caractères minimum")}
      />
      <Checkbox
        label={t(
          "I accept the terms and the Maison Lune newsletter",
          "J’accepte les conditions et la newsletter Maison Lune"
        )}
      />
      <MockButton variant="primary" block>{t("Create account & continue", "S’inscrire et continuer")}</MockButton>
      <span class="form__link">{t("Already a member? Sign in", "Déjà membre ? Se connecter")}</span>
    </div>
    <aside class="summary">
      <p class="summary__title">{t("Your order", "Votre commande")}</p>
      <div class="summary__item">
        <i><Photo src={PHOTO_CANDLES.url} /></i><span
          >{t("Figue noire candle", "Bougie Figue noire")}<br /><small>220 g</small></span
        ><strong>{t("€24", "24 €")}</strong>
      </div>
      <div class="summary__row"><span>{t("Gift wrap", "Emballage cadeau")}</span><span>{t("€0", "0 €")}</span></div>
      <div class="summary__row summary__row--total"><span>Total</span><span>{t("€24", "24 €")}</span></div>
    </aside>
  </div>
</BrandTheme>

<style lang="scss">
  .checkout {
    display: grid;
    grid-template-columns: 1fr 220px;
    gap: 22px;
    width: 620px;
    padding: 26px;
    border-radius: var(--mock-radius-card);
    background: var(--mock-bg);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);
  }

  .form {
    display: grid;
    gap: 14px;

    &__step {
      color: var(--mock-muted);
      font-size: 11px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    &__title {
      font: 500 20px/1.25 var(--mock-heading-font);
    }

    &__link {
      color: var(--mock-muted);
      font-size: 12px;
      text-align: center;
    }
  }

  .summary {
    display: grid;
    align-content: start;
    gap: 12px;
    padding: 16px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    &__title {
      font: 500 15px/1 var(--mock-heading-font);
    }

    &__item {
      display: grid;
      grid-template-columns: 40px 1fr auto;
      align-items: center;
      gap: 10px;

      i {
        overflow: hidden;
        width: 40px;
        height: 48px;
        border-radius: var(--mock-radius);
        background: linear-gradient(180deg, #2b2b2b, #5a4a3a);
      }

      small {
        color: var(--mock-muted);
      }
    }

    &__row {
      display: flex;
      justify-content: space-between;
      color: var(--mock-muted);

      &--total {
        padding-top: 10px;
        border-top: 1px solid var(--mock-border);
        color: var(--mock-text);
        font-weight: 600;
      }
    }
  }
</style>
