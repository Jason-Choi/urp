import "../sections/style.css";
import "simplebar/src/simplebar.css";
import Head from "next/head";
import ThemeProvider from "../theme";
import { RecoilRoot } from "recoil";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </RecoilRoot>
  );
}
