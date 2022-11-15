import Tokenizer from "sentence-tokenizer"
import type { Caption, Sentence } from "../types"

const caption2Object = (caption: string) => {
    if (caption === undefined) return
    const tokenizer = new Tokenizer("Chuck")
    tokenizer.setEntry(caption)
    const sentences = tokenizer.getSentences()
    const result: Caption = sentences.map((sentence) => {
        const sentenceObject: Sentence = {
            sentenceType: "none",
            phrases: [{ phraseType: "none", source: sentence, target: null }],
        }
        return sentenceObject
    })
    return result
}

export default caption2Object
