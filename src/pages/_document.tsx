import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

import global from "@/payloads/global";

class DocumentImpl extends Document {
  render() {
    return (
      <Html lang="ko-KR">
        <Head>
          <meta charSet="utf-8" />
          {/* Font Setup: https://fonts.google.com */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200..900&family=Parisienne&display=swap"
            rel="stylesheet"
          />
          {/* Google Analytics */}
          {global.analytics && global.analytics.google && (
            <Script strategy="beforeInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-ZCW0CR8M8X" />
          )}
          {/* Naver Analytics */}
          {global.analytics && global.analytics.naver && (
            <Script strategy="beforeInteractive" src="//wcs.naver.net/wcslog.js" type="text/javascript" />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentImpl;
