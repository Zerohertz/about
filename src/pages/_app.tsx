import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { NextSeo } from "next-seo";

import global from "@/payloads/global";

import { APP_CONFIG } from "@/config/app";
import { AnimationProvider } from "@/contexts/AnimationContext";

import "@/styles/global.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo {...global.seo} />
      <Head>
        <title>{global.headTitle}</title>
        <link rel="icon" href={`${APP_CONFIG.basePath}/${global.favicon}`} />
        <link rel="apple-touch-icon" href={`${APP_CONFIG.basePath}/${global.favicon}`} />
      </Head>
      <AnimationProvider>
        <Component {...pageProps} />
      </AnimationProvider>
      {/* Google Analytics */}
      {global.analytics && global.analytics.google && (
        <Script strategy="afterInteractive" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${global.analytics.google}');
          `}
        </Script>
      )}
      {/* Naver Analytics */}
      {global.analytics && global.analytics.naver && (
        <Script strategy="afterInteractive" id="naver-analytics" type="text/javascript">
          {`
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "${global.analytics.naver}";
            if(window.wcs) {
              wcs_do();
            }
          `}
        </Script>
      )}
    </>
  );
}

export default App;
