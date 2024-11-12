import Payload from "@/components/common/Payload";

const educations: Payload = {
  title: "EDUCATIONS",
  disable: false,
  list: [
    {
      title: "Konkuk University, Seoul, Korea",
      href: "https://grad.konkuk.ac.kr/",
      subTitle: "M.S. in Mechanical Design and Production Engineering",
      startedAt: "2021-03",
      endedAt: "2023-02",
      descriptions: [
        {
          content:
            "Thesis: [A study on feature variable density for a highly efficient diagnosis model of rotary machine in roll-to-roll continuous process](https://konkuk.dcollection.net/public_resource/pdf/200000652381_20241031221138.pdf)",
        },
        { content: "Advisor: Changwoo Lee" },
        { content: "GPA: 4.15 / 4.5" },
      ],
    },
    {
      title: "Konkuk University, Seoul, Korea",
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
