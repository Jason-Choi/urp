import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  Stack,
} from "@mui/material";

import CSVTableToolbar from "./CSVTableToolbar";
import Scrollbar from "../components/Scrollbar";
import csv2Object from "../util/csv2Object";
import { useRecoilState } from "recoil";
import { getQueriedDataSelector } from "../states/data";
import { selectedPhraseState } from "../states/interaction";

export default function CSVTable() {
  const [data, setData] = useRecoilState(getQueriedDataSelector);
  const [selectedPhrase, setSelectedPhrase] = useRecoilState(selectedPhraseState);


  return (
    <Card sx={{ my: 2 }}>
      <CSVTableToolbar />
      <TableContainer component={Paper}>
        <Scrollbar sx={{ maxHeight: 400 }}>
          <Table size="medium" sx={{ minHeight: 5 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">&nbsp;</TableCell>
                {data.table.columnNames.map((columnName) => (
                  <TableCell align="center" key={columnName}>
                    {columnName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.table.rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.key}</TableCell>
                  {row.cells.map(({ columnName, value }) => (
                    <TableCell key={`${row.key}${columnName}${value}`} align="center">{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    </Card>
  );
}
