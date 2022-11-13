import { Box } from "@mui/material";
import Head from "next/head";

import MainLayout from "../layouts/main/MainLayout";
import Main from "../sections/Main";

Home.getLayout = (page) => <MainLayout> {page} </MainLayout>;

export default function Home() {
  return (
    <>
      <Head>
        <title> 루피</title>
      </Head>
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          bgcolor: "background.default",
        }}
      >
        <Main />
      </Box>
    </>
  );
}
