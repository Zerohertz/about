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
            en: "Proactively proposed and designed advanced features including LoRA adapter serving and MCP (Model Context Protocol) integration within a 30-member cross-functional team, contributing to the LLMOps product roadmap and advancing enterprise AI infrastructure capabilities.",
            ko: "30명 규모의 SW 개발팀 내에서 LoRA 어댑터 서빙 및 MCP (Model Context Protocol) 통합 등 고급 기능을 주도적으로 제안 및 설계하여 LLMOps 제품 로드맵 기여 및 엔터프라이즈 AI 인프라 기능 향상",
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
            en: "Implemented Multi-Instance GPU (MIG) resource partitioning using NVIDIA GPU Operator and integrated NVIDIA Triton Inference Server to expand model serving capabilities beyond Transformers architecture, supporting diverse ML frameworks including TensorRT, ONNX, and PyTorch.",
            ko: "NVIDIA GPU Operator를 활용한 Multi-Instance GPU (MIG) 리소스 파티셔닝 구현 및 NVIDIA Triton Inference Server 통합으로 Transformers 아키텍처를 넘어 TensorRT, ONNX, PyTorch 등 다양한 ML 프레임워크를 지원하는 모델 서빙 기능 확대",
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
