import React from "react";
import { useRouter } from "next/router";

import Loading from "../components/Loading";

import "semantic-ui-css/semantic.min.css";
import "../styles/globals.scss";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return(
    <div>
      { pageLoading ? <Loading /> : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
