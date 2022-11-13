import { useEffect, useState } from "react";
import SentenceList from "./SentenceList";
// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box, Card, Container, Typography, Stack, Grid } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../redux/store";
import { getDatas } from "../redux/slices/data";
import CaptionView from "./CaptionView";
import CSVTable from "./CSVTable";
// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

// ----------------------------------------------------------------------

export default function Main() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { datas } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  const { data, raw_caption } = datas;

  useEffect(() => {
    if (raw_caption !== undefined) {
      setIsLoading((prev) => !prev);
    }
  }, [raw_caption]);

  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Stack
              spacing={3}
              sx={{
                textAlign: "center",
                mb: { xs: 5, md: 10 },
              }}
            >
              {/* <SentenceList sentences={sentences} /> */}
              <CaptionView caption={raw_caption} />
            </Stack>
          </Grid>
          <Grid item md={6}>
            {isLoading ? <CSVTable data={data} /> : null}
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
