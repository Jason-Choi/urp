export interface Cell {
    key: string
    value: number
}

export interface Table {
    [columnName: string]: Cell[]
}

export interface FetchData {
    statista_index: number
    title: string
    raw_caption: string
    data: string
    axis_title: string
}
