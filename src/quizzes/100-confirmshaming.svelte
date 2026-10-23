<script lang="ts">
  import { BrandTheme } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="playful">
  <div class="page">
    <div class="mascot" aria-hidden="true"><span>🥺</span></div>
    <p class="page__title">
      {t("Wait… are you sure you want to leave us?", "Attendez… vous voulez vraiment nous quitter ?")}
    </p>
    <p class="page__copy">
      {t(
        "You’ll miss exclusive deals, early access and up to 40% off your favourite brands.",
        "Vous allez manquer des offres exclusives, des avant-premières et jusqu’à 40 % de réduction sur vos marques préférées."
      )}
    </p>
    <span class="page__keep">{t("Keep me in the loop!", "Je veux rester au courant !")}</span>
    <span class="page__alt">{t("Send me fewer emails instead", "Plutôt recevoir moins d’e-mails")}</span>
    <span class="page__leave"
      >{t("No thanks, I don’t like saving money", "Non merci, je n’aime pas faire des économies")}</span
    >
  </div>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    justify-items: center;
    gap: 12px;
    width: 340px;
    padding: 30px 26px;
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    color: var(--mock-text);
    text-align: center;
    box-shadow: var(--mock-shadow-md);

    &__title {
      font-size: 20px;
      font-weight: 800;
      line-height: 1.2;
    }

    &__copy {
      color: var(--mock-muted);
    }

    &__keep {
      width: 100%;
      margin-top: 8px;
      padding: 14px;
      border-radius: 999px;
      background: var(--mock-primary);
      color: var(--mock-primary-text);
      font-weight: 800;
    }

    &__alt {
      color: var(--mock-primary);
      font-weight: 700;
    }

    &__leave {
      color: #9b8f95;
      font-size: 11px;
      text-decoration: underline;
    }
  }

  .mascot {
    display: grid;
    place-items: center;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: var(--mock-primary-soft);
    font-size: 40px;
  }
</style>
