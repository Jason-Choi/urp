import { useEffect, useState } from "react";
import { csv2object } from "../util";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CSVTable({ data }) {
  const result = csv2object(data);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
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
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              {row.cells.map(({ columnName, value }) => {
                return <TableCell align="center">{value}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
