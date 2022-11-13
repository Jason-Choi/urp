import type { Table, Row } from "../types";

export const csv2object = (csv: string): Table | undefined => {
  if (csv === undefined) return;
  const lines = csv.split("\n");
  const columnNames: string[] = lines[0].split(",").slice(1);
  if (columnNames.length === 1 && columnNames[0] === " ")
    columnNames[0] = "value";
  const table: Table = { columnNames, rows: [] };

  for (let i = 1; i < lines.length - 1; i++) {
    const key = lines[i].split(",")[0];
    const values = lines[i].split(",").slice(1);
    table.rows.push({
      key,
      cells: [
        ...columnNames.map((name, index) => ({
          columnName: name,
          value: Number(values[index]),
        })),
      ],
    });
  }
  return table;
};
