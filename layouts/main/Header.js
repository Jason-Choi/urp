import PropTypes from "prop-types";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container, Link } from "@mui/material";
// config
import { HEADER } from "../../config";
// components
import Logo from "../../components/logo";
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
          // ...(isOffset && {
          //   ...bgBlur({ color: theme.palette.background.default }),
          //   height: {
          //     md: HEADER.H_MAIN_DESKTOP - 16,
          //   },
          // }),
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

          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" target="_blank" rel="noopener">
            버튼
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: "auto",
        borderRadius: "50%",
        position: "absolute",
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
