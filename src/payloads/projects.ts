import Payload from "@/components/common/Payload";

const projects: Payload = {
  title: "PROJECTS",
  disable: false,
  list: [
    {
      title: {
        en: "LLMOps Solution, GenOS",
        ko: "LLMOps 솔루션, GenOS",
      },
      subTitle: "GenON",
      startedAt: "2024-12",
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
            en: "Conducted continuous evaluation and benchmarking of state-of-the-art Large Language Models (LLMs) to determine optimal computing resource requirements and configuration parameters for training and inference deployment.",
            ko: "최신 대규모 언어 모델 (LLM) 지속적 평가 및 벤치마킹을 통한 학습 및 추론 배포용 최적 컴퓨팅 리소스 요구사항 및 구성 매개변수 결정",
          },
        },
        {
          content: {
            en: "Designed and developed microservices architecture (MSA) enabling distributed training and serving configuration through intuitive web-based user interfaces.",
            ko: "직관적인 웹 기반 사용자 인터페이스를 통한 분산 학습 및 서빙 구성 지원 마이크로서비스 아키텍처 (MSA) 설계 및 개발",
          },
        },
        {
          content: {
            en: "Implemented Prometheus operator integration and developed comprehensive Grafana dashboards to enhance observability and monitoring capabilities for LLM serving infrastructure.",
            ko: "Prometheus 오퍼레이터 통합 구현 및 LLM 서빙 인프라의 관찰성과 모니터링 기능 향상을 위한 포괄적 Grafana 대시보드 개발",
          },
          image: "/images/llmops-solution-genos-0.webp",
        },
        {
          content: {
            en: "Resolved ephemeral storage limitations by migrating from object storage to Network File System (NFS) provisioner, improving system reliability and performance.",
            ko: "객체 스토리지에서 네트워크 파일 시스템 (NFS) 프로비저너로 마이그레이션을 통한 임시 스토리지 제한 해결 및 시스템 안정성과 성능 향상",
          },
        },
        {
          content: {
            en: "Led strategic planning and architectural design for Model Context Protocol (MCP) feature integration and implementation.",
            ko: "모델 컨텍스트 프로토콜 (MCP) 기능 통합 및 구현을 위한 전략적 계획 및 아키텍처 설계 주도",
          },
        },
      ],
    },
    {
      title: {
        en: "Development and CI/CD Pipeline Construction of Python Library",
        ko: "Python 라이브러리 개발 및 CI 및 CD 파이프라인 구축",
      },
      subTitle: "Personal Project",
      startedAt: "2023-11",
      endedAt: "2024-12",
      keywords: ["Python", "PyTest", "Sphinx", "Kubernetes", "Jenkins", "GitHub Actions", "Codecov", "PyPI"],
      descriptions: [
        {
          content: {
            en: "Zerohertz/zerohertzLib (GitHub)",
            ko: "Zerohertz/zerohertzLib (GitHub)",
          },
          href: "https://github.com/Zerohertz/zerohertzLib",
        },
        {
          content: {
            en: "Python Library (PyPI)",
            ko: "Python Library (PyPI)",
          },
          href: "https://pypi.org/project/zerohertzLib/",
        },
        {
          content: {
            en: "Docs (Sphinx)",
            ko: "Docs (Sphinx)",
          },
          href: "https://zerohertz.github.io/zerohertzLib/",
        },
        {
          content: {
            en: "To reduce time consumption and inefficiency from reimplementing commonly used functions, developed and published a custom Python library on PyPI and GitHub Releases to enhance efficiency and code reusability across projects.",
            ko: "일반적으로 사용되는 함수 재구현으로 인한 시간 소모와 비효율성 해결을 위한 사용자 정의 Python 라이브러리 개발 및 PyPI 및 GitHub Releases 배포를 통한 프로젝트 효율성과 코드 재사용성 향상",
          },
          image: "/images/development-and-ci-cd-pipeline-construction-of-python-library-0.webp",
        },
        {
          content: {
            en: "Built a GitHub Actions-based CI/CD pipeline (migrated from Jenkins) to automate repetitive tasks such as formatting, unit testing, and deployment, streamlining the process for feature additions and bug fixes.",
            ko: "GitHub Actions 기반 CI 및 CD 파이프라인 구축 (Jenkins에서 마이그레이션) 을 통한 포매팅, 단위 테스트, 배포 등 반복 작업 자동화 및 기능 추가와 버그 수정 프로세스 간소화",
          },
          image: "/images/development-and-ci-cd-pipeline-construction-of-python-library-1.webp",
        },
        {
          content: {
            en: "To prevent unnecessary deployments from non-production changes like documentation updates, implemented a detailed branching strategy on GitHub and set up dedicated pipelines for code segregation.",
            ko: "문서 업데이트 등 비프로덕션 변경으로 인한 불필요한 배포 방지를 위한 GitHub 세부 브랜칭 전략 구현 및 코드 분리용 전용 파이프라인 설정",
          },
          image: "/images/development-and-ci-cd-pipeline-construction-of-python-library-2.webp",
        },
        {
          content: {
            en: "Simplified version tracking by building a pipeline using the GitHub API to automatically generate and publish release notes to GitHub Releases, improving transparency across development cycles.",
            ko: "GitHub API를 활용한 릴리즈 노트 자동 생성 및 GitHub Releases 배포 파이프라인 구축을 통한 버전 추적 단순화 및 개발 사이클 투명성 향상",
          },
        },
        {
          content: {
            en: "Ensured easy access to comprehensive project guidelines and function usage by creating a Sphinx-based documentation pipeline, deploying it via GitHub Pages for consistent and up-to-date project documentation.",
            ko: "Sphinx 기반 문서 파이프라인 구축 및 GitHub Pages 배포로 포괄적 프로젝트 문서 제공",
          },
          image: "/images/development-and-ci-cd-pipeline-construction-of-python-library-3.webp",
        },
      ],
    },
    {
      title: {
        en: "Python Library for Pre/Post-Processing, Visualization, and Model Backend",
        ko: "전처리 및 후처리, 시각화 및 모델 백엔드를 위한 Python 라이브러리",
      },
      subTitle: "AgileSoDA",
      startedAt: "2023-10",
      endedAt: "2024-09",
      keywords: ["Python", "Numpy", "OpenCV", "PyTorch", "Triton Inference Server", "PyTest", "Sphinx"],
      descriptions: [
        {
          content: {
            en: "Packaged frequently used classes and functions within the model backend into a Python library to streamline development processes.",
            ko: "모델 백엔드 내 빈번한 사용 클래스 및 함수의 Python 라이브러리 패키징을 통한 개발 프로세스 간소화",
          },
        },
        {
          content: {
            en: "Utilized Docstring to document functions and classes, enhancing code clarity and team collaboration, while maintaining library integrity through type hints and PyTest.",
            ko: "Docstring 기반 함수 및 클래스 문서화와 타입 힌트 및 PyTest를 통한 라이브러리 무결성 보장 및 코드 품질 향상",
          },
        },
        {
          content: {
            en: "Faced with significant compatibility issues due to inconsistent libraries and formats for model outputs, standardized the data format for preprocessing and model inference visualization, enabling consistent visualization and resolving unexpected compatibility problems.",
            ko: "모델 출력 호환성 문제 해결을 위한 전처리 및 시각화 데이터 형식 표준화로 일관된 시각화 구현",
          },
        },
        {
          content: {
            en: "Addressed inefficiencies in post-processing due to Python-native functions with high time complexity by optimizing them with Cython-native functions and improving time complexity. ([inference time decreased by 74.12%](https://github.com/Zerohertz/pan_pp.pytorch/tree/SpeedImprovement))",
            ko: "높은 시간 복잡도를 가진 Python 네이티브 함수의 Cython 최적화로 후처리 성능 개선 ([추론 시간 74.12% 감소](https://github.com/Zerohertz/pan_pp.pytorch/tree/SpeedImprovement))",
          },
          image: "/images/python-library-for-pre-post-processing-visualization-and-model-backend-0.webp",
        },
        {
          content: {
            en: "Developed a unified class and inheritance structure for Triton Inference Server.",
            ko: "Triton Inference Server용 통합 클래스 및 상속 구조 개발",
          },
        },
      ],
    },
    {
      title: {
        en: "AI-based OCR Solution, TwinReader",
        ko: "AI 기반 OCR 솔루션, TwinReader",
      },
      subTitle: "AgileSoDA",
      startedAt: "2023-02",
      endedAt: "2024-09",
      keywords: [
        "Python",
        "PyTorch",
        "Triton Inference Server",
        "FastAPI",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "DVC",
        "MinIO",
      ],
      descriptions: [
        {
          content: {
            en: "Developed models for document area detection, rotated document classification, and detection of text, signatures, and checkboxes, along with a Python backend for model deployment.",
            ko: "문서 영역 탐지, 회전 문서 분류, 텍스트 및 서명과 체크박스 탐지 모델 개발 및 모델 배포용 Python 백엔드 구축",
          },
        },
        {
          content: {
            en: "Integrated project source codes using Git Submodule to facilitate a smooth collaborative environment.",
            ko: "Git Submodule을 활용한 프로젝트 소스 코드 통합 및 원활한 협업 환경 구축",
          },
        },
        {
          content: {
            en: "Implemented a pipeline using GitLab CI and Kubernetes to separate backend dependencies from code and weights, deploying through the Kubernetes sidecar pattern, which resolved versioning challenges and significantly reduced build times for the model backend.",
            ko: "GitLab CI와 Kubernetes를 활용한 백엔드 의존성과 코드 및 모델 가중치 분리 아키텍처 구현, Kubernetes 사이드카 패턴 배포를 통한 버전 관리 문제 해결 및 ML 모델 서빙 빌드 시간 대폭 단축",
          },
          image: "/images/ai-based-ocr-solution-twinreader-0.webp",
        },
        {
          content: {
            en: "Faced with excessive GPU usage during model deployment, resolved the issue by identifying and fixing a memory leak through GPU resource monitoring and logging. (GPU memory usage reduced by 47.9%)",
            ko: "ML 모델 서빙 시 GPU 리소스 모니터링 및 로깅을 통한 메모리 누수 식별과 수정으로 과도한 GPU 사용량 최적화 (GPU 메모리 사용량 47.9% 감소)",
          },
          image: "/images/ai-based-ocr-solution-twinreader-1.webp",
        },
        {
          content: {
            en: "Reduced inference time for a text detection model, where frequent calls made optimization critical, by utilizing TensorRT-based quantization. ([inference time decreased by 87.31%](https://github.com/Zerohertz/PANPP/tree/TensorRT))",
            ko: "빈번한 호출로 인해 레이턴시가 중요한 텍스트 탐지 모델의 TensorRT 기반 모델 양자화 적용을 통한 추론 성능 최적화 ([추론 시간 87.31% 감소](https://github.com/Zerohertz/PANPP/tree/TensorRT))",
          },
          image: "/images/ai-based-ocr-solution-twinreader-2.webp",
        },
        {
          content: {
            en: "Encountered low accuracy in document rotation classification, addressed by performing batch inference on image tensors rotated in four directions and averaging the results. (improved accuracy by 2.01%p)",
            ko: "문서 회전 분류의 낮은 정확도 문제 해결을 위한 4방향 회전 이미지 텐서 배치 추론 및 결과 평균화 (정확도 2.01%p 향상)",
          },
          image: "/images/ai-based-ocr-solution-twinreader-3.webp",
        },
      ],
    },
    {
      title: {
        en: "Information Extraction Model Development for Trade Document Processing",
        ko: "무역 문서 처리를 위한 정보 추출 모델 개발",
      },
      subTitle: "AgileSoDA",
      startedAt: "2024-02",
      endedAt: "2024-05",
      keywords: ["Python", "PyTorch", "Triton Inference Server", "Label Studio", "Streamlit", "Docker", "Kubernetes"],
      descriptions: [
        {
          content: {
            en: "Performed clustering, annotation, preprocessing, training, and deployment to develop a model for extracting information from a wide variety of trade document formats.",
            ko: "다양한 무역 문서 형식에서의 정보 추출 모델 개발을 위한 클러스터링, 어노테이션, 전처리, 학습 및 배포 수행",
          },
        },
        {
          content: {
            en: "Faced with the challenge of categorizing large volumes of unstructured PDF documents, developed an AI OCR-based pipeline utilizing OCR results and LLM prompting to efficiently classify and sort documents. (achieved 93.75% accuracy)",
            ko: "대량의 비정형 PDF 문서 분류 문제 해결을 위한 OCR 결과와 LLM 프롬프팅을 활용한 AI OCR 기반 파이프라인 개발 및 효율적 문서 분류와 정리 (93.75% 정확도 달성)",
          },
        },
        {
          content: {
            en: "To address the high time and cost demands of large-scale data annotation requiring expert knowledge, accelerated the process by implementing pre-labeling through an ML backend using Label Studio SDK, significantly reduced annotation time and costs.",
            ko: "전문 지식이 필요한 대규모 데이터 어노테이션의 높은 시간과 비용 문제 해결을 위한 Label Studio SDK를 활용한 ML 백엔드 기반 사전 라벨링 구현 및 어노테이션 시간과 비용 대폭 단축",
          },
        },
        {
          content: {
            en: "Encountered difficulties in manually checking complex human errors during annotation review, developed a Streamlit-based GUI to allow easy detection and correction of these errors through simple configurations.",
            ko: "어노테이션 검토 시 복잡한 인적 오류 수동 확인의 어려움 해결을 위한 Streamlit 기반 GUI 개발 및 간단한 설정을 통한 오류 탐지와 수정 기능 구현",
          },
        },
      ],
    },
    {
      title: {
        en: "AI-based Automotive Damage and Depth Recognition Product, TwinCar",
        ko: "AI 기반 자동차 손상 및 심도 인식 제품, TwinCar",
      },
      subTitle: "AgileSoDA",
      startedAt: "2023-11",
      endedAt: "2024-02",
      keywords: ["Python", "PyTorch", "Triton Inference Server", "Streamlit", "Docker", "Kubernetes"],
      descriptions: [
        {
          content: {
            en: "Developed a vehicle type classification model for PoC execution.",
            ko: "PoC 수행을 위한 차량 유형 분류 모델 개발",
          },
        },
        {
          content: {
            en: "Conducted research and development models for filter, part recognition, repair type, and damage type, along with the model inference pipeline.",
            ko: "필터, 부품 인식, 수리 유형, 손상 유형 모델 연구개발 및 모델 추론 파이프라인 구축",
          },
        },
        {
          content: {
            en: "Developed a demo page using Streamlit and deployed it on Kubernetes.",
            ko: "Streamlit 기반 데모 페이지 개발 및 Kubernetes 배포",
          },
        },
      ],
    },
    {
      title: {
        en: "AI Diagnostic Service for Burn Patients",
        ko: "화상 환자를 위한 AI 진단 서비스",
      },
      subTitle: "AgileSoDA",
      startedAt: "2023-04",
      endedAt: "2023-11",
      keywords: ["Python", "PyTorch", "Triton Inference Server", "FastAPI", "Gradio", "Docker", "Kubernetes"],
      descriptions: [
        {
          content: {
            en: "Developed models for segmentation of burn areas and severity diagnosis in burn patients.",
            ko: "화상 환자의 화상 영역 분할 및 중증도 진단 모델 개발",
          },
        },
        {
          content: {
            en: "Designed and developed an API for model deployment using Triton Inference Server.",
            ko: "Triton Inference Server를 활용한 모델 배포용 API 설계 및 개발",
          },
          image: "/images/ai-diagnostic-service-for-burn-patients-0.webp",
        },
      ],
    },
    {
      title: {
        en: "On-premise Kubernetes Cluster",
        ko: "On-premise Kubernetes 클러스터 구축",
      },
      subTitle: "Personal Project",
      startedAt: "2023-08",
      endedAt: "2023-09",
      keywords: ["Kubernetes", "Traefik", "Prometheus", "Grafana", "Apache Airflow", "Argo CD", "Jenkins"],
      descriptions: [
        {
          content: {
            en: "Zerohertz/k8s-on-premise (GitHub)",
            ko: "Zerohertz/k8s-on-premise (GitHub)",
          },
          href: "https://github.com/Zerohertz/k8s-on-premise",
          image: "/images/on-premise-kubernetes-cluster-0.webp",
        },
        {
          content: {
            en: "Blog posts",
            ko: "Blog posts",
          },
          href: "https://zerohertz.github.io/tags/home-server/",
          image: "/images/on-premise-kubernetes-cluster-1.webp",
        },
        {
          content: {
            en: "Installed Kubernetes using Kubeadm on an on-premise environment to enhance understanding of Kubernetes architecture and practical usage.",
            ko: "Kubernetes 아키텍처 이해도 및 실용적 활용 능력 향상을 위한 On-premise 환경에서 Kubeadm 기반 Kubernetes 설치",
          },
        },
        {
          content: {
            en: "Secured deployed services by implementing HTTPS protocol and Google OAuth2 through Traefik.",
            ko: "Traefik을 통한 HTTPS 프로토콜 및 Google OAuth2 구현을 통한 배포 서비스 보안 강화",
          },
        },
        {
          content: {
            en: "Established GitOps by automating build and deployment processes using GitHub Actions and Argo CD.",
            ko: "GitHub Actions와 Argo CD를 활용한 빌드 및 배포 프로세스 자동화를 통한 GitOps 구축",
          },
        },
        {
          content: {
            en: "Built a node status monitoring GUI leveraging Node Exporter, Prometheus, and Grafana.",
            ko: "Node Exporter, Prometheus, Grafana를 활용한 노드 상태 모니터링 GUI 구축",
          },
        },
        {
          content: {
            en: "Automated various tasks using Apache Airflow integrated with KubernetesPodOperator.",
            ko: "KubernetesPodOperator 통합 Apache Airflow를 활용한 다양한 작업 자동화",
          },
        },
        {
          content: {
            en: "Set up a Docker image build and deployment pipeline using Jenkins and Kaniko.",
            ko: "Jenkins와 Kaniko를 활용한 Docker 이미지 빌드 및 배포 파이프라인 구축",
          },
        },
      ],
    },
  ],
};

export default projects;
