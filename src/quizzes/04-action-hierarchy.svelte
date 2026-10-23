<script lang="ts">
  import { Badge, BrandTheme, BrowserShell, MockButton, Skeleton, Title, TopBar } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="corporate">
  <BrowserShell url="cms.northwind.blog/posts/451/edit">
    <TopBar brand="Northwind CMS">
      <Badge tone="warning">{t("Draft", "Brouillon")}</Badge>
      <span class="saved">{t("Saved 2 min ago", "Enregistré il y a 2 min")}</span>
      <span class="spacer"></span>
      <MockButton variant="ghost" icon="eye">{t("Preview", "Aperçu")}</MockButton>
      <MockButton variant="link">{t("Publish", "Publier")}</MockButton>
      <MockButton variant="primary">{t("Save draft", "Enregistrer le brouillon")}</MockButton>
    </TopBar>
    <article class="doc">
      <Title size="lg">{t("Designing calmer notifications", "Concevoir des notifications plus apaisées")}</Title>
      <p class="meta">{t("By Inès Martin · 6 min read", "Par Inès Martin · 6 min de lecture")}</p>
      <Skeleton lines={3} />
      <div class="figure"></div>
      <Skeleton lines={3} />
    </article>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .saved {
    color: var(--mock-muted);
    font-size: 12px;
  }

  .spacer {
    flex: 1;
  }

  .doc {
    display: grid;
    gap: 14px;
    max-width: 480px;
    margin: 0 auto;
    padding: 28px 20px 36px;
  }

  .meta {
    margin: -8px 0 4px;
    color: var(--mock-muted);
  }

  .figure {
    height: 110px;
    border-radius: 10px;
    background: linear-gradient(135deg, #dbeafe, #ede9fe);
  }
</style>
