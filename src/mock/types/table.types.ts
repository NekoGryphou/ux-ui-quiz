import type { Column } from "./mock.types";

export interface TableProps {
  columns: Column[];
  rows: string[][];
  sortable?: boolean;
}
