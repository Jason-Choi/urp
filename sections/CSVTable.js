import { csv2object } from "../util";

export default function CSVTable({ raw_caption }) {
  const result = csv2object(raw_caption);
  console.log("result", result);
  return <div>테이블</div>;
}
