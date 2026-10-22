<script lang="ts">
  import { BrandTheme, BrowserShell, Icon } from "../mock";

  const speech: string[] = [
    "Inbox, heading level 1",
    "button",
    "button",
    "Weekly report from Ana, link",
    "click here, link",
    "Archive, button",
    "click here, link"
  ];
</script>

<BrandTheme brand="eco">
  <BrowserShell url="mail.northwind.io/inbox">
    <div class="layout">
      <div class="mail">
        <div class="toolbar">
          <p class="title">Inbox</p>
          <span class="tool"><Icon name="search" size={16} /></span>
          <span class="tool"><Icon name="filter" size={16} /></span>
        </div>
        <div class="message">
          <strong>Weekly report from Ana</strong>
          <span>The numbers are in. To see the full dashboard, <u>click here</u>.</span>
          <div class="message__actions">
            <span class="archive">Archive</span>
            <span>Unsubscribe from these reports: <u>click here</u></span>
          </div>
        </div>
      </div>
      <div class="reader">
        <p class="reader__title">Screen reader</p>
        <ol>
          {#each speech as line, index (index)}
            <li>{line}</li>
          {/each}
        </ol>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 1fr 230px;
    min-height: 300px;
  }

  .mail {
    display: grid;
    align-content: start;
    gap: 14px;
    padding: 18px;
  }

  .toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .title {
    flex: 1;
    font-size: 18px;
    font-weight: 600;
  }

  .tool {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--mock-border);
    border-radius: 8px;
    background: var(--mock-surface);
  }

  .message {
    display: grid;
    gap: 8px;
    padding: 14px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);

    u {
      color: var(--mock-primary-strong);
    }

    &__actions {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--mock-muted);
      font-size: 12px;
    }
  }

  .archive {
    padding: 4px 10px;
    border: 1px solid var(--mock-border);
    border-radius: 6px;
    color: var(--mock-text);
  }

  .reader {
    padding: 16px;
    background: #1b1d23;
    color: #f1f2f6;
    font:
      12px/1.5 ui-monospace,
      "SFMono-Regular",
      Menlo,
      monospace;

    &__title {
      margin-bottom: 8px;
      color: #c7cad3;
      font-weight: 700;
    }

    ol {
      display: grid;
      gap: 6px;
      margin: 0;
      padding-left: 20px;
    }
  }
</style>
