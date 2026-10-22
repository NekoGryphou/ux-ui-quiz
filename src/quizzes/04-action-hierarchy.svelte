<script lang="ts">
  import { Badge, BrandTheme, BrowserShell, MockButton, Skeleton, Title, TopBar } from "../mock";
</script>

<BrandTheme brand="corporate">
  <BrowserShell url="cms.northwind.blog/posts/451/edit">
    <TopBar brand="Northwind CMS">
      <Badge tone="warning">Draft</Badge>
      <span class="saved">Saved 2 min ago</span>
      <span class="spacer"></span>
      <MockButton variant="ghost" icon="eye">Preview</MockButton>
      <MockButton variant="link">Publish</MockButton>
      <MockButton variant="primary">Save draft</MockButton>
    </TopBar>
    <article class="doc">
      <Title size="lg">Designing calmer notifications</Title>
      <p class="meta">By Inès Martin · 6 min read</p>
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
