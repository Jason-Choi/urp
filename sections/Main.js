import { useEffect, useState } from "react";
import SentenceList from "./SentenceList";
// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box, Card, Container, Typography, Stack } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../redux/store";
import { getDatas } from "../redux/slices/data";
import CaptionView from "./CaptionView";
import { csv2object } from "../util";
// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: "center",
  padding: theme.spacing(10, 5),
}));

const text =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lorem at diam volutpat, a aliquam sem feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer hendrerit volutpat diam sed gravida. Fusce leo ante, molestie vel consectetur a, semper viverra metus. Etiam facilisis malesuada lectus vel semper. In aliquet molestie accumsan. Phasellus rhoncus auctor rhoncus. Nunc suscipit metus sed libero feugiat, eget condimentum dolor dapibus. Etiam tristique dui vel diam faucibus egestas. Phasellus sit amet lobortis risus. Proin ultricies sem ac elementum pulvinar.` +
  `Praesent sed lectus non justo tempus accumsan.`;

// ----------------------------------------------------------------------

export default function Main() {
  const dispatch = useDispatch();
  const { datas } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  console.log(datas.raw_caption);
  console.log(datas.data, csv2object(datas.data));


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
          {/* <SentenceList sentences={sentences} /> */}
          <CaptionView caption={datas.raw_caption} />
        </Stack>
      </Container>
    </StyledRoot>
  );
}
