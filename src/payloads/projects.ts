import Payload from "@/components/common/Payload";

const projects: Payload = {
  title: "PROJECTS",
  disable: false,
  list: [
    {
      title: {
        ko: "LLMOps 솔루션, GenOS",
        en: "LLMOps Solution, GenOS",
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
            ko: "최신 대규모 언어 모델(LLM)의 지속적인 평가 및 벤치마킹을 수행하여 학습 및 추론 배포를 위한 최적의 컴퓨팅 리소스 요구사항 및 구성 매개변수를 결정했습니다.",
            en: "Conducted continuous evaluation and benchmarking of state-of-the-art Large Language Models (LLMs) to determine optimal computing resource requirements and configuration parameters for training and inference deployment.",
          },
        },
        {
          content: {
            ko: "직관적인 웹 기반 사용자 인터페이스를 통해 분산 학습 및 서빙 구성을 가능하게 하는 마이크로서비스 아키텍처(MSA)를 설계하고 개발했습니다.",
            en: "Designed and developed microservices architecture (MSA) enabling distributed training and serving configuration through intuitive web-based user interfaces.",
          },
        },
        {
          content: {
            ko: "Prometheus 운영자 통합을 구현하고 LLM 서빙 인프라의 관찰성 및 모니터링 기능을 향상시키기 위한 포괄적인 Grafana 대시보드를 개발했습니다.",
            en: "Implemented Prometheus operator integration and developed comprehensive Grafana dashboards to enhance observability and monitoring capabilities for LLM serving infrastructure.",
          },
          image: "images/llmops-solution-genos-0.webp",
        },
        {
          content: {
            ko: "객체 스토리지에서 네트워크 파일 시스템(NFS) 프로비저너로 마이그레이션하여 임시 스토리지 제한을 해결하고 시스템 안정성과 성능을 향상시켰습니다.",
            en: "Resolved ephemeral storage limitations by migrating from object storage to Network File System (NFS) provisioner, improving system reliability and performance.",
          },
        },
        {
          content: {
            ko: "모델 컨텍스트 프로토콜(MCP) 기능 통합 및 구현을 위한 전략적 계획 및 아키텍처 설계를 주도했습니다.",
            en: "Led strategic planning and architectural design for Model Context Protocol (MCP) feature integration and implementation.",
          },
        },
      ],
    },
    {
      title: {
        ko: "Python 라이브러리 개발 및 CI/CD 파이프라인 구축",
        en: "Development and CI/CD Pipeline Construction of Python Library",
      },
      subTitle: "Personal Project",
      startedAt: "2023-11",
      endedAt: "2024-12",
      keywords: ["Python", "PyTest", "Sphinx", "Kubernetes", "Jenkins", "GitHub Actions", "Codecov", "PyPI"],
      descriptions: [
        {
          content: {
            ko: "Zerohertz/zerohertzLib (GitHub)",
            en: "Zerohertz/zerohertzLib (GitHub)",
          },
          href: "https://github.com/Zerohertz/zerohertzLib",
        },
        {
          content: {
            ko: "Python Library (PyPI)",
            en: "Python Library (PyPI)",
          },
          href: "https://pypi.org/project/zerohertzLib/",
        },
        {
          content: {
            ko: "Docs (Sphinx)",
            en: "Docs (Sphinx)",
          },
          href: "https://zerohertz.github.io/zerohertzLib/",
        },
        {
          content: {
            ko: "일반적으로 사용되는 함수를 재구현하는 데 드는 시간 소모와 비효율성을 줄이기 위해 사용자 정의 Python 라이브러리를 개발하여 PyPI와 GitHub Releases에 배포하여 프로젝트 전반에 걸쳐 효율성과 코드 재사용성을 향상시켰습니다.",
            en: "To reduce time consumption and inefficiency from reimplementing commonly used functions, developed and published a custom Python library on PyPI and GitHub Releases to enhance efficiency and code reusability across projects.",
          },
          image: "images/development-and-ci-cd-pipeline-construction-of-python-library-0.webp",
        },
        {
          content: {
            ko: "GitHub Actions 기반 CI/CD 파이프라인을 구축하여(Jenkins에서 마이그레이션) 포매팅, 단위 테스트, 배포와 같은 반복적인 작업을 자동화하여 기능 추가와 버그 수정 프로세스를 간소화했습니다.",
            en: "Built a GitHub Actions-based CI/CD pipeline (migrated from Jenkins) to automate repetitive tasks such as formatting, unit testing, and deployment, streamlining the process for feature additions and bug fixes.",
          },
          image: "images/development-and-ci-cd-pipeline-construction-of-python-library-1.webp",
        },
        {
          content: {
            ko: "문서 업데이트와 같은 비프로덕션 변경으로 인한 불필요한 배포를 방지하기 위해 GitHub에서 세부적인 브랜칭 전략을 구현하고 코드 분리를 위한 전용 파이프라인을 설정했습니다.",
            en: "To prevent unnecessary deployments from non-production changes like documentation updates, implemented a detailed branching strategy on GitHub and set up dedicated pipelines for code segregation.",
          },
          image: "images/development-and-ci-cd-pipeline-construction-of-python-library-2.webp",
        },
        {
          content: {
            ko: "GitHub API를 사용하여 릴리즈 노트를 자동으로 생성하고 GitHub Releases에 배포하는 파이프라인을 구축하여 버전 추적을 단순화하고 개발 사이클 전반에 걸쳐 투명성을 향상시켰습니다.",
            en: "Simplified version tracking by building a pipeline using the GitHub API to automatically generate and publish release notes to GitHub Releases, improving transparency across development cycles.",
          },
        },
        {
          content: {
            ko: "Sphinx 기반 문서 파이프라인을 생성하고 GitHub Pages를 통해 배포하여 포괄적인 프로젝트 가이드라인과 함수 사용법에 대한 쉽은 액세스를 보장하여 일관되고 최신 프로젝트 문서를 제공했습니다.",
            en: "Ensured easy access to comprehensive project guidelines and function usage by creating a Sphinx-based documentation pipeline, deploying it via GitHub Pages for consistent and up-to-date project documentation.",
          },
          image: "images/development-and-ci-cd-pipeline-construction-of-python-library-3.webp",
        },
      ],
    },
    {
      title: {
        ko: "전처리/후처리, 시각화 및 모델 백엔드를 위한 Python 라이브러리",
        en: "Python Library for Pre/Post-Processing, Visualization, and Model Backend",
      },
      subTitle: "AgileSoDA",
      startedAt: "2023-10",
      endedAt: "2024-09",
      keywords: ["Python", "Numpy", "OpenCV", "PyTorch", "Triton Inference Server", "PyTest", "Sphinx"],
      descriptions: [
        {
          content: {
            ko: "모델 백엔드 내에서 빈번히 사용되는 클래스와 함수를 Python 라이브러리로 패키징하여 개발 프로세스를 간소화했습니다.",
            en: "Packaged frequently used classes and functions within the model backend into a Python library to streamline development processes.",
          },
        },
        {
          content: {
            ko: "Docstring을 활용하여 함수와 클래스를 문서화하고, 타입 힌트와 PyTest를 통해 라이브러리 무결성을 유지하면서 코드 명확성과 팀 협업을 향상시켰습니다.",
            en: "Utilized Docstring to document functions and classes, enhancing code clarity and team collaboration, while maintaining library integrity through type hints and PyTest.",
          },
        },
        {
          content: {
            ko: "Faced with significant compatibility issues due to inconsistent libraries and formats for model outputs, standardized the data format for preprocessing and model inference visualization, enabling consistent visualization and resolving unexpected compatibility problems.",
            en: "Faced with significant compatibility issues due to inconsistent libraries and formats for model outputs, standardized the data format for preprocessing and model inference visualization, enabling consistent visualization and resolving unexpected compatibility problems.",
          },
        },
        {
          content: {
            ko: "Addressed inefficiencies in post-processing due to Python-native functions with high time complexity by optimizing them with Cython-native functions and improving time complexity. ([inference time decreased by 74.12%](https://github.com/Zerohertz/pan_pp.pytorch/tree/SpeedImprovement))",
            en: "Addressed inefficiencies in post-processing due to Python-native functions with high time complexity by optimizing them with Cython-native functions and improving time complexity. ([inference time decreased by 74.12%](https://github.com/Zerohertz/pan_pp.pytorch/tree/SpeedImprovement))",
          },
          image: "images/python-library-for-pre-post-processing-visualization-and-model-backend-0.webp",
        },
        {
          content: {
            ko: "Triton Inference Server를 위한 통합된 클래스 및 상속 구조를 개발했습니다.",
            en: "Developed a unified class and inheritance structure for Triton Inference Server.",
          },
        },
      ],
    },
    {
      title: {
        ko: "AI 기반 OCR 솔루션, TwinReader",
        en: "AI-based OCR Solution, TwinReader",
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
            ko: "Developed models for document area detection, rotated document classification, and detection of text, signatures, and checkboxes, along with a Python backend for model deployment.",
            en: "Developed models for document area detection, rotated document classification, and detection of text, signatures, and checkboxes, along with a Python backend for model deployment.",
          },
        },
        {
          content: {
            ko: "Integrated project source codes using Git Submodule to facilitate a smooth collaborative environment.",
            en: "Integrated project source codes using Git Submodule to facilitate a smooth collaborative environment.",
          },
        },
        {
          content: {
            ko: "Implemented a pipeline using GitLab CI and Kubernetes to separate backend dependencies from code and weights, deploying through the Kubernetes sidecar pattern, which resolved versioning challenges and significantly reduced build times for the model backend.",
            en: "Implemented a pipeline using GitLab CI and Kubernetes to separate backend dependencies from code and weights, deploying through the Kubernetes sidecar pattern, which resolved versioning challenges and significantly reduced build times for the model backend.",
          },
          image: "images/ai-based-ocr-solution-twinreader-0.webp",
        },
        {
          content: {
            ko: "Faced with excessive GPU usage during model deployment, resolved the issue by identifying and fixing a memory leak through GPU resource monitoring and logging. (GPU memory usage reduced by 47.9%)",
            en: "Faced with excessive GPU usage during model deployment, resolved the issue by identifying and fixing a memory leak through GPU resource monitoring and logging. (GPU memory usage reduced by 47.9%)",
          },
          image: "images/ai-based-ocr-solution-twinreader-1.webp",
        },
        {
          content: {
            ko: "Reduced inference time for a text detection model, where frequent calls made optimization critical, by utilizing TensorRT-based quantization. ([inference time decreased by 87.31%](https://github.com/Zerohertz/PANPP/tree/TensorRT))",
            en: "Reduced inference time for a text detection model, where frequent calls made optimization critical, by utilizing TensorRT-based quantization. ([inference time decreased by 87.31%](https://github.com/Zerohertz/PANPP/tree/TensorRT))",
          },
          image: "images/ai-based-ocr-solution-twinreader-2.webp",
        },
        {
          content: {
            ko: "Encountered low accuracy in document rotation classification, addressed by performing batch inference on image tensors rotated in four directions and averaging the results. (improved accuracy by 2.01%p)",
            en: "Encountered low accuracy in document rotation classification, addressed by performing batch inference on image tensors rotated in four directions and averaging the results. (improved accuracy by 2.01%p)",
          },
          image: "images/ai-based-ocr-solution-twinreader-3.webp",
        },
      ],
    },
    {
      title: {
        ko: "무역 문서 처리를 위한 정보 추출 모델 개발",
        en: "Information Extraction Model Development for Trade Document Processing",
      },
      subTitle: "AgileSoDA",
      startedAt: "2024-02",
      endedAt: "2024-05",
      keywords: ["Python", "PyTorch", "Triton Inference Server", "Label Studio", "Streamlit", "Docker", "Kubernetes"],
      descriptions: [
        {
          content: {
            ko: "Performed clustering, annotation, preprocessing, training, and deployment to develop a model for extracting information from a wide variety of trade document formats.",
            en: "Performed clustering, annotation, preprocessing, training, and deployment to develop a model for extracting information from a wide variety of trade document formats.",
          },
        },
        {
          content: {
            ko: "Faced with the challenge of categorizing large volumes of unstructured PDF documents, developed an AI OCR-based pipeline utilizing OCR results and LLM prompting to efficiently classify and sort documents. (achieved 93.75% accuracy)",
            en: "Faced with the challenge of categorizing large volumes of unstructured PDF documents, developed an AI OCR-based pipeline utilizing OCR results and LLM prompting to efficiently classify and sort documents. (achieved 93.75% accuracy)",
          },
        },
        {
          content: {
            ko: "To address the high time and cost demands of large-scale data annotation requiring expert knowledge, accelerated the process by implementing pre-labeling through an ML backend using Label Studio SDK, significantly reduced annotation time and costs.",
            en: "To address the high time and cost demands of large-scale data annotation requiring expert knowledge, accelerated the process by implementing pre-labeling through an ML backend using Label Studio SDK, significantly reduced annotation time and costs.",
          },
        },
        {
          content: {
            ko: "Encountered difficulties in manually checking complex human errors during annotation review, developed a Streamlit-based GUI to allow easy detection and correction of these errors through simple configurations.",
            en: "Encountered difficulties in manually checking complex human errors during annotation review, developed a Streamlit-based GUI to allow easy detection and correction of these errors through simple configurations.",
          },
        },
      ],
    },
    {
      title: {
        ko: "AI 기반 자동차 손상 및 심도 인식 제품, TwinCar",
        en: "AI-based Automotive Damage and Depth Recognition Product, TwinCar",
      },
      subTitle: "AgileSoDA",
      startedAt: "2023-11",
      endedAt: "2024-02",
      keywords: ["Python", "PyTorch", "Triton Inference Server", "Streamlit", "Docker", "Kubernetes"],
      descriptions: [
        {
          content: {
            ko: "Developed a vehicle type classification model for PoC execution.",
            en: "Developed a vehicle type classification model for PoC execution.",
          },
        },
        {
          content: {
            ko: "Conducted research and development models for filter, part recognition, repair type, and damage type, along with the model inference pipeline.",
            en: "Conducted research and development models for filter, part recognition, repair type, and damage type, along with the model inference pipeline.",
          },
        },
        {
          content: {
            ko: "Developed a demo page using Streamlit and deployed it on Kubernetes.",
            en: "Developed a demo page using Streamlit and deployed it on Kubernetes.",
          },
        },
      ],
    },
    {
      title: {
        ko: "화상 환자를 위한 AI 진단 서비스",
        en: "AI Diagnostic Service for Burn Patients",
      },
      subTitle: "AgileSoDA",
      startedAt: "2023-04",
      endedAt: "2023-11",
      keywords: ["Python", "PyTorch", "Triton Inference Server", "FastAPI", "Gradio", "Docker", "Kubernetes"],
      descriptions: [
        {
          content: {
            ko: "Developed models for segmentation of burn areas and severity diagnosis in burn patients.",
            en: "Developed models for segmentation of burn areas and severity diagnosis in burn patients.",
          },
        },
        {
          content: {
            ko: "Designed and developed an API for model deployment using Triton Inference Server.",
            en: "Designed and developed an API for model deployment using Triton Inference Server.",
          },
          image: "images/ai-diagnostic-service-for-burn-patients-0.webp",
        },
      ],
    },
    {
      title: {
        ko: "On-premise Kubernetes 클러스터",
        en: "On-premise Kubernetes Cluster",
      },
      subTitle: "Personal Project",
      startedAt: "2023-08",
      endedAt: "2023-09",
      keywords: ["Kubernetes", "Traefik", "Prometheus", "Grafana", "Apache Airflow", "Argo CD", "Jenkins"],
      descriptions: [
        {
          content: {
            ko: "Zerohertz/k8s-on-premise (GitHub)",
            en: "Zerohertz/k8s-on-premise (GitHub)",
          },
          href: "https://github.com/Zerohertz/k8s-on-premise",
          image: "images/on-premise-kubernetes-cluster-0.webp",
        },
        {
          content: {
            ko: "Blog posts",
            en: "Blog posts",
          },
          href: "https://zerohertz.github.io/tags/home-server/",
          image: "images/on-premise-kubernetes-cluster-1.webp",
        },
        {
          content: {
            ko: "Installed Kubernetes using Kubeadm on an on-premise environment to enhance understanding of Kubernetes architecture and practical usage.",
            en: "Installed Kubernetes using Kubeadm on an on-premise environment to enhance understanding of Kubernetes architecture and practical usage.",
          },
        },
        {
          content: {
            ko: "Secured deployed services by implementing HTTPS protocol and Google OAuth2 through Traefik.",
            en: "Secured deployed services by implementing HTTPS protocol and Google OAuth2 through Traefik.",
          },
        },
        {
          content: {
            ko: "Established GitOps by automating build and deployment processes using GitHub Actions and Argo CD.",
            en: "Established GitOps by automating build and deployment processes using GitHub Actions and Argo CD.",
          },
        },
        {
          content: {
            ko: "Built a node status monitoring GUI leveraging Node Exporter, Prometheus, and Grafana.",
            en: "Built a node status monitoring GUI leveraging Node Exporter, Prometheus, and Grafana.",
          },
        },
        {
          content: {
            ko: "Automated various tasks using Apache Airflow integrated with KubernetesPodOperator.",
            en: "Automated various tasks using Apache Airflow integrated with KubernetesPodOperator.",
          },
        },
        {
          content: {
            ko: "Set up a Docker image build and deployment pipeline using Jenkins and Kaniko.",
            en: "Set up a Docker image build and deployment pipeline using Jenkins and Kaniko.",
          },
        },
      ],
    },
    {
      title: {
        ko: "모자이크 분류",
        en: "Mosaic Classification",
      },
      subTitle: "BOAZ",
      startedAt: "2023-01",
      endedAt: "2023-07",
      keywords: ["Python", "PyTorch", "Triton Inference Server", "FastAPI", "Amazon EC2", "Docker"],
      descriptions: [
        {
          content: {
            ko: "Team-BoonMoSa (GitHub)",
            en: "Team-BoonMoSa (GitHub)",
          },
          href: "https://github.com/Team-BoonMoSa",
          image: "images/mosaic-classification-0.webp",
        },
        {
          content: {
            ko: "Developed a YOLOv5 based logo segmentation model.",
            en: "Developed a YOLOv5 based logo segmentation model.",
          },
        },
        {
          content: {
            ko: "Constructed a model deployment server on Amazon EC2 Inf1.",
            en: "Constructed a model deployment server on Amazon EC2 Inf1.",
          },
          image: "images/mosaic-classification-1.webp",
        },
      ],
    },
  ],
};

export default projects;
