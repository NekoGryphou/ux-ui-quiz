<script lang="ts">
  import { Alert, Avatar, BrandTheme, Breadcrumbs, BrowserShell, Icon, MockButton, TopBar } from "../mock";
  import type { DriveFile } from "./types/quiz-mocks.types";

  const files: DriveFile[] = [
    { name: "Homepage — final.fig", owner: "Ana Silva", edited: "2 h ago" },
    { name: "Pricing page v4.fig", owner: "Tom Becker", edited: "Yesterday" },
    { name: "Brand guidelines.pdf", owner: "Léa Moreau", edited: "Mar 12" }
  ];
</script>

<BrandTheme brand="corporate">
  <BrowserShell url="drive.northwind.io/projects/website-2025">
    <TopBar brand="Northwind Drive">
      <Breadcrumbs items={["Projects", "Website 2025"]} />
      <span class="spacer"></span>
      <MockButton size="sm" icon="upload">Upload</MockButton>
    </TopBar>
    <div class="page">
      <div class="head">
        <span>Name</span><span>Owner</span><span>Edited</span>
      </div>
      {#each files as file (file.name)}
        <div class="file">
          <span class="file__name"><Icon name="file" size={14} /> {file.name}</span>
          <span class="file__owner"><Avatar name={file.owner} size={20} /> {file.owner}</span>
          <span class="file__edited">{file.edited}</span>
        </div>
      {/each}
      <div class="toast">
        <Alert tone="success" title="24 files deleted" toast />
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .spacer {
    flex: 1;
  }

  .page {
    position: relative;
    min-height: 300px;
    padding: 16px 20px 80px;
  }

  .head,
  .file {
    display: grid;
    grid-template-columns: 2fr 1.2fr 0.8fr;
    gap: 12px;
    align-items: center;
    padding: 10px 12px;
  }

  .head {
    color: var(--mock-muted);
    font-size: 12px;
  }

  .file {
    border-top: 1px solid var(--mock-border);
    background: var(--mock-surface);

    &__name,
    &__owner {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__name {
      font-weight: 500;
    }

    &__edited {
      color: var(--mock-muted);
    }
  }

  .toast {
    position: absolute;
    bottom: 18px;
    left: 20px;
    width: 240px;
  }
</style>
