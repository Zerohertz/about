import Payload from "@/components/common/Payload";

const presentations: Payload = {
  title: "PRESENTATIONS",
  disable: false,
  list: [
    {
      title: "Open Source LLM: From vLLM to Production",
      href: "https://lu.ma/lahqslya",
      subTitle: "Instruct.KR Summer 2025 Meetup",
      startedAt: "2025-08-02",
      onGoing: false,
      descriptions: [
        { content: "KR title: 오픈소스 LLM, vLLM으로 Production까지" },
        {
          content: "GitHub",
          href: "https://github.com/Zerohertz/Instruct_KR_2025_Summer_Meetup_vLLM",
        },
        {
          content: "SlideShare",
          href: "https://www.slideshare.net/slideshow/llm-vllm-production-instruct-kr-summer-meetup-2025-9d16/282169536",
        },
      ],
    },
  ],
};

export default presentations;
