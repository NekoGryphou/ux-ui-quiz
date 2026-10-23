<script lang="ts">
  import { BrandTheme, BrowserShell, Field, Hotspot, MockButton, SideNav, Switch, Title } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="luxury">
  <BrowserShell url="app.northpeak.io/settings">
    <div class="layout">
      <Hotspot id="nav">
        <div class="side">
          <SideNav
            items={[
              { label: t("General", "Général"), icon: "settings", active: true },
              { label: t("Members", "Membres"), icon: "user" },
              { label: t("Billing", "Facturation"), icon: "cart" }
            ]}
          />
        </div>
      </Hotspot>
      <div class="content">
        <Hotspot id="page-title" inline
          ><Title>{t("Workspace settings", "Paramètres de l’espace de travail")}</Title></Hotspot
        >
        <div class="grid">
          <section class="card">
            <strong>{t("Profile", "Profil")}</strong>
            <Field value="Northpeak Studio" />
            <Hotspot id="profile-actions"
              ><div class="actions actions--end">
                <MockButton variant="primary" size="sm">{t("Save", "Enregistrer")}</MockButton>
              </div></Hotspot
            >
          </section>
          <section class="card">
            <strong>{t("Billing", "Facturation")}</strong>
            <Field value="finance@northpeak.io" />
            <Hotspot id="billing-actions"
              ><div class="actions actions--end">
                <MockButton variant="primary" size="sm">{t("Save", "Enregistrer")}</MockButton>
              </div></Hotspot
            >
          </section>
          <section class="card">
            <strong>{t("Security", "Sécurité")}</strong>
            <Switch label={t("Require 2FA", "Exiger la 2FA")} checked />
            <Hotspot id="security-actions"
              ><div class="actions"><span class="outline">{t("Update", "Mettre à jour")}</span></div></Hotspot
            >
          </section>
          <section class="card">
            <strong>{t("Team", "Équipe")}</strong>
            <Switch label={t("Allow guests", "Autoriser l’accès invité")} />
            <Hotspot id="team-actions"
              ><div class="actions actions--end">
                <span class="link">{t("Save changes", "Enregistrer les modifications")}</span>
              </div></Hotspot
            >
          </section>
        </div>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 150px 1fr;
    min-height: 330px;
  }

  .side {
    height: 100%;
    padding: 14px 8px;
    border-right: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .content {
    display: grid;
    align-content: start;
    gap: 14px;
    padding: 18px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .card {
    display: grid;
    gap: 10px;
    padding: 14px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
  }

  .actions {
    display: flex;

    &--end {
      justify-content: flex-end;
    }
  }

  .outline {
    padding: 4px 10px;
    border: 1px solid var(--mock-success);
    border-radius: var(--mock-radius);
    color: var(--mock-success);
    font-size: 12px;
    font-weight: 500;
  }

  .link {
    color: var(--mock-primary-strong);
    font-size: 12px;
    text-decoration: underline;
  }
</style>
