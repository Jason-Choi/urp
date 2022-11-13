import { useEffect, useState } from "react";
import SentenceList from "./SentenceList";
// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Container,
  Typography,
  Stack,
  Grid,
  Button,
} from "@mui/material";
// redux
import { useDispatch, useSelector } from "../redux/store";
import { getDatas } from "../redux/slices/data";
import CaptionView from "./CaptionView";
import CSVTable from "./CSVTable";
import Title from "./Title";
// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Main() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { datas } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);
  const { title, data, raw_caption } = datas;

  useEffect(() => {
    if (raw_caption !== undefined) {
      setIsLoading((prev) => !prev);
    }
  }, [raw_caption]);

  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Title title={title} />
          </Grid>
          <Grid item md={6}>
            <Stack
              direction="column"
              spacing={3}
              sx={{
                textAlign: "center",
                mb: { xs: 5, md: 10 },
              }}
            >
              <CaptionView caption={raw_caption} />
              <Stack
                direction="row"
                flexShrink={0}
                justifyContent="space-between"
                sx={{ pl: 10, pr: 10 }}
              >
                <Button variant="outlined">1</Button>
                <Button variant="outlined">2</Button>
                <Button variant="outlined">3</Button>
                <Button variant="outlined">4</Button>
                <Button variant="outlined">X</Button>
              </Stack>
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
