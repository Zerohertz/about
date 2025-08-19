import Payload from "@/components/common/Payload";

const publications: Payload = {
  title: "PUBLICATIONS & PATENTS",
  disable: false,
  list: [
    {
      startedAt: "2023-09",
      onGoing: false,
      descriptions: [
        {
          content: {
            en: "[Patent] [Apparatus and method for predicting coating layer thickness in slot-die coating process](https://patents.google.com/patent/KR20230120780A)",
            ko: "[특허] [슬롯-다이 코팅 공정의 코팅층 두께 예측 장치 및 방법](https://patents.google.com/patent/KR20230120780A)",
          },
          descriptions: [
            {
              content: {
                en: "Inventor: Changwoo Lee, Minho Jo, Yoonjae Lee, **Hyogeun Oh**",
                ko: "발명자: 이창우, 조민호, 이윤제, **오효근**",
              },
            },
            {
              content: {
                en: "Application number: 1020220017419 (2022.02.10)",
                ko: "출원번호: 1020220017419 (2022.02.10)",
              },
            },
            {
              content: {
                en: "Grant number: 1025842600000 (2023.09.25)",
                ko: "등록번호: 1025842600000 (2023.09.25)",
              },
            },
          ],
        },
      ],
    },
    {
      startedAt: "2023-01",
      onGoing: false,
      descriptions: [
        {
          content: {
            en: "[SCI(E)] [Classification and Redundancy Quantitative Evaluation Algorithm for Highly Efficient Fault Diagnosis of Rotary Machines in Roll-to-Roll systems](https://www.sciencedirect.com/science/article/pii/S0263224122014889)",
            ko: "[SCI(E)] [Classification and Redundancy Quantitative Evaluation Algorithm for Highly Efficient Fault Diagnosis of Rotary Machines in Roll-to-Roll systems](https://www.sciencedirect.com/science/article/pii/S0263224122014889)",
          },
          descriptions: [
            {
              content: {
                en: "Author: **Hyogeun Oh**, Jaehyun Noh, Changbeom Joo, Gyoujin Cho, Jeongdai Jo, Changwoo Lee",
                ko: "저자: **오효근**, 노재현, 주창범, 조규진, 조정대, 이창우",
              },
            },
            {
              content: {
                en: "Journal: Measurement [Impact Factor 5.60, JCR Top 17.19%]",
                ko: "저널: Measurement [Impact Factor 5.60, JCR Top 17.19%]",
              },
            },
          ],
        },
      ],
    },
    {
      title: {
        en: "",
        ko: "",
      },
      subTitle: "",
      startedAt: "2022-04",
      onGoing: false,
      descriptions: [
        {
          content: {
            en: "[SCI(E)] [Feature Selection Algorithm Based on Density and Distance for Fault Diagnosis Applied to a Roll-to-Roll Manufacturing System](https://academic.oup.com/jcde/article/9/2/805/6573580)",
            ko: "[SCI(E)] [Feature Selection Algorithm Based on Density and Distance for Fault Diagnosis Applied to a Roll-to-Roll Manufacturing System](https://academic.oup.com/jcde/article/9/2/805/6573580)",
          },
          descriptions: [
            {
              content: {
                en: "Author: **Hyogeun Oh**, Yoonjae Lee, Jongsu Lee, Changbeom Joo, Changwoo Lee",
                ko: "저자: **오효근**, 이윤제, 이종수, 주창범, 이창우",
              },
            },
            {
              content: {
                en: "Journal: Journal of Computational Design and Engineering [Impact Factor 6.16, JCR Top 10.87%]",
                ko: "저널: Journal of Computational Design and Engineering [Impact Factor 6.16, JCR Top 10.87%]",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default publications;
