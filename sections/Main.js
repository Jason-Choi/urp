// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box, Card, Container, Typography, Stack } from "@mui/material";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: "center",
  padding: theme.spacing(10, 5),
}));

// ----------------------------------------------------------------------

export default function Main() {
  return (
    <StyledRoot>
      <Container>
        <Stack
          spacing={3}
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 10 },
          }}
        >
          <Typography component="div" variant="overline">
            메인영역
          </Typography>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
