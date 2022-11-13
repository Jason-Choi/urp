// next
import Head from "next/head";
import ThemeProvider from "../theme";
// redux
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "../redux/store";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ReduxProvider store={store}>
        <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </ReduxProvider>
    </>
  );
}
