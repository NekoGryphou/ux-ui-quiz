<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme, Field, MockButton } from "../mock";
  import { t } from "../shared/locale.svelte";

  let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="editorial">
  <div class="card">
    <p class="title">{t("Create your account", "Créez votre compte")}</p>
    <Field label={t("Full name", "Nom complet")} value="Camille Durand" />
    {#if variant === "a"}
      <Field
        label={t("Email", "E-mail")}
        value="camille.du"
        state="error"
        message={t("Enter a valid email address.", "Saisissez une adresse e-mail valide.")}
      />
    {:else}
      <Field label={t("Email", "E-mail")} value="camille.du" state="focus" />
    {/if}
    <Field
      label={t("Password", "Mot de passe")}
      type="password"
      placeholder={t("At least 8 characters", "8 caractères minimum")}
    />
    <MockButton variant="primary" block>{t("Create account", "Créer un compte")}</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 14px;
    width: 300px;
    padding: 20px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
    color: var(--mock-text);
    font-size: 13px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }
</style>
