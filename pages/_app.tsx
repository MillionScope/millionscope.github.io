import { Analytics } from "@vercel/analytics/react";
import { type AppProps } from "next/app";

import "../styles/global.css";

function MillionScope({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MillionScope;
