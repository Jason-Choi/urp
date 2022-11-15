import { Button, Grid, Stack, Typography } from "@mui/material";

export default function Title({ title }) {
  return (
    <Stack direction="row" sx={{ alignItems: "center" }}>
      <Grid item md={11} sx={{ mr: 5 }}>
        <Typography variant="h5" fontWeight={700}>{title}</Typography>
      </Grid>
      <Grid item md={1}>
        <Button variant="contained" size="large">
          Submit
        </Button>
      </Grid>
    </Stack>
  );
}
