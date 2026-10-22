<script lang="ts">
  import { AppBar, BrandTheme, Hotspot, PhoneShell } from "../mock";
</script>

<BrandTheme brand="fintech">
  <PhoneShell>
    <Hotspot id="title"><AppBar title="Mein Konto" /></Hotspot>
    <div class="screen">
      <Hotspot id="tabs">
        <div class="tabs">
          <span class="tabs__tab tabs__tab--on">Übersicht</span>
          <span class="tabs__tab">Kontoauszüge</span>
          <span class="tabs__tab">Daueraufträge</span>
        </div>
      </Hotspot>
      <Hotspot id="balance">
        <div class="balance">
          <span>Verfügbarer Saldo</span>
          <strong>2.418,60 €</strong>
        </div>
      </Hotspot>
      <Hotspot id="buttons">
        <div class="actions">
          <span class="actions__btn actions__btn--primary">Überweisung</span>
          <span class="actions__btn">Kontoeinstellungen</span>
        </div>
      </Hotspot>
      <Hotspot id="list">
        <div class="list">
          <div class="list__row"><span>Bäckerei Sommer</span><span>−4,80 €</span></div>
          <div class="list__row"><span>Gehalt Oktober</span><span>+2.950,00 €</span></div>
          <div class="list__row"><span>Stadtwerke München</span><span>−86,40 €</span></div>
        </div>
      </Hotspot>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .screen {
    display: grid;
    gap: 14px;
    padding: 6px 14px;
  }

  .tabs {
    display: grid;
    grid-template-columns: repeat(3, 80px);
    gap: 4px;
    overflow: hidden;
    border-bottom: 1px solid var(--mock-border);

    &__tab {
      padding: 8px 0;
      overflow: visible;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      color: var(--mock-muted);

      &--on {
        border-bottom: 2px solid var(--mock-primary);
        color: var(--mock-text);
      }
    }
  }

  .balance {
    display: grid;
    gap: 4px;
    padding: 16px;
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    span {
      color: var(--mock-muted);
    }

    strong {
      font-size: 26px;
    }
  }

  .actions {
    display: flex;
    gap: 10px;

    &__btn {
      width: 112px;
      overflow: hidden;
      padding: 10px 12px;
      border: 1px solid var(--mock-border);
      border-radius: var(--mock-radius);
      font-weight: 600;
      text-align: center;
      white-space: nowrap;

      &--primary {
        border-color: var(--mock-primary);
        background: var(--mock-primary);
        color: var(--mock-primary-text);
      }
    }
  }

  .list {
    display: grid;

    &__row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid var(--mock-border);
    }
  }
</style>
