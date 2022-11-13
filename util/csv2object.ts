import type { Table } from "../types"

export const csv2object = (csv: string): Table => {
    if (csv === undefined) return {}
    const lines = csv.split("\n")
    const columnNames: string[] = lines[0].split(",").slice(1)
    if (columnNames.length === 1 && columnNames[0] === " ") columnNames[0] = "value";
    const table: Table = {}
    for (const columnName of columnNames) {
        table[columnName] = []
    }
    for (let i = 1; i < lines.length; i++) {
        const key = lines[i].split(",")[0]
        const values = lines[i].split(",").slice(1)
        for (let j = 0; j < values.length; j++) {
            table[columnNames[j]].push({
                key,
                value: Number(values[j]),
            })
        }
    }
    return table
}
