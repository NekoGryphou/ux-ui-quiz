<script lang="ts">
  import { BrandMark, BrowserShell, Hotspot, Icon } from "../mock";

  const rows: string[][] = [
    ["INV-1042", "Northwind", "1,250.00", "PAID"],
    ["INV-1043", "Bloomyard", "480.00", "OPEN"],
    ["INV-1044", "Tallybooks", "2,010.50", "OPEN"]
  ];
</script>

<BrowserShell url="app.orbit.io/invoices">
  <div class="app">
    <Hotspot id="header">
      <div class="header">
        <span class="header__brand"><BrandMark name="Orbit" />Orbit</span>
        <span class="header__search"><Icon name="search" size={14} /> Search</span>
        <span class="header__avatar">LM</span>
      </div>
    </Hotspot>
    <div class="body">
      <Hotspot id="nav">
        <nav class="nav">
          {#each ["Dashboard", "Invoices", "Clients", "Settings"] as item (item)}
            <span class="nav__item" class:nav__item--on={item === "Invoices"}>{item}</span>
          {/each}
        </nav>
      </Hotspot>
      <div class="main">
        <Hotspot id="summary">
          <div class="summary">
            <span>Revenue this month</span>
            <strong>€3,740.50</strong>
            <span class="summary__actions"><span class="btn btn--ghost">Cancel</span><span class="btn">Save</span></span
            >
          </div>
        </Hotspot>
        <Hotspot id="invoices">
          <div class="embed">
            <div class="legacy">
              <div class="legacy__bar"><b>ORBIT</b> Billing Module v2.4</div>
              <table>
                <thead><tr><th>No.</th><th>CUSTOMER</th><th>AMOUNT (EUR)</th><th>STATUS</th></tr></thead>
                <tbody>
                  {#each rows as row (row[0])}
                    <tr
                      >{#each row as cell, i (i)}<td>{cell}</td>{/each}</tr
                    >
                  {/each}
                </tbody>
              </table>
              <div class="legacy__actions">
                <span class="old-btn">Submit</span><span class="old-link">Reset form</span>
              </div>
            </div>
          </div>
        </Hotspot>
      </div>
    </div>
    <div class="dialog">
      <Hotspot id="export">
        <div class="old-dialog">
          <div class="old-dialog__title">Export invoices</div>
          <div class="old-dialog__body">
            Format: <span class="old-select">CSV ▾</span>
            <div class="old-dialog__actions"><span class="old-btn">OK</span><span class="old-btn">Cancel</span></div>
          </div>
        </div>
      </Hotspot>
    </div>
  </div>
</BrowserShell>

<style lang="scss">
  .app {
    position: relative;
    overflow: hidden;
    font-family: "Nunito", sans-serif;
    color: #1d1b33;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 10px 16px;
    background: #ffffff;
    border-bottom: 1px solid #e7e4f7;

    &__brand {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-weight: 800;
    }

    &__search {
      display: inline-flex;
      flex: 1;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 999px;
      background: #f3f1fd;
      color: #6a6787;
      font-size: 12px;
    }

    &__avatar {
      display: grid;
      place-items: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #6f52ff;
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
    }
  }

  .body {
    display: grid;
    grid-template-columns: 120px 1fr;
    min-height: 420px;
    background: #f7f6fd;
  }

  .nav {
    display: grid;
    align-content: start;
    gap: 4px;
    padding: 12px 8px;

    &__item {
      padding: 7px 10px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 700;

      &--on {
        background: #ece8ff;
        color: #5a3fe6;
      }
    }
  }

  .main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    min-width: 0;
    align-content: start;
    gap: 12px;
    padding: 12px 14px;
  }

  .summary {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 2px 8px rgb(30 20 80 / 0.06);
    font-size: 12px;

    strong {
      font-size: 18px;
    }

    &__actions {
      display: flex;
      gap: 6px;
      margin-left: auto;
    }
  }

  .btn {
    padding: 6px 14px;
    border-radius: 999px;
    background: #6f52ff;
    color: #ffffff;
    font-weight: 700;

    &--ghost {
      background: transparent;
      color: #5a3fe6;
    }
  }

  .embed {
    overflow-x: scroll;
    padding: 6px;
    border: 2px inset #c8c8c8;
    background: #ffffff;
  }

  .legacy {
    width: 560px;
    border: 1px solid #5f9ea0;
    background: #fbf7ec;
    font:
      11px/1.4 Verdana,
      Tahoma,
      sans-serif;

    &__bar {
      padding: 4px 8px;
      background: linear-gradient(180deg, #2a9d8f, #1f7a6f);
      color: #ffffff;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th {
      padding: 4px 6px;
      background: #f4a261;
      color: #3b2a14;
      text-align: left;
    }

    td {
      padding: 4px 6px;
      border-top: 1px solid #eadfc8;
      white-space: nowrap;
    }

    &__actions {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px 8px;
      background: #efe6d2;
    }
  }

  .old-btn {
    padding: 2px 12px;
    border: 1px solid #b5651d;
    background: linear-gradient(180deg, #ffd8a8, #f4a261);
    color: #3b2a14;
    font:
      11px Verdana,
      sans-serif;
  }

  .old-link {
    color: #1f7a6f;
    text-decoration: underline;
  }

  .dialog {
    position: absolute;
    right: 20px;
    bottom: 18px;
  }

  .old-dialog {
    width: 240px;
    border: 1px solid #1f7a6f;
    background: #fbf7ec;
    box-shadow: 3px 3px 0 rgb(0 0 0 / 0.2);
    font:
      11px/1.4 Verdana,
      sans-serif;

    &__title {
      padding: 4px 8px;
      background: #2a9d8f;
      color: #ffffff;
      font-weight: 700;
    }

    &__body {
      display: grid;
      gap: 10px;
      padding: 10px;
    }

    &__actions {
      display: flex;
      gap: 6px;
    }
  }

  .old-select {
    padding: 1px 6px;
    border: 1px solid #2a9d8f;
    background: #ffffff;
  }
</style>
