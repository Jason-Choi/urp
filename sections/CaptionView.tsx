import { grey } from '@mui/material/colors';
import { Typography } from "@mui/material";
import { RefObject, useEffect, useRef, useState } from "react";
import Tokenizer from "sentence-tokenizer";

interface SelectedPhrase {
  sentenceIndex: number;
  selectionStart: number;
  selectionEnd: number;
}

const CaptionView = ({ caption }: { caption: string }) => {
  const [sentences, setSentences] = useState<string[]>([]);
  const [selectedSentence, setSelectedSentence] = useState<number | undefined>(
    undefined
  );
  const [selectedPhrase, setSelectedPhrase] = useState<
    SelectedPhrase | undefined
  >(undefined);

  useEffect(() => {
    if (caption === undefined) return;
    const tokenizer = new Tokenizer("Chuck");
    tokenizer.setEntry(caption);
    setSentences(tokenizer.getSentences());
  }, [caption]);

  const handleSentenceClick = (sentenceIndex: number) => {
    if (selectedSentence === sentenceIndex) setSelectedSentence(undefined);
    else setSelectedSentence(sentenceIndex);
  };

  const handleSentenceSelect = (sentenceIndex: number) => {
    const selection = window.getSelection();
    if (selection) {
      const selectionStart = selection.anchorOffset;
      const selectionEnd = selection.focusOffset;
      console.log(selectionStart, selectionEnd);
      setSelectedPhrase({ sentenceIndex, selectionStart, selectionEnd });
    }
  };

  return (
    <Typography paragraph={true} className="sentence-box" style={{ fontSize: 20, lineHeight: 3 }}>
      {sentences.map((sentence, index) => (
        <Typography
          style={{
            padding: 10,
            borderRadius: 10,
            backgroundColor: selectedSentence === index ? grey[100] : undefined,
          }}
          paragraph={true}
          key={`sentence${index}`}
          onMouseUp={(e) => {
            handleSentenceSelect(index);
          }}
          onClick={(e) => {
            handleSentenceClick(index);
          }}
        >
          {sentence}
        </Typography>
      ))}
    </Typography>
  );
};

export default CaptionView;
