<script lang="ts">
  import { BrandMark, BrandTheme, BrowserShell, Icon, MockButton, Skeleton } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="brutalist">
  <BrowserShell url="www.taskloom.io">
    <div class="nav">
      <span class="brand"><BrandMark name="Taskloom" />Taskloom</span>
      <span class="item">{t("Platform", "Plateforme")} <Icon name="chevron-down" size={12} /></span>
      <span class="item">Solutions <Icon name="chevron-down" size={12} /></span>
      <span class="item">{t("Products", "Produits")} <Icon name="chevron-down" size={12} /></span>
      <span class="item">{t("Resources", "Ressources")} <Icon name="chevron-down" size={12} /></span>
      <span class="item item--open">
        {t("Company", "Entreprise")}
        <Icon name="chevron-down" size={12} />
        <span class="menu">
          <span>{t("About us", "À propos")}</span>
          <span>{t("Careers", "Carrières")}</span>
          <span>{t("Pricing", "Tarifs")}</span>
          <span>{t("Press", "Presse")}</span>
        </span>
      </span>
      <span class="spacer"></span>
      <MockButton variant="primary" size="sm">{t("Get started", "Essai")}</MockButton>
    </div>
    <div class="hero">
      <p class="hero__title">{t("Work that flows, together", "Travailler ensemble, en toute fluidité")}</p>
      <Skeleton lines={2} />
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .nav {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 20px;
    border-bottom: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
  }

  .item {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    color: var(--mock-muted);
    font-weight: 500;

    &--open {
      color: var(--mock-text);
    }
  }

  .menu {
    position: absolute;
    top: calc(100% + 12px);
    left: -12px;
    z-index: 1;
    display: grid;
    gap: 2px;
    min-width: 150px;
    padding: 8px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);

    span {
      padding: 6px 8px;
      border-radius: 6px;
      color: var(--mock-text);
    }
  }

  .spacer {
    flex: 1;
  }

  .hero {
    display: grid;
    gap: 14px;
    padding: 70px 40px 80px;
    text-align: center;

    &__title {
      font-size: 26px;
      font-weight: 700;
    }
  }
</style>
