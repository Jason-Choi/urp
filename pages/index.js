import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

import Main from "../sections/Main";


const MainLayout = dynamic(() => import("../layouts/main/MainLayout"), { ssr: false });

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
