<script lang="ts">
  import { BrandTheme, BrowserShell, Icon } from "../mock";
  import { t } from "../shared/locale.svelte";

  const speech: string[] = $derived([
    t("Inbox, heading level 1", "Boîte de réception, titre niveau 1"),
    t("button", "bouton"),
    t("button", "bouton"),
    t("Weekly report from Ana, link", "Rapport hebdomadaire d’Ana, lien"),
    t("click here, link", "cliquez ici, lien"),
    t("Archive, button", "Archiver, bouton"),
    t("click here, link", "cliquez ici, lien")
  ]);
</script>

<BrandTheme brand="eco">
  <BrowserShell url="mail.northwind.io/inbox">
    <div class="layout">
      <div class="mail">
        <div class="toolbar">
          <p class="title">{t("Inbox", "Boîte de réception")}</p>
          <span class="tool"><Icon name="search" size={16} /></span>
          <span class="tool"><Icon name="filter" size={16} /></span>
        </div>
        <div class="message">
          <strong>{t("Weekly report from Ana", "Rapport hebdomadaire d’Ana")}</strong>
          <span
            >{t(
              "The numbers are in. To see the full dashboard,",
              "Les chiffres sont là. Pour voir le tableau de bord complet,"
            )} <u>{t("click here", "cliquez ici")}</u>.</span
          >
          <div class="message__actions">
            <span class="archive">{t("Archive", "Archiver")}</span>
            <span
              >{t("Unsubscribe from these reports:", "Se désabonner de ces rapports :")}
              <u>{t("click here", "cliquez ici")}</u></span
            >
          </div>
        </div>
      </div>
      <div class="reader">
        <p class="reader__title">{t("Screen reader", "Lecteur d’écran")}</p>
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
