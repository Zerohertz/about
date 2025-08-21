import { GetStaticPaths, GetStaticProps } from "next";

import { Language } from "@/components/default/Language";

import About from "@/containers/About";

interface Props {
  lang: Language;
}

function LangAbout({ lang }: Props) {
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
