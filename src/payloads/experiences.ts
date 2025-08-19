import Payload from "@/components/common/Payload";

const experiences: Payload = {
  title: "EXPERIENCES",
  disable: false,
  totalPeriod: true,
  currentAndPeriod: true,
  list: [
    {
      title: {
        en: "GenON",
        ko: "GenON",
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
            en: "Designed and implemented a GPU resource scheduler, a Kubernetes resource controller, and comprehensive LLM lifecycle management modules for the GenOS LLMOps product, enhancing resource efficiency and system reliability.",
            ko: "GenOS LLMOps 제품을 위한 GPU 리소스 스케줄러, Kubernetes 리소스 컨트롤러 및 포괄적 LLM 생명주기 관리 모듈 설계와 구현으로 리소스 효율성과 시스템 신뢰성 향상",
          },
        },
        {
          content: {
            en: "Developed distributed training and serving pipelines for large language models (LLMs) and multimodal large language models (MLLMs) on a Kubernetes platform, which improved scalability and boosted performance.",
            ko: "Kubernetes 플랫폼에서 LLM 및 MLLM을 위한 분산 학습 및 서빙 파이프라인 개발으로 확장성 개선 및 성능 향상",
          },
        },
        {
          content: {
            en: "Collaborated closely with the R&D team to productize cutting-edge model training code, streamlining integration and accelerating time-to-market for advanced machine learning solutions.",
            ko: "R&D 팀과 긴밀 협력으로 최첨단 모델 학습 코드 제품화 및 통합 간소화를 통한 고급 머신러닝 솔루션 출시 시간 단축",
          },
        },
      ],
    },
    {
      title: {
        en: "Tmax WAPL",
        ko: "Tmax WAPL",
      },
      href: "https://tmaxcore.ai/",
      subTitle: "Backend Engineer",
      startedAt: "2024-09-09",
      endedAt: "2024-11-29",
      keywords: ["Java", "Tibero", "Docker", "Kubernetes", "Grafana"],
      descriptions: [
        {
          content: {
            en: "Developed backend infrastructure for WAPL, a collaboration platform, using microservices architecture (MSA) within an 11-member team.",
            ko: "11명 구성 팀 내에서 MSA 기반 협업 플랫폼 WAPL 백엔드 인프라 개발",
          },
        },
        {
          content: {
            en: "Developed scheduling functionality utilizing a Netty-based in-house Java backend framework, supporting the efficient creation, deletion, and retrieval of schedules.",
            ko: "Netty 기반 자체 Java 백엔드 프레임워크 활용으로 일정의 효율적 생성, 삭제 및 조회 지원 스케줄링 기능 개발",
          },
        },
      ],
    },
    {
      title: {
        en: "AgileSoDA",
        ko: "AgileSoDA",
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
            en: "Managed the entire lifecycle of machine learning services (annotation, modeling, training, deployment) and oversaw Kubernetes-based IDC infrastructure within an 11-member team.",
            ko: "11명 구성 팀 내에서 머신러닝 서비스 전체 생명주기 (어노테이션, 모델링, 학습, 배포) 관리 및 Kubernetes 기반 IDC 인프라 감독",
          },
        },
        {
          content: {
            en: "Researched and developed models for text, signature, and checkbox detection, as well as information extraction, for the AI optical character recognition (OCR) product TwinReader.",
            ko: "AI OCR 제품 TwinReader를 위한 텍스트, 서명, 체크박스 감지 및 정보 추출 모델 연구개발",
          },
        },
        {
          content: {
            en: "Developed a Python backend for model serving and optimized pipelines to enhance efficiency.",
            ko: "모델 서빙용 Python 백엔드 개발 및 효율성 향상을 위한 파이프라인 최적화",
          },
        },
        {
          content: {
            en: "Streamlined the development process by creating a solution that resolved versioning challenges and reduced build times through the separation of backend dependencies.",
            ko: "백엔드 의존성 분리를 통한 버전 관리 문제 해결 및 빌드 시간 단축 솔루션 개발로 개발 프로세스 간소화",
          },
        },
        {
          content: {
            en: "Executed AI projects and proof of concept (PoC) to meet client specifications.",
            ko: "클라이언트 요구사항에 따른 AI 프로젝트 및 PoC 수행",
          },
        },
      ],
    },
  ],
};

export default experiences;
