import { atom } from "recoil"
import { SelectedPhrase } from "../types"

export const selectedSentenceState = atom<number>({
    key: "selectedSentenceState",
    default: -1,
})

export const selectedPhraseState = atom<SelectedPhrase>({
    key: "selectedPhraseState",
    default: {
        sentenceIndex: null,
        selectionStart: null,
        selectionEnd: null,
    },
})
