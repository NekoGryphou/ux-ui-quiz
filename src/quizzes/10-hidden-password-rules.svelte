<script lang="ts">
  import { BrandTheme, BrowserShell, Field, MockButton, Title } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="playful">
  <BrowserShell url="accounts.fitnest.app/create">
    <div class="page">
      <div class="form">
        <Title>{t("Create your password", "Créez votre mot de passe")}</Title>
        <p class="account">{t("Signing up as", "Inscription avec")} <strong>sam.ortiz@mail.com</strong></p>
        <Field
          label={t("Password", "Mot de passe")}
          type="password"
          value="sunsetrun"
          state="error"
          message={t("Password doesn’t meet requirements.", "Le mot de passe ne respecte pas les exigences.")}
        />
        <Field label={t("Confirm password", "Confirmer le mot de passe")} type="password" value="sunsetrun" />
        <MockButton variant="primary" block>{t("Create account", "Créer un compte")}</MockButton>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .account {
    margin: -6px 0 2px;
    color: var(--mock-muted);

    strong {
      color: var(--mock-text);
      font-weight: 500;
    }
  }

  .page {
    display: grid;
    place-items: center;
    padding: 32px 20px;
  }

  .form {
    display: grid;
    gap: 14px;
    width: min(100%, 340px);
  }
</style>
