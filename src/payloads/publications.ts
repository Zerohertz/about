import Payload from "@/components/publications/Payload";

const publications: Payload = {
  disable: false,

  list: [
    {
      title: "",
      subTitle: "",
      at: "2023-09",
      descriptions: [
        {
          content: "[Patent] Apparatus and method for predicting coating layer thickness in slot-die coating process",
          href: "https://patents.google.com/patent/KR20230120780A",
          descriptions: [
            {
              content: "Inventor: Changwoo Lee, Minho Jo, Yoonjae Lee, Hyogeun Oh",
            },
            {
              content: "Application number: 1020220017419 (2022.02.10)",
            },
            {
              content: "Grant number: 1025842600000 (2023.09.25)",
            },
          ],
        },
      ],
    },
    {
      title: "",
      subTitle: "",
      at: "2023-01",
      descriptions: [
        {
          content:
            "[SCI(E)] Classification and Redundancy Quantitative Evaluation Algorithm for Highly Efficient Fault Diagnosis of Rotary Machines in Roll-to-Roll systems",
          href: "https://www.sciencedirect.com/science/article/pii/S0263224122014889?via=ihub",
          descriptions: [
            {
              content: "Author: Hyogeun Oh, Jaehyun Noh, Changbeom Joo, Gyoujin Cho, Jeongdai Jo, Changwoo Lee",
            },
            {
              content: "Journal: Measurement [Impact Factor 5.60, JCR Top 17.19%]",
            },
          ],
        },
      ],
    },
    {
      title: "",
      subTitle: "",
      at: "2022-04",
      descriptions: [
        {
          content:
            "[SCI(E)] Feature Selection Algorithm Based on Density and Distance for Fault Diagnosis Applied to a Roll-to-Roll Manufacturing System",
          href: "https://academic.oup.com/jcde/article/9/2/805/6573580",
          descriptions: [
            {
              content: "Author: Hyogeun Oh, Yoonjae Lee, Jongsu Lee, Changbeom Joo, Changwoo Lee",
            },
            {
              content: "Journal: Journal of Computational Design and Engineering [Impact Factor 6.16, JCR Top 10.87%]",
            },
          ],
        },
      ],
    },
  ],
};

export default publications;
