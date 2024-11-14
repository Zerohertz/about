import Document, { Head, Html, Main, NextScript } from "next/document";

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
