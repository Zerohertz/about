import Payload from "@/components/common/Payload";

const presentations: Payload = {
  title: "PRESENTATIONS",
  disable: false,
  list: [
    {
      title: {
        ko: "vLLM의 OpenAI-Compatible Server 톺아보기",
        en: "Exploring vLLM's OpenAI-Compatible Server",
      },
      href: "https://2025.pycon.kr/presentations/b00a81cd-4ea3-4ec6-a658-d5e7f54c6d3f",
      subTitle: "PyCon Korea 2025 Tutorial",
      startedAt: "2025-08-15",
      onGoing: false,
      descriptions: [
        {
          content: {
            ko: "GitHub",
            en: "GitHub",
          },
          href: "https://github.com/Zerohertz/PyCon_KR_2025_Tutorial_vLLM",
        },
        {
          content: {
            ko: "SlideShare",
            en: "SlideShare",
          },
          href: "https://www.slideshare.net/slideshow/exploring-vllm-s-openai-compatible-server-pycon-korea-tutorial-2025/282444625",
        },
      ],
    },
    {
      title: {
        ko: "오픈 소스 LLM, vLLM에서 프로덕션까지",
        en: "Open Source LLMs, from vLLM to Production",
      },
      href: "https://lu.ma/lahqslya",
      subTitle: "Instruct.KR Summer 2025 Meetup",
      startedAt: "2025-08-02",
      onGoing: false,
      descriptions: [
        {
          content: {
            ko: "GitHub",
            en: "GitHub",
          },
          href: "https://github.com/Zerohertz/Instruct_KR_2025_Summer_Meetup_vLLM",
        },
        {
          content: {
            ko: "SlideShare",
            en: "SlideShare",
          },
          href: "https://www.slideshare.net/slideshow/llm-vllm-production-instruct-kr-summer-meetup-2025-9d16/282169536",
        },
      ],
    },
  ],
};

export default presentations;
