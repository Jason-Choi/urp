import { RefObject, useEffect, useRef, useState } from 'react';
import Tokenizer from 'sentence-tokenizer';

interface SelectedPhrase {
    sentenceIndex: number;
    selectionStart: number;
    selectionEnd: number;
}


const CaptionView = ({ caption }: { caption: string }) => {

    const text = "This statistic shows the growth rate of the circulation of the monthly printed press in Belgium in 2015. In 2015, the magazine Goesting had the largest growth rate with 506.74 percent growth in comparison to 2014";


    const [sentences, setSentences] = useState<string[]>([]);
    const [selectedSentence, setSelectedSentence] = useState<number | undefined>(undefined);
    const [selectedPhrase, setSelectedPhrase] = useState<SelectedPhrase | undefined>(undefined);

    const captionElement = useRef<HTMLParagraphElement>(null);
    

    useEffect(() => {
        const tokenizer = new Tokenizer('Chuck');
        tokenizer.setEntry(text);
        setSentences(tokenizer.getSentences());
    }, []);

    const handleSentenceClick = (sentenceIndex: number) => {
        console.log(sentenceIndex)
        setSelectedSentence(sentenceIndex);
    };

    const handleSentenceSelect = (sentenceIndex: number) => {
        console.log(123)
        const selection = window.getSelection();
        if (selection) {
            const selectionStart = selection.anchorOffset;
            const selectionEnd = selection.focusOffset;
            console.log(selectionStart, selectionEnd);
            setSelectedPhrase({ sentenceIndex, selectionStart, selectionEnd });
        }
    }

    return (
        <p ref={captionElement}>
            {sentences.map((sentence, index) => (
                <span
                    key={`sentence${index}`}
                    onMouseUp={(e) => { handleSentenceSelect(index) }}
                    onClick={(e) => { handleSentenceClick(index) }}
                >
                    {sentence}
                </span>
            ))
            }
        </p >
    );
}

export default CaptionView;