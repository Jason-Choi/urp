import { Box, Typography } from "@mui/material";
import { grey, yellow } from '@mui/material/colors';
import { useRecoilState } from 'recoil';
import { SENTENCE_TYPE } from "../config";
import { dataState } from '../states/data';
import { selectedPhraseState, selectedSentenceState } from '../states/interaction';



const CaptionView = () => {
  const [data, setData] = useRecoilState(dataState);
  const [selectedSentence, setSelectedSentence] = useRecoilState(selectedSentenceState);
  const [selectedPhrase, setSelectedPhrase] = useRecoilState(selectedPhraseState);

  const handleSelection = (sentenceIndex: number) => {
    const selection = window.getSelection();
    if (!selection) return;
    const selectionStart = selection.anchorOffset;
    const selectionEnd = selection.focusOffset;

    if (selectionStart === selectionEnd) {
      if (selectedSentence === sentenceIndex) setSelectedSentence(-1);
      else setSelectedSentence(sentenceIndex);
      console.log("click", sentenceIndex);
    }

    else {
      setSelectedPhrase({ sentenceIndex, selectionStart, selectionEnd });
      console.log("select", sentenceIndex, selectionStart, selectionEnd);
    }
  };

  return (
    <Box className="sentence-box" style={{ fontSize: 20, lineHeight: 3 }}>
      {data.caption.map((sentence, index) => (
        <Typography
          style={{
            padding: 10,
            borderRadius: 10,
            backgroundColor: selectedSentence === index ? grey[100] :
              sentence.sentenceType === "none" ? "white" :
                SENTENCE_TYPE[sentence.sentenceType].color[50],
          }}
          paragraph={true}
          key={`sentence${index}`}
          onMouseUp={(e) => {
            handleSelection(index);
          }}
        >
          {sentence.phrases.map((phrase, index) => (
            <span
              key={`phrase${index}`}
              style={{ backgroundColor: phrase.phraseType !== "none" ? yellow[100] : undefined }}
            >
              {phrase.source}
            </span>
          ))}
        </Typography>
      ))}
    </Box>
  );
};

export default CaptionView;
