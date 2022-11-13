// next
import Head from "next/head";
import ThemeProvider from "../theme";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}
