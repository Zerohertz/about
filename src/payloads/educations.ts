import Payload from "@/components/common/Payload";

const educations: Payload = {
  title: "EDUCATIONS",
  disable: false,
  list: [
    {
      title: {
        ko: "건국대학교, 서울, 대한민국",
        en: "Konkuk University, Seoul, Korea",
      },
      href: "https://grad.konkuk.ac.kr/",
      subTitle: "M.S. in Mechanical Design and Production Engineering",
      startedAt: "2021-03",
      endedAt: "2023-02",
      descriptions: [
        {
          content: {
            ko: "Thesis: [A study on feature variable density for a highly efficient diagnosis model of rotary machine in roll-to-roll continuous process](https://library.konkuk.ac.kr/search/i-discovery/2111877)",
            en: "Thesis: [A study on feature variable density for a highly efficient diagnosis model of rotary machine in roll-to-roll continuous process](https://library.konkuk.ac.kr/search/i-discovery/2111877)",
          },
        },
        {
          content: {
            ko: "Advisor: Changwoo Lee",
            en: "Advisor: Changwoo Lee",
          },
        },
        {
          content: {
            ko: "GPA: 4.15 / 4.5",
            en: "GPA: 4.15 / 4.5",
          },
        },
      ],
    },
    {
      title: {
        ko: "건국대학교, 서울, 대한민국",
        en: "Konkuk University, Seoul, Korea",
      },
      href: "https://www.konkuk.ac.kr/",
      subTitle: "B.S. in Department of Mechanical Engineering",
      startedAt: "2017-03",
      endedAt: "2021-02",
      // descriptions: [
      //   { content: 'Thesis: Smart Data-Based 3D Printer Fault Diagnosis System Through FDR' },
      //   { content: 'Advisor: Changwoo Lee' },
      //   { content: 'GPA: 3.72 / 4.5' },
      // ],
    },
  ],
};

export default educations;
