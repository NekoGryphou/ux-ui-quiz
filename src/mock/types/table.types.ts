import type { Column } from "./mock.types";

/**
 * @export
 * @desc Props of the mock data Table.
 *
 * @property columns - Column headers.
 * @property rows - Cell texts per row.
 * @property sortable - Shows sort hints.
 */
export interface TableProps {
  /** Column headers. */
  columns: Column[];

  /** Cell texts per row, in column order. */
  rows: string[][];

  /** Shows a sort hint on unsorted columns, false by default. */
  sortable?: boolean;
}
