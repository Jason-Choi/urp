export interface Cell {
    columnName: string
    value: number
}

export interface Row {
    key: string
    cells: Cell[]
}

export interface Table {
    columnNames: string[]
    keys: string[]
    rows: Row[]
}

export interface Data {
    index: number
    title: string
    unit: string
    caption: Caption
    table: Table
}

export type Caption = Sentence[]

export type SentenceType = "overview" | "describe" | "compare" | "trend" | "background" | "none" | "con"
export type PhraseType = "key" | "series" | "value" | "none"
export interface Sentence {
    sentenceType: SentenceType
    phrases: Phrase[]
}

export interface Phrase {
    phraseType: PhraseType
    source: string
    target: string | null
}

export type Query = string[]

export interface SelectedPhrase {
    sentenceIndex: number | null
    selectionStart: number | null
    selectionEnd: number | null
}

