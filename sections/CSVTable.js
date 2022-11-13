import { csv2object } from "../util";
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

export default function CSVTable({ data }) {
  const result = csv2object(data);

  return (
    <Card>
      <CSVTableToolbar />
      <TableContainer component={Paper}>
        <Scrollbar sx={{ maxHeight: 400 }}>
          <Table size="medium" sx={{ minHeight: 5 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">&nbsp;</TableCell>
                {result.columnNames.map((key) => {
                  return <TableCell align="center">{key}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {result.rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.key}</TableCell>
                  {row.cells.map(({ columnName, value }) => {
                    return <TableCell align="center">{value}</TableCell>;
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    </Card>
  );
}
