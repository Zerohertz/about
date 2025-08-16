import Payload from "@/components/common/Payload";

const experiences: Payload = {
  title: "EXPERIENCES",
  disable: false,
  totalPeriod: true,
  currentAndPeriod: true,
  list: [
    {
      title: {
        ko: "GenON",
        en: "GenON",
      },
      href: "https://genon.ai/",
      subTitle: "Machine Learning Engineer",
      startedAt: "2024-12-16",
      onGoing: true,
      keywords: [
        "Python",
        "FastAPI",
        "Hugging Face",
        "vLLM",
        "DeepSpeed",
        "MariaDB",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "Apache JMeter",
      ],
      descriptions: [
        {
          content: {
            ko: "GenOS LLMOps 제품을 위한 GPU 리소스 스케줄러, Kubernetes 리소스 컨트롤러, 그리고 포괄적인 LLM 생명주기 관리 모듈을 설계하고 구현하여 리소스 효율성과 시스템 신뢰성을 향상시켰습니다.",
            en: "Designed and implemented a GPU resource scheduler, a Kubernetes resource controller, and comprehensive LLM lifecycle management modules for the GenOS LLMOps product, enhancing resource efficiency and system reliability.",
          },
        },
        {
          content: {
            ko: "Kubernetes 플랫폼에서 대규모 언어 모델(LLM)과 멀티모달 대규모 언어 모델(MLLM)을 위한 분산 학습 및 서빙 파이프라인을 개발하여 확장성을 개선하고 성능을 향상시켰습니다.",
            en: "Developed distributed training and serving pipelines for large language models (LLMs) and multimodal large language models (MLLMs) on a Kubernetes platform, which improved scalability and boosted performance.",
          },
        },
        {
          content: {
            ko: "R&D 팀과 긴밀히 협력하여 최첨단 모델 학습 코드를 제품화하고, 통합을 간소화하며 고급 머신러닝 솔루션의 출시 시간을 단축했습니다.",
            en: "Collaborated closely with the R&D team to productize cutting-edge model training code, streamlining integration and accelerating time-to-market for advanced machine learning solutions.",
          },
        },
      ],
    },
    {
      title: {
        ko: "Tmax WAPL",
        en: "Tmax WAPL",
      },
      href: "https://tmaxcore.ai/",
      subTitle: "Backend Engineer",
      startedAt: "2024-09-09",
      endedAt: "2024-11-29",
      keywords: ["Java", "Tibero", "Docker", "Kubernetes", "Grafana"],
      descriptions: [
        {
          content: {
            ko: "11명으로 구성된 팀 내에서 마이크로서비스 아키텍처(MSA)를 사용하여 협업 플랫폼 WAPL의 백엔드 인프라를 개발했습니다.",
            en: "Developed backend infrastructure for WAPL, a collaboration platform, using microservices architecture (MSA) within an 11-member team.",
          },
        },
        {
          content: {
            ko: "Netty 기반 자체 Java 백엔드 프레임워크를 활용하여 일정의 효율적인 생성, 삭제 및 조회를 지원하는 스케줄링 기능을 개발했습니다.",
            en: "Developed scheduling functionality utilizing a Netty-based in-house Java backend framework, supporting the efficient creation, deletion, and retrieval of schedules.",
          },
        },
      ],
    },
    {
      title: {
        ko: "AgileSoDA",
        en: "AgileSoDA",
      },
      href: "http://www.agilesoda.com/",
      subTitle: "Machine Learning Research Engineer",
      startedAt: "2023-02-01",
      endedAt: "2024-09-03",
      keywords: [
        "Python",
        "PyTorch",
        "Triton Inference Server",
        "FastAPI",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Grafana",
      ],
      descriptions: [
        {
          content: {
            ko: "11명으로 구성된 팀 내에서 머신러닝 서비스의 전체 생명주기(어노테이션, 모델링, 학습, 배포)를 관리하고 Kubernetes 기반 IDC 인프라를 감독했습니다.",
            en: "Managed the entire lifecycle of machine learning services (annotation, modeling, training, deployment) and oversaw Kubernetes-based IDC infrastructure within an 11-member team.",
          },
        },
        {
          content: {
            ko: "AI 광학 문자 인식(OCR) 제품 TwinReader를 위한 텍스트, 서명, 체크박스 감지 및 정보 추출 모델을 연구하고 개발했습니다.",
            en: "Researched and developed models for text, signature, and checkbox detection, as well as information extraction, for the AI optical character recognition (OCR) product TwinReader.",
          },
        },
        {
          content: {
            ko: "모델 서빙을 위한 Python 백엔드를 개발하고 효율성 향상을 위해 파이프라인을 최적화했습니다.",
            en: "Developed a Python backend for model serving and optimized pipelines to enhance efficiency.",
          },
        },
        {
          content: {
            ko: "백엔드 의존성 분리를 통해 버전 관리 문제를 해결하고 빌드 시간을 단축하는 솔루션을 만들어 개발 프로세스를 간소화했습니다.",
            en: "Streamlined the development process by creating a solution that resolved versioning challenges and reduced build times through the separation of backend dependencies.",
          },
        },
        {
          content: {
            ko: "클라이언트 요구사항에 맞는 AI 프로젝트 및 개념 증명(PoC)을 수행했습니다.",
            en: "Executed AI projects and proof of concept (PoC) to meet client specifications.",
          },
        },
      ],
    },
    {
      title: {
        ko: "SiM Lab. (스마트 지능형 제조시스템 연구실)",
        en: "SiM Lab. (Smart intelligent Manufacturing system Laboratory)",
      },
      href: "https://sites.google.com/view/simlabkonkuk",
      subTitle: "Research Student",
      startedAt: "2021-03",
      endedAt: "2023-02",
      keywords: ["MATLAB", "Python", "PyTorch", "C++", "LabVIEW", "Ansys"],
      descriptions: [
        {
          content: {
            ko: "산업 규모 제조 시스템에서 공정 조건의 실시간 모니터링을 위해 시계열 및 비전 데이터를 활용한 진단 모델을 연구하고 개발했습니다.",
            en: "Researched and developed diagnostic models utilizing time-series and vision data for real-time monitoring of process conditions in industrial-scale manufacturing systems.",
          },
        },
        {
          content: {
            ko: "특징 선택 알고리즘에 관한 SCI(E) Q1급 연구 논문 2편을 발표하여 산업 응용 분야에서 효율적인 머신러닝 방법론을 발전시켰습니다.",
            en: "Published two SCI(E) Q1-ranked research papers on feature selection algorithms, advancing efficient machine learning methodologies in industrial applications.",
          },
        },
        {
          content: {
            ko: "10개 이상의 정부 및 산업 지원 프로젝트를 수행하여 머신러닝 분야의 연구 역량을 더욱 향상시켰습니다.",
            en: "Executed 10+ government and industry-funded projects, further enhancing research capabilities in machine learning.",
          },
        },
        // { content: "Developed a graphical user interface (GUI) for real-time monitoring." },
        // {
        //   content:
        //     "Performed computational fluid dynamics (CFD) simulations based on tension and temperature in roll-to-roll continuous processes.",
        // },
      ],
    },
    {
      title: {
        ko: "SiM Lab. (스마트 지능형 제조시스템 연구실)",
        en: "SiM Lab. (Smart intelligent Manufacturing system Laboratory)",
      },
      href: "https://sites.google.com/view/simlabkonkuk",
      subTitle: "Research Intern",
      startedAt: "2019-11",
      endedAt: "2021-02",
      keywords: ["MATLAB", "Python", "PyTorch", "LabVIEW", "Ansys"],
      descriptions: [
        {
          content: {
            ko: "베어링 상태 진단 모델과 그래픽 사용자 인터페이스를 개발했습니다.",
            en: "Developed bearing condition diagnostic model and graphic user interface.",
          },
        },
      ],
    },
    {
      title: {
        ko: "MRV Lab. (의료 로보틱스 및 가상현실 연구실)",
        en: "MRV Lab. (Medical Robotics and Virtual Reality Laboratory)",
      },
      href: "https://rvlab.konkuk.ac.kr/",
      subTitle: "Research Intern",
      startedAt: "2018-06",
      endedAt: "2019-11",
      keywords: ["Unreal Engine", "C++", "Python"],
      descriptions: [
        {
          content: {
            ko: "C++와 Unreal Engine을 기반으로 가상현실 환경을 개발했습니다.",
            en: "Developed virtual reality environments based on C++ and Unreal Engine.",
          },
        },
      ],
    },
  ],
};

export default experiences;
