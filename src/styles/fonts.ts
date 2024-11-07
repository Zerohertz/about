import localFont from "next/font/local";

// https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap
// https://noonnu.cc/font_page/35
const notoSerifKR = localFont({
  src: "../assets/fonts/NotoSerifKR.woff",
  display: "swap",
  style: "normal",
  variable: "--font-noto-serif-kr",
});

// https://fonts.googleapis.com/css2?family=Parisienne&display=swap
const parisienne = localFont({
  src: "../assets/fonts/Parisienne.woff2",
  display: "swap",
  style: "normal",
  variable: "--font-parisienne",
});

export { notoSerifKR, parisienne };
