import { Button, Stack } from "@mui/material"
import { useRecoilState } from "recoil"
import { SENTENCE_TYPE } from "../config"
import { dataState } from "../states/data"
import { selectedSentenceState } from "../states/interaction"
import type { SentenceType } from "../types"


const SentenceTypeSelector = () => {
  const [selectedSentence, setSelectedSentence] = useRecoilState(selectedSentenceState)
  const [data, setData] = useRecoilState(dataState)



  const handleSentenceTypeClick = (sentenceType: SentenceType) => {
    const newData = { ...data }
    newData.caption = newData.caption.map((sentence, index) => {
      if (index === selectedSentence) {
        return { ...sentence, sentenceType }
      }
      return sentence
    })
    setData(newData)
    setSelectedSentence(-1)
    console.log(newData)
  }



  return (

    <Stack direction="row" flexShrink={0} justifyContent="space-between" mb={4}>
      {/* <Button variant="contained" style={{ backgroundColor: blue[500] }}>1 Overview</Button> */}
      {Object.values(SENTENCE_TYPE).map((sentenceType, index) => (
        <Button
          key={`sentenceType${index}`}
          variant="contained"
          style={{ backgroundColor: sentenceType.color[500] }}
          onClick={() => handleSentenceTypeClick(sentenceType.type as SentenceType)}
        >{sentenceType.num + " " + sentenceType.name}</Button>
      ))}
    </Stack>

  )
}



export default SentenceTypeSelector