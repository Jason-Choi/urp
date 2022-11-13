// next
import NextLink from "next/link";
import { useRouter } from "next/router";
// @mui
import { Box, Container, Typography } from "@mui/material";
// routes
// components
import Logo from "../../components/logo";
import Iconify from "../../components/iconify";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Footer() {
  const { pathname } = useRouter();

  const isHome = pathname === "/";

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: "center",
        position: "relative",
        bgcolor: "background.default",
      }}
    >
      <Container>
        <Logo sx={{ mb: 1, mx: "auto" }} />

        <Typography variant="caption" component="div">
          © All rights reserved
          <br /> made by 루피
        </Typography>
      </Container>
    </Box>
  );
}
