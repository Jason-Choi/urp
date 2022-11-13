import PropTypes from "prop-types";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Container,
  Link,
  Typography,
} from "@mui/material";
// config
import { HEADER } from "../../config";
// components
import Logo from "../../components/Logo";
import Iconify from "../../components/Iconify";
//

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            URP
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Link
            href={"https://github.com/Jason-Choi/urp"}
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{ ml: 1 }}
          >
            <IconButton>
              <Iconify icon="akar-icons:github-fill" width={20} />
            </IconButton>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

// ----------------------------------------------------------------------
