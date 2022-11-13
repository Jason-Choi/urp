export interface Cell {
  columnName: string;
  value: number;
}

export interface Row {
  key: string;
  cells: Cell[];
}

export interface Table {
  columnNames: string[];
  rows: Row[];
}

export interface FetchData {
  statista_index: number;
  title: string;
  raw_caption: string;
  data: string;
  axis_title: string;
}
