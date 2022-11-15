import type { Table, Row } from "../types"
import { parse } from "papaparse"

const csv2Object = (csv: string): Table | undefined => {
    const result = parse("key" + csv.slice(0, csv.length - 1), { header: true, delimiter: "," })
    if (result.errors.length > 0) {
        console.log(result.errors, result.data)
        return
    }
    const columnNames = result.meta.fields?.slice(1) as string[]
    const keys = result.data.map((row: any) => row["key"])
    
    const rows = result.data.map((row: any) => {
        const key = row["key"]
        const cells = columnNames.map((columnName) => ({
            columnName,
            value: Number(row[columnName]),
        }))
        return { key, cells } as Row
    })
    if (columnNames.length === 1 && columnNames[0] === " ") {
        columnNames[0] = "value"
    }
    return { columnNames, keys, rows }
}

export default csv2Object