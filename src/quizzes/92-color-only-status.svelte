<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme } from "../mock";
  import { t } from "../shared/locale.svelte";
  import type { ServerRow } from "./types/quiz-mocks.types";

  let { variant = "a" }: VisualProps = $props();

  const servers: ServerRow[] = [
    { name: "web-01", ok: true },
    { name: "web-02", ok: false },
    { name: "api-01", ok: true },
    { name: "api-02", ok: true },
    { name: "db-01", ok: false },
    { name: "cache-01", ok: true }
  ];
</script>

<BrandTheme brand="corporate">
  <div class="card">
    <p class="card__title">
      {t("Servers", "Serveurs")} <small>{t("· simulated deuteranopia", "· deutéranopie simulée")}</small>
    </p>
    {#each servers as server (server.name)}
      <div class="row">
        <span>{server.name}</span>
        <span class="status" class:status--bad={!server.ok}>
          <i></i>
          {#if variant === "b"}{server.ok ? t("✓ Healthy", "✓ Opérationnel") : t("✕ Down", "✕ En panne")}{/if}
        </span>
      </div>
    {/each}
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 2px;
    width: 280px;
    padding: 18px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    color: var(--mock-text);
    filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='d'%3E%3CfeColorMatrix values='0.367 0.861 -0.228 0 0 0.280 0.673 0.047 0 0 -0.012 0.043 0.969 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3C/svg%3E#d");

    &__title {
      margin-bottom: 8px;

      small {
        color: var(--mock-muted);
        font-size: 11px;
        font-weight: 400;
      }

      font-size: 15px;
      font-weight: 600;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    padding: 9px 0;
    border-bottom: 1px solid var(--mock-border);
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #2e7d32;
    font-weight: 600;

    i {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #2e7d32;
    }

    &--bad {
      color: #c62828;

      i {
        background: #c62828;
      }
    }
  }
</style>
