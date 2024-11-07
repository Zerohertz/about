import type { AppProps } from "next/app";

import "@/styles/global.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
