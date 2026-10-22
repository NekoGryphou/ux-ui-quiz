<script lang="ts">
  import { Hotspot, Icon } from "../mock";
</script>

<div class="window">
  <div class="chrome"><span>bloomyard.shop</span><strong>400%</strong></div>
  <div class="page">
    <Hotspot id="header">
      <div class="header"><span class="brand">Bloomyard</span><Icon name="menu" size={22} /></div>
    </Hotspot>
    <Hotspot id="promo">
      <div class="promo">
        <span>Spring sale: 20% off everything this weekend with code SPRING20</span>
      </div>
    </Hotspot>
    <Hotspot id="headline"><p class="headline">Grow tomatoes on a balcony</p></Hotspot>
    <Hotspot id="body">
      <p class="body">Pick a sunny spot, a deep pot and a compact variety. Water at the base, early in the day.</p>
    </Hotspot>
    <Hotspot id="table">
      <div class="table">
        <div class="table__inner">
          <span>Zone</span><span>Standard</span><span>Express</span><span>Free from</span>
          <span>FR</span><span>€4.90</span><span>€9.90</span><span>€40</span>
        </div>
        <span class="scrollbar" aria-hidden="true"></span>
      </div>
    </Hotspot>
    <Hotspot id="footer">
      <div class="footer"><span>Help</span><span>Returns</span><span>Contact</span></div>
    </Hotspot>
  </div>
</div>

<style lang="scss">
  .window {
    width: 320px;
    overflow: hidden;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-bg);
    box-shadow: var(--mock-shadow-md);
    color: var(--mock-text);
    font-size: 13px;
  }

  .chrome {
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    background: var(--mock-chrome);
    color: var(--mock-muted);
    font-size: 11px;

    strong {
      color: var(--mock-text);
    }
  }

  .page {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
    padding: 14px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    font-size: 18px;
    font-weight: 700;
  }

  .promo {
    width: 290px;
    height: 34px;
    padding: 8px 10px;
    border-radius: 8px;
    background: #14532d;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;

    span {
      display: block;
      overflow: hidden;
    }
  }

  .headline {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
  }

  .body {
    font-size: 15px;
    line-height: 1.5;
  }

  .table {
    display: grid;
    gap: 6px;
    overflow: hidden;
    border: 1px solid var(--mock-border);
    border-radius: 8px;
    background: var(--mock-surface);

    &__inner {
      display: grid;
      grid-template-columns: repeat(4, 110px);
      gap: 8px 0;
      padding: 10px;
      font-size: 13px;

      span:nth-child(-n + 4) {
        color: var(--mock-muted);
        font-weight: 600;
      }
    }
  }

  .scrollbar {
    width: 60%;
    height: 4px;
    margin: 0 0 6px 8px;
    border-radius: 999px;
    background: var(--mock-control-track);
  }

  .footer {
    display: flex;
    gap: 14px;
    color: var(--mock-primary-strong);
  }
</style>
