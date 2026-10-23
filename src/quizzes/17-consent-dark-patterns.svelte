<script lang="ts">
  import { BrandTheme, BrowserShell, Checkbox, Field, MockButton, Title } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="playful">
  <BrowserShell url="app.billfold.io/signup">
    <div class="page">
      <div class="form">
        <Title>{t("Create your account", "Créez votre compte")}</Title>
        <Field label={t("Full name", "Nom complet")} value="Priya Nair" />
        <Field label={t("Work email", "E-mail professionnel")} value="priya@nairstudio.com" />
        <Field label={t("Password", "Mot de passe")} type="password" value="correcthorse" />
        <div class="consents">
          <Checkbox
            checked
            label={t(
              "Send me product tips and offers from partners",
              "Recevoir des conseils produit et des offres de partenaires"
            )}
          />
          <Checkbox
            checked
            label={t(
              "Share my usage data to improve recommendations",
              "Partager mes données d’usage pour améliorer les recommandations"
            )}
          />
        </div>
        <MockButton variant="primary" block>{t("Create account", "Créer un compte")}</MockButton>
        <p class="terms">
          {t(
            "By creating an account you agree to our Terms and Privacy Policy.",
            "En créant un compte, vous acceptez nos CGU et notre politique de confidentialité."
          )}
        </p>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    place-items: center;
    padding: 26px 20px;
  }

  .form {
    display: grid;
    gap: 12px;
    width: min(100%, 360px);
  }

  .consents {
    display: grid;
    gap: 10px;
    padding: 4px 0;
  }

  .terms {
    color: var(--mock-muted);
    font-size: 11px;
    text-align: center;
  }
</style>
