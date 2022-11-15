// @mui
import {
  InputAdornment, Stack, TextField
} from "@mui/material";
// components
import Iconify from "../components/Iconify";

export default function CSVTableToolbar({ filterName, onFilterName }) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      direction={{
        xs: "column",
        md: "row",
      }}
      sx={{ px: 2.5, py: 3 }}
    >
      <TextField
        fullWidth
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: "text.disabled" }} />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}
