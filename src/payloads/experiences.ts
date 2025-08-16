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
  ],
};

export default experiences;
