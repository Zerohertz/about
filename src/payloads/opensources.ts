import Payload from "@/components/common/Payload";

const openSources: Payload = {
  title: "OPEN SOURCES",
  disable: false,
  list: [
    {
      title: "Technical Blog",
      href: "https://zerohertz.github.io/",
      descriptions: [
        {
          content:
            "Customized a technical blog based on the Hexo NexT theme to document and share solutions to challenges encountered during personal learning and professional work.",
        },
        {
          content: "Achieved 1,500 MAU and 2,600 monthly page views by consistently writing over 200 posts since 2018.",
        },
      ],
    },
    {
      title: "Awesome 병역 특례",
      descriptions: [
        {
          content: "Zerohertz/awesome-jmy (GitHub)",
          href: "https://github.com/Zerohertz/awesome-jmy",
          image: "https://img.shields.io/github/stars/Zerohertz/awesome-jmy.svg?style=popout",
        },
        {
          content: "Zerohertz/awesome-sgy (GitHub)",
          href: "https://github.com/Zerohertz/awesome-sgy",
          image: "https://img.shields.io/github/stars/Zerohertz/awesome-sgy.svg?style=popout",
        },
      ],
    },
    {
      title: "bytedance/SPTSv2",
      href: "src/payloads/presentations.ts",
      descriptions: [
        {
          content: "Resolving Python dependencies.",
        },
        {
          content: "Solving tensor dimension erros and generalizing prediction, evaluation, and visualization.",
          image: "https://img.shields.io/github/stars/bytedance/SPTSv2.svg?style=popout",
        },
      ],
    },
  ],
};

export default openSources;
