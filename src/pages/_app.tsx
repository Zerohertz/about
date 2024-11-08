import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { NextSeo } from "next-seo";

import global from "@/payloads/global";

import "@/styles/global.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo {...global.seo} />
      <Head>
        <title>{global.headTitle}</title>
        <link rel="shortcut icon" href={global.favicon} />
      </Head>
      {/* Google Analytics */}
      {global.analytics && global.analytics.google && (
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-ZCW0CR8M8X" />
      )}
      {global.analytics && global.analytics.google && (
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${global.analytics.google}');
            `,
          }}
        />
      )}
      {/* Naver Analytics */}
      {global.analytics && global.analytics.naver && (
        <Script strategy="afterInteractive" src="//wcs.naver.net/wcslog.js" />
      )}
      {global.analytics && global.analytics.naver && (
        <Script
          id="naver-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "${global.analytics.naver}";
            if(window.wcs) {
              wcs_do();
            }
          `,
          }}
        />
      )}
      <Component {...pageProps} />
    </>
  );
}

export default App;
