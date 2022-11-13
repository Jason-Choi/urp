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
    console.log(sentenceIndex);
    setSelectedSentence(sentenceIndex);
  };

  const handleSentenceSelect = (sentenceIndex: number) => {
    console.log(123);
    const selection = window.getSelection();
    if (selection) {
      const selectionStart = selection.anchorOffset;
      const selectionEnd = selection.focusOffset;
      console.log(selectionStart, selectionEnd);
      setSelectedPhrase({ sentenceIndex, selectionStart, selectionEnd });
    }
  };

  return (
    <p className="sentence-box">
      {sentences.map((sentence, index) => (
        <span
          key={`sentence${index}`}
          onMouseUp={(e) => {
            handleSentenceSelect(index);
          }}
          onClick={(e) => {
            handleSentenceClick(index);
          }}
        >
          {sentence}
        </span>
      ))}
    </p>
  );
};

export default CaptionView;
