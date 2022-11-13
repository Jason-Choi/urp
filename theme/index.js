import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
//
import typography from "./typography";

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(() => ({
    typography,
  }));
  const theme = createTheme(themeOptions);

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
