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
      endedAt: "2026-03-03",
      keywords: [
        "Python",
        "FastAPI",
        "PyTorch",
        "Transformers",
        "DeepSpeed",
        "vLLM",
        "SGLang",
        "Ray",
        "Triton Inference Server",
        "NCCL",
        "RDMA",
        "MariaDB",
        "Redis",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
        "Istio",
        "Prometheus",
        "Grafana",
        "Apache JMeter",
      ],
      descriptions: [
        {
          content: {
            en: "Led the evaluation and introduction of advanced features including LoRA (Low-Rank Adaptation) adapter serving, MCP (Model Context Protocol), Multi-Instance GPU (MIG), Triton Inference Server, and SGLang Diffusion within a 30-member cross-functional team, contributing to the LLMOps product roadmap and advancing enterprise AI infrastructure capabilities.",
            ko: "30명 규모의 SW 개발팀 내에서 LoRA (Low-Rank Adaptation) 어댑터 서빙, MCP (Model Context Protocol), Multi-Instance GPU (MIG), Triton Inference Server, SGLang Diffusion 등 고급 기능의 검토 및 도입을 주도하여 LLMOps 제품 로드맵 기여 및 엔터프라이즈 AI 인프라 기능 향상",
          },
        },
        {
          content: {
            en: "Evaluated and benchmarked advanced optimization techniques for vLLM-based LLM serving infrastructure including Prefill/Decode Disaggregation (P/D), speculative decoding, prefix-aware caching, and NPU-based serving to determine optimal configurations for enterprise deployment scenarios, while resolving various technical challenges in air-gapped customer environments.",
            ko: "vLLM 기반 LLM 서빙 인프라를 위한 Prefill/Decode Disaggregation (P/D), speculative decoding, prefix-aware caching, NPU 기반 서빙 등 고급 최적화 기법의 평가 및 벤치마킹을 통해 엔터프라이즈 배포 시나리오를 위한 최적 구성을 결정하고 폐쇄망 고객사 환경에서의 다양한 기술적 문제 해결",
          },
        },
        {
          content: {
            en: "Architected and developed Kubernetes-based high-performance distributed training and serving infrastructure supporting GPU Direct RDMA communication with RoCEv2 and InfiniBand for ultra-fast inter-node data transfer in multi-node LLM workflows.",
            ko: "멀티노드 LLM 워크플로우를 위한 Kubernetes 기반 고성능 분산 학습 및 서빙 인프라를 설계 및 개발하여 RoCEv2 및 InfiniBand 기반 GPU Direct RDMA 통신으로 노드 간 초고속 데이터 전송 지원",
          },
        },
        {
          content: {
            en: "Architected and implemented Prometheus-based asynchronous container status monitoring system with Redis Pub/Sub, Server-Sent Events (SSE) for real-time alerting and end-to-end container lifecycle management, while developing comprehensive Grafana dashboards to visualize LLM serving infrastructure metrics for enhanced observability.",
            ko: "Prometheus, Redis Pub/Sub, Server-Sent Events (SSE) 기반 비동기 컨테이너 상태 모니터링 시스템 설계 및 구현으로 end-to-end 컨테이너 생명주기 관리와 Grafana 대시보드를 통한 LLM 서빙 인프라 observability 향상",
          },
        },
      ],
    },
    {
      title: {
        en: "Tmax CoreAI",
        ko: "Tmax CoreAI",
      },
      href: "https://www.tmax.co.kr/tmaxai",
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
