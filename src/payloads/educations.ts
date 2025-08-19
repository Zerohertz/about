import Payload from "@/components/common/Payload";

const educations: Payload = {
  title: "EDUCATIONS",
  disable: false,
  list: [
    {
      title: {
        en: "Konkuk University, Seoul, Korea",
        ko: "건국대학교, 서울",
      },
      href: "https://grad.konkuk.ac.kr/",
      subTitle: "M.S. in Mechanical Design and Production Engineering",
      startedAt: "2021-03",
      endedAt: "2023-02",
      keywords: ["MATLAB", "Python", "PyTorch", "C++", "LabVIEW", "Ansys"],
      descriptions: [
        {
          content: {
            en: "Thesis: [A study on feature variable density for a highly efficient diagnosis model of rotary machine in roll-to-roll continuous process](https://library.konkuk.ac.kr/search/i-discovery/2111877)",
            ko: "학위논문: [롤투롤 연속 공정에서 회전체 고효율 진단 모델을 위한 특징 변수 밀도에 관한 연구](https://library.konkuk.ac.kr/search/i-discovery/2111877)",
          },
          descriptions: [
            {
              content: {
                en: "Advisor: Changwoo Lee",
                ko: "지도교수: 이창우",
              },
            },
            {
              content: {
                en: "GPA: 4.15 / 4.5",
                ko: "학점: 4.15 / 4.5",
              },
            },
          ],
        },
        {
          content: {
            en: "[SiM Lab. (Smart intelligent Manufacturing system Laboratory)](https://sites.google.com/view/simlabkonkuk)",
            ko: "[SiM Lab. (지능형생산제조시스템 연구실)](https://sites.google.com/view/simlabkonkuk)",
          },
          descriptions: [
            // { content: { en: "Research Student (2021. 03 ~ 2023. 02)", ko: "Research Student (2021. 03 ~ 2023. 02)" } },
            {
              content: {
                en: "Researched and developed diagnostic models utilizing time-series and vision data for real-time monitoring of process conditions in industrial-scale manufacturing systems.",
                ko: "산업용 제조 시스템의 실시간 공정 모니터링용 시계열 및 비전 데이터 기반 진단 모델 연구개발",
              },
            },
            {
              content: {
                en: "Published two SCI(E) Q1-ranked research papers on feature selection algorithms, advancing efficient machine learning methodologies in industrial applications.",
                ko: "특징 선택 알고리즘 관련 SCI(E) Q1급 연구 논문 2편 발표 및 산업 응용 머신러닝 방법론 개발",
              },
            },
            {
              content: {
                en: "Executed 10+ government and industry-funded projects, further enhancing research capabilities in machine learning.",
                ko: "10개 이상의 정부 및 산업 지원 프로젝트 수행 및 머신러닝 연구 역량 강화",
              },
            },
            // {
            //   content: {
            //     en: "Performed computational fluid dynamics (CFD) simulations based on tension and temperature in roll-to-roll continuous processes.",
            //     ko: "Performed computational fluid dynamics (CFD) simulations based on tension and temperature in roll-to-roll continuous processes.",
            //   },
            // },
          ],
        },
      ],
    },
    {
      title: {
        en: "Konkuk University, Seoul, Korea",
        ko: "건국대학교, 서울",
      },
      href: "https://www.konkuk.ac.kr/",
      subTitle: "B.S. in Department of Mechanical Engineering",
      startedAt: "2017-03",
      endedAt: "2021-02",
      keywords: ["MATLAB", "Python", "PyTorch", "LabVIEW", "Ansys", "Unreal Engine", "C++"],
      descriptions: [
        {
          content: {
            en: "Thesis: Smart Data-Based 3D Printer Fault Diagnosis System Through FDR",
            ko: "졸업논문: FDR을 통한 스마트 데이터 기반 3D 프린터 고장 진단 시스템",
          },
          descriptions: [
            {
              content: {
                en: "Advisor: Changwoo Lee",
                ko: "지도교수: 이창우",
              },
            },
            {
              content: {
                en: "GPA: 3.72 / 4.5",
                ko: "학점: 3.72 / 4.5",
              },
            },
          ],
        },
        {
          content: {
            en: "[SiM Lab. (Smart intelligent Manufacturing system Laboratory)](https://sites.google.com/view/simlabkonkuk)",
            ko: "[SiM Lab. (지능형생산제조시스템 연구실)](https://sites.google.com/view/simlabkonkuk)",
          },
          descriptions: [
            {
              content: {
                en: "Research Intern (2019. 11 ~ 2021. 02)",
                ko: "학부 연구생 (2019. 11 ~ 2021. 02)",
              },
            },
            {
              content: {
                en: "Developed bearing condition diagnostic models using machine learning algorithms and created GUI for real-time monitoring systems.",
                ko: "머신러닝 기반 베어링 상태 진단 모델 및 실시간 모니터링 GUI 개발",
              },
            },
          ],
        },
        {
          content: {
            en: "[MRV Lab. (Medical Robotics and Virtual Reality Laboratory)](https://rvlab.konkuk.ac.kr/)",
            ko: "[MRV Lab. (의료로봇 및 가상현실 연구실)](https://rvlab.konkuk.ac.kr/)",
          },
          descriptions: [
            {
              content: {
                en: "Research Intern (2018. 06 ~ 2019. 11)",
                ko: "학부 연구생 (2018. 06 ~ 2019. 11)",
              },
            },
            {
              content: {
                en: "Developed virtual reality environments based on C++ and Unreal Engine.",
                ko: "C++와 Unreal Engine 기반 가상현실 환경 개발",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default educations;
