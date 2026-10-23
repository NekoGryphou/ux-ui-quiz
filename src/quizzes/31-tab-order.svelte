<script lang="ts">
  import { BrandTheme, BrowserShell, KeyboardSandbox, KeyTarget, MockButton } from "../mock";
  import type { KeyStop } from "../mock/types/keyboard.types";
  import { t } from "../shared/locale.svelte";

  const links: string[] = $derived([
    t("Product", "Produit"),
    t("Features", "Fonctionnalités"),
    t("Pricing", "Tarifs"),
    t("Customers", "Clients"),
    t("Integrations", "Intégrations"),
    "Docs",
    "API",
    "Blog",
    t("Events", "Événements"),
    t("Careers", "Carrières"),
    t("Press", "Presse"),
    t("Status", "Statut"),
    t("Log in", "Se connecter"),
    t("Sign up", "S’inscrire")
  ]);

  const stops: KeyStop[] = $derived([
    ...links.map((link, index): KeyStop => ({ id: `link-${String(index)}`, label: t(`${link} link`, `Lien ${link}`) })),
    { id: "email", label: t("Email field", "Champ E-mail") },
    { id: "send", label: t("Send button", "Bouton Envoyer") },
    { id: "name", label: t("Name field", "Champ Nom") },
    { id: "company", label: t("Company field", "Champ Entreprise") },
    { id: "message", label: t("Message field", "Champ Message") }
  ]);
</script>

<BrandTheme brand="corporate">
  <KeyboardSandbox {stops}>
    <BrowserShell url="www.relaykit.io/contact">
      <div class="header">
        <span class="brand">Relaykit</span>
        <div class="links">
          {#each links as link, index (index)}
            <KeyTarget id="link-{index}" inline><span class="link">{link}</span></KeyTarget>
          {/each}
        </div>
      </div>
      <div class="page">
        <p class="title">{t("Contact sales", "Contacter l’équipe commerciale")}</p>
        <div class="row">
          <KeyTarget id="name"><span class="field">{t("Name", "Nom")}</span></KeyTarget>
          <KeyTarget id="company"><span class="field">{t("Company", "Entreprise")}</span></KeyTarget>
        </div>
        <KeyTarget id="email"><span class="field">{t("Email", "E-mail")}</span></KeyTarget>
        <KeyTarget id="message"><span class="field field--area">Message</span></KeyTarget>
        <KeyTarget id="send" inline><MockButton variant="primary">{t("Send", "Envoyer")}</MockButton></KeyTarget>
      </div>
    </BrowserShell>
  </KeyboardSandbox>
</BrandTheme>

<style lang="scss">
  .header {
    display: grid;
    gap: 8px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .brand {
    font-weight: 700;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 14px;
  }

  .link {
    color: var(--mock-muted);
    font-size: 12px;
  }

  .page {
    display: grid;
    gap: 12px;
    max-width: 420px;
    padding: 20px 24px 26px;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .field {
    display: block;
    padding: 9px 11px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius);
    background: var(--mock-surface);
    color: var(--mock-muted);

    &--area {
      height: 60px;
    }
  }
</style>
