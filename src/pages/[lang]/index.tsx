import { useEffect } from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { Language, setCurrentLanguage } from "@/utils/GlobalLanguage";

import About from "@/container/About";

interface Props {
  lang: Language;
}

function LangAbout({ lang }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (lang === "en") {
      router.replace("/");
      return;
    }

    setCurrentLanguage(lang);
  }, [lang, router]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <About initialLanguage={lang} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lang: "ko" } }, { params: { lang: "en" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const lang = params?.lang as Language;

  if (!lang || (lang !== "ko" && lang !== "en")) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      lang,
    },
  };
};

export default LangAbout;
