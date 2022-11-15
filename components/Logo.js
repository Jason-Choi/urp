import PropTypes from "prop-types";
import { forwardRef } from "react";
// next
import NextLink from "next/link";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Link } from "@mui/material";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ sx, ...other }, ref) => {
  return (
    <Box
      component="img"
      src="/logo.png"
      sx={{ width: 40, height: 40, cursor: "pointer", ...sx }}
    />
  );
});

Logo.displayName = "Logo";

export default Logo;
