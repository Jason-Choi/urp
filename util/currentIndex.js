import { replace } from "text-field-edit";

export default function currentIndex(textArea) {
  const selectionStart = textArea.selectionStart;
  const selectionEnd = textArea.selectionEnd;

  const oldText = textArea.value;

  const prefix = oldText.substring(0, selectionStart);
  const inserted = oldText.substring(selectionStart, selectionEnd);
  // console.log(inserted);

  return inserted;
}
