import Payload from "@/components/common/Payload";

const extras: Payload = {
  title: "EXTRAS",
  disable: false,
  list: [
    {
      title: "CKA (Certified Kubernetes Administrator)",
      subTitle: "The Linux Foundation",
      startedAt: "2024-05",
      endedAt: "2026-05",
    },
    {
      title: "전문연구요원",
      subTitle: "AgileSoDA",
      startedAt: "2023-02",
      endedAt: "2026-02",
    },
    {
      title: "BOAZ 19th (Big Data Club)",
      subTitle: "Data Analysis",
      startedAt: "2022-07",
      endedAt: "2023-07",
      descriptions: [
        {
          content: "Study & Project (GitHub)",
          href: "https://github.com/stars/Zerohertz/lists/99-boaz",
        },
      ],
    },
  ],
};

export default extras;
