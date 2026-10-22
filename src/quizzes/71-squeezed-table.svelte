<script lang="ts">
    import {AppBar, BrandTheme, PhoneShell} from "../mock";

    const rows: string[][] = [
    ["#48211", "12 May 2025", "3", "Shipped", "€84.90"],
    ["#47930", "28 Apr 2025", "1", "Delivered", "€19.00"],
    ["#47112", "03 Apr 2025", "5", "Delivered", "€212.40"],
    ["#46588", "14 Mar 2025", "2", "Refunded", "€45.00"]
  ];
</script>

<BrandTheme brand="eco">
  <PhoneShell>
    <AppBar title="My orders" back />
    <div class="orders">
      <table>
        <thead>
          <tr>
            {#each ["Order", "Date", "Items", "Status", "Total"] as head (head)}<th>{head}</th>{/each}
          </tr>
        </thead>
        <tbody>
          {#each rows as row (row[0])}
            <tr>
              {#each row as cell, i (i)}<td>{cell}</td>{/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .orders {
    padding: 12px 10px;
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    background: var(--mock-surface);
    font-size: 12px;
  }

  th {
    padding: 8px 4px;
    border-bottom: 1px solid var(--mock-border);
    color: var(--mock-muted);
    font-weight: 600;
    text-align: left;
  }

  td {
    padding: 10px 4px;
    border-bottom: 1px solid var(--mock-border);
    vertical-align: top;
    overflow-wrap: anywhere;
  }
</style>
