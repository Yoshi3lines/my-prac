import "../styles/globals.css";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBGLightBlue } from "src/hooks/useBGLightBlue";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBGLightBlue();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}

export default MyApp;
