<script lang="ts">
  import { RetroButton, RetroField, RetroWindow } from "../mock";

  const columns: string[] = ["ORD_NO", "CUST_REF", "ST", "SHP_DT", "CRR", "FLG"];
  const rows: string[][] = [
    ["100477", "C-20931", "5", "20250509", "UPS1", "N"],
    ["100479", "C-11872", "5", "20250510", "DHL2", "N"],
    ["100481", "C-30418", "2", "", "", "N"],
    ["100482", "C-18205", "3", "20250512", "DHL2", "Y"],
    ["100484", "C-20931", "1", "", "", "N"],
    ["100485", "C-40127", "3", "20250512", "UPS1", "N"],
    ["100488", "C-11872", "4", "20250511", "DHL2", "Y"],
    ["100490", "C-30418", "1", "", "", "N"]
  ];
</script>

<RetroWindow
  title="ORDTRK32 - Order Tracking v2.3"
  menu={["File", "Edit", "Query", "Window", "Help"]}
  status={["8 record(s) found", "READY"]}
  width={600}
>
  {#snippet toolbar()}
    <span>Order no.:</span>
    <RetroField value="100482" width={90} />
    <RetroButton primary>Find</RetroButton>
  {/snippet}
  <div class="grid">
    <table>
      <thead>
        <tr>
          {#each columns as column (column)}
            <th>{column}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each rows as row (row[0])}
          <tr class:selected={row[0] === "100482"}>
            {#each row as cell, i (i)}
              <td>{cell}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</RetroWindow>

<style lang="scss">
  @use "$styles/mock-mixins" as *;

  .grid {
    padding: 2px;
    @include retro-sunken;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font: 11px/1.3 var(--mock-retro-font);
  }

  th {
    padding: 3px 6px;
    @include retro-raised;
    font-weight: 400;
    text-align: left;
  }

  td {
    padding: 2px 6px;
    border-right: 1px solid var(--mock-retro-soft);
    border-bottom: 1px solid var(--mock-retro-soft);
  }

  .selected td {
    background: var(--mock-retro-select);
    color: var(--mock-retro-title-text);
  }
</style>
