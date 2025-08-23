import Payload from "@/components/common/Payload";

const experiences: Payload = {
  title: "EXPERIENCES",
  disabled: false,
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
        "PyTorch",
        "Transformers",
        "DeepSpeed",
        "vLLM",
        "Ray",
        "NCCL",
        "RDMA",
        "MariaDB",
        "Redis",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "Apache JMeter",
      ],
      descriptions: [
        {
          content: {
            en: "Collaborated within a 30-member cross-functional team comprising machine learning engineers, backend engineers, and product managers to develop LLMOps products and conduct technical reviews for new feature implementations.",
            ko: "머신러닝 엔지니어, 백엔드 엔지니어, 기획자 등으로 구성된 30명 규모의 다기능 팀에서 협업하여 LLMOps 제품 개발 및 새로운 기능 구현을 위한 기술 검토 수행",
          },
        },
        {
          content: {
            en: "Developed user-friendly distributed training and serving platform leveraging GPU Direct RDMA with high-speed Ethernet (RoCEv2) and InfiniBand on Kubernetes for seamless multi-node ML workflows.",
            ko: "고속 이더넷 (RoCEv2) 및 InfiniBand 기반 GPU Direct RDMA를 활용하여 Kubernetes 기반에서 원활한 멀티노드 ML 워크플로우를 지원하는 사용자 친화적 분산 학습 및 서빙 플랫폼 개발",
          },
        },
        {
          content: {
            en: "Planned, designed, and developed comprehensive backend system for Kubernetes container status monitoring and alerting, enabling end-to-end container lifecycle management through web interface.",
            ko: "Kubernetes 컨테이너 상태 모니터링 및 알림을 위한 포괄적 백엔드 시스템 기획, 설계 및 개발로 웹 인터페이스를 통한 end-to-end 컨테이너 생명주기 관리 구현",
          },
        },
        {
          content: {
            en: "Proactively proposed and designed advanced features including LoRA adapter serving, MCP (Model Context Protocol) integration, and container monitoring system enhancements, while leading technical initiatives that significantly contributed to the LLMOps product roadmap.",
            ko: "LoRA 어댑터 서빙, MCP (Model Context Protocol) 통합, 컨테이너 모니터링 시스템 고도화 등 고급 기능을 주도적으로 제안 및 설계하여 LLMOps 제품 로드맵에 핵심적으로 기여하는 기술 프로젝트 주도",
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
            ko: "11명 구성 팀 내에서 머신러닝 서비스 전체 생명주기 (어노테이션, 모델링, 학습, 배포) 관리 및 Kubernetes 기반 IDC 인프라 관리",
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
