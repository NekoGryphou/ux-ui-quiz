<script lang="ts">
  import { AppBar, BrandTheme, PhoneShell } from "../mock";
  import { t } from "../shared/locale.svelte";

  const rows: string[][] = $derived([
    ["#48211", t("12 May 2025", "12 mai 2025"), "3", t("Shipped", "Expédiée"), t("€84.90", "84,90 €")],
    ["#47930", t("28 Apr 2025", "28 avr. 2025"), "1", t("Delivered", "Livrée"), t("€19.00", "19,00 €")],
    ["#47112", t("03 Apr 2025", "03 avr. 2025"), "5", t("Delivered", "Livrée"), t("€212.40", "212,40 €")],
    ["#46588", t("14 Mar 2025", "14 mars 2025"), "2", t("Refunded", "Remboursée"), t("€45.00", "45,00 €")]
  ]);
</script>

<BrandTheme brand="eco">
  <PhoneShell>
    <AppBar title={t("My orders", "Mes commandes")} back />
    <div class="orders">
      <table>
        <thead>
          <tr>
            {#each [t("Order", "N°"), "Date", t("Items", "Articles"), t("Status", "Statut"), "Total"] as head (head)}<th
                >{head}</th
              >{/each}
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
