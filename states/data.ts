import axios from "axios"
import { atom, selector, useRecoilState } from "recoil"
import { Data } from "../types"
import axiosInstance from "../util/axios"
import caption2Object from "../util/caption2Object"
import csv2Object from "../util/csv2Object"

export const dataState = atom<Data>({
    key: "dataState",
    default: {
        index: -1,
        title: "",
        unit: "",
        caption: [],
        table: {
            columnNames: [],
            keys: [],
            rows: [],
        },
    },
})


export const queriesState = atom<string[]>({
    key: "queriesState",
    default: [],
})

export const getQueriedDataSelector = selector({
    key: "getQueriedDataSelector",
    get: ({ get }) => {
        const data = get(dataState)
        const queries = get(queriesState)
        if (queries.length === 0) {
            return data
        }
        const filteredRows = data.table.rows.filter((row) => {
            const key = row.key
            return queries.some((query) => key.includes(query))
        })
        const filteredCoumnName = data.table.columnNames.filter((columnName) => {
            return queries.some((query) => columnName.includes(query))
        })
        const filteredData = {
            ...data,
            table: {
                ...data.table,
                columnNames: filteredCoumnName,
                rows: filteredRows,
            },
        }
        return filteredData
    },
})
