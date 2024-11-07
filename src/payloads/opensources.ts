import Payload from "@/components/opensources/Payload";

const openSources: Payload = {
  disable: false,
  list: [
    {
      title: "Technical Blog",
      descriptions: [
        {
          content: "Zerohertz",
          href: "https://zerohertz.github.io/",
        },
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
      descriptions: [
        {
          content: "bytedance/SPTSv2 (GitHub)",
          href: "https://github.com/bytedance/SPTSv2/pulls?q=author%3AZerohertz",
          image: "https://img.shields.io/github/stars/bytedance/SPTSv2.svg?style=popout",
        },
        {
          content: "Resolving Python dependencies.",
        },
        {
          content: "Solving tensor dimension erros and generalizing prediction, evaluation, and visualization.",
        },
      ],
    },
  ],
};

export default openSources;
