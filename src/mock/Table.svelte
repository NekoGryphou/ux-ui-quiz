<script lang="ts">
  import type { TableProps } from "./types/table.types";
  import Icon from "../components/Icon.svelte";

  let { columns, rows, sortable = false }: TableProps = $props();
</script>

<div class="table" style="--cols: {columns.length}">
  <div class="table__row table__row--head">
    {#each columns as column, i (i)}
      <span class:table__cell--end={column.align === "end"} class:table__cell--sorted={column.sort}>
        {column.label}
        {#if column.sort}
          <Icon name={column.sort === "asc" ? "chevron-up" : "chevron-down"} size={12} />
        {:else if sortable}
          <Icon name="arrow-up-down" size={12} />
        {/if}
      </span>
    {/each}
  </div>
  {#each rows as row, r (r)}
    <div class="table__row">
      {#each row as cell, c (c)}
        <span class:table__cell--end={columns[c]?.align === "end"}>{cell}</span>
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  .table {
    overflow: hidden;
    border: var(--mock-border-width) solid var(--mock-border);
    border-radius: var(--mock-radius);
    background: var(--mock-surface);

    &__row {
      display: grid;
      grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
      gap: 12px;
      padding: 10px 14px;
      border-top: 1px solid var(--mock-border);

      &--head {
        border-top: 0;
        background: var(--mock-surface-2);
        color: var(--mock-muted);
        font-size: 12px;
        font-weight: 500;
      }

      span {
        display: flex;
        align-items: center;
        gap: 4px;
        min-width: 0;
      }
    }

    &__cell--end {
      justify-content: flex-end;
      text-align: right;
    }

    &__cell--sorted {
      color: var(--mock-text);
    }
  }
</style>
