import Payload from "@/components/common/Payload";

const projects: Payload = {
  title: "PROJECTS",
  disable: false,
  list: [
    {
      title: "Development and CI/CD Pipeline Construction of Python Library",
      subTitle: "Personal Project",
      startedAt: "2023-11",
      onGoing: true,
      descriptions: [
        {
          content: "Zerohertz/zerohertzLib (GitHub)",
          href: "https://github.com/Zerohertz/zerohertzLib",
        },
        {
          content: "Python Library (PyPI)",
          href: "https://pypi.org/project/zerohertzLib/",
        },
        {
          content: "Docs (Sphinx)",
          href: "https://zerohertz.github.io/zerohertzLib/",
        },
        {
          content:
            "To reduce time consumption and inefficiency from reimplementing commonly used functions, developed and published a custom Python library on PyPI and GitHub Releases to enhance efficiency and code reusability across projects.",
          image: "images/dacp-0.png",
        },
        {
          content:
            "Built a GitHub Actions-based CI/CD pipeline (migrated from Jenkins) to automate repetitive tasks such as formatting, unit testing, and deployment, streamlining the process for feature additions and bug fixes.",
          image: "images/dacp-1.png",
        },
        {
          content:
            "To prevent unnecessary deployments from non-production changes like documentation updates, implemented a detailed branching strategy on GitHub and set up dedicated pipelines for code segregation.",
          image: "images/dacp-2.png",
        },
        {
          content:
            "Simplified version tracking by building a pipeline using the GitHub API to automatically generate and publish release notes to GitHub Releases, improving transparency across development cycles.",
        },
        {
          content:
            "Ensured easy access to comprehensive project guidelines and function usage by creating a Sphinx-based documentation pipeline, deploying it via GitHub Pages for consistent and up-to-date project documentation.",
          image: "images/dacp-3.png",
        },
      ],
    },
    {
      title: "Python Library for Pre/Post-Processing, Visualization, and Model Backend",
      subTitle: "AgileSoDA",
      startedAt: "2023-10",
      endedAt: "2024-09",
      descriptions: [
        {
          content:
            "Packaged frequently used classes and functions within the model backend into a Python library to streamline development processes.",
        },
        {
          content:
            "Utilized Docstring to document functions and classes, enhancing code clarity and team collaboration, while maintaining library integrity through type hints and PyTest.",
        },
        {
          content:
            "Faced with significant compatibility issues due to inconsistent libraries and formats for model outputs, standardized the data format for preprocessing and model inference visualization, enabling consistent visualization and resolving unexpected compatibility problems.",
        },
        {
          content:
            "Addressed inefficiencies in post-processing due to Python-native functions with high time complexity by optimizing them with Cython-native functions and improving time complexity. ([inference time decreased by 74.12%](https://github.com/Zerohertz/pan_pp.pytorch/tree/SpeedImprovement))",
          image: "images/plfp-0.png",
        },
        {
          content: "Developed a unified class and inheritance structure for Triton Inference Server.",
        },
      ],
    },
    {
      title: "AI-based OCR Solution, TwinReader",
      subTitle: "AgileSoDA",
      startedAt: "2023-02",
      endedAt: "2024-09",
      descriptions: [
        {
          content:
            "Developed models for document area detection, rotated document classification, and detection of text, signatures, and checkboxes, along with a Python backend for model deployment.",
        },
        {
          content:
            "Integrated project source codes using Git Submodule to facilitate a smooth collaborative environment.",
        },
        {
          content:
            "Implemented a pipeline using GitLab CI and Kubernetes to separate backend dependencies from code and weights, deploying through the Kubernetes sidecar pattern, which resolved versioning challenges and significantly reduced build times for the model backend.",
          image: "images/abos-0.png",
        },
        {
          content:
            "Faced with excessive GPU usage during model deployment, resolved the issue by identifying and fixing a memory leak through GPU resource monitoring and logging. (GPU memory usage reduced by 47.9%)",
          image: "images/abos-1.png",
        },
        {
          content:
            "Reduced inference time for a text detection model, where frequent calls made optimization critical, by utilizing TensorRT-based quantization. ([inference time decreased by 87.31%](https://github.com/Zerohertz/PANPP/tree/TensorRT))",
          image: "images/abos-2.png",
        },
        {
          content:
            "Encountered low accuracy in document rotation classification, addressed by performing batch inference on image tensors rotated in four directions and averaging the results. (improved accuracy by 2.01%p)",
          image: "images/abos-3.png",
        },
      ],
    },
    {
      title: "Information Extraction Model Development for Trade Document Processing",
      subTitle: "AgileSoDA",
      startedAt: "2024-02",
      endedAt: "2024-05",
      descriptions: [
        {
          content:
            "Performed clustering, annotation, preprocessing, training, and deployment to develop a model for extracting information from a wide variety of trade document formats.",
        },
        {
          content:
            "Faced with the challenge of categorizing large volumes of unstructured PDF documents, developed an AI OCR-based pipeline utilizing OCR results and LLM prompting to efficiently classify and sort documents. (achieved 93.75% accuracy)",
        },
        {
          content:
            "To address the high time and cost demands of large-scale data annotation requiring expert knowledge, accelerated the process by implementing pre-labeling through an ML backend using Label Studio SDK, significantly reduced annotation time and costs.",
        },
        {
          content:
            "Encountered difficulties in manually checking complex human errors during annotation review, developed a Streamlit-based GUI to allow easy detection and correction of these errors through simple configurations.",
        },
      ],
    },
    {
      title: "AI-based Automotive Damage and Depth Recognition Product, TwinCar",
      subTitle: "AgileSoDA",
      startedAt: "2023-11",
      endedAt: "2024-02",
      descriptions: [
        { content: "Developed a vehicle type classification model for PoC execution." },
        {
          content:
            "Conducted research and development models for filter, part recognition, repair type, and damage type, along with the model inference pipeline.",
        },
        { content: "Developed a demo page using Streamlit and deployed it on Kubernetes." },
      ],
    },
    {
      title: "AI Diagnostic Service for Burn Patients",
      subTitle: "AgileSoDA",
      startedAt: "2023-04",
      endedAt: "2023-11",
      descriptions: [
        {
          content: "Developed models for segmentation of burn areas and severity diagnosis in burn patients.",
        },
        {
          content: "Designed and developed an API for model deployment using Triton Inference Server.",
          image: "images/adsf-0.png",
        },
      ],
    },
    {
      title: "On-premise Kubernetes Cluster",
      subTitle: "Personal Project",
      startedAt: "2023-08",
      endedAt: "2023-09",
      descriptions: [
        {
          content: "Zerohertz/k8s-on-premise (GitHub)",
          href: "https://github.com/Zerohertz/k8s-on-premise",
          image: "images/opkc-0.png",
        },
        {
          content: "Blog posts",
          href: "https://zerohertz.github.io/tags/home-server/",
          image: "images/opkc-1.png",
        },
        {
          content:
            "Installed Kubernetes using Kubeadm on an on-premise environment to enhance understanding of Kubernetes architecture and practical usage.",
        },
        {
          content: "Secured deployed services by implementing HTTPS protocol and Google OAuth2 through Traefik.",
        },
        {
          content: "Established GitOps by automating build and deployment processes using GitHub Actions and Argo CD.",
        },
        {
          content: "Built a node status monitoring GUI leveraging Node Exporter, Prometheus, and Grafana.",
        },
        {
          content: "Automated various tasks using Apache Airflow integrated with KubernetesPodOperator.",
        },
        {
          content: "Set up a Docker image build and deployment pipeline using Jenkins and Kaniko.",
        },
      ],
    },
    {
      title: "Mosaic Classification",
      subTitle: "BOAZ",
      startedAt: "2023-01",
      endedAt: "2023-07",
      descriptions: [
        {
          content: "Team-BoonMoSa (GitHub)",
          href: "https://github.com/Team-BoonMoSa",
          image: "images/mc-0.gif",
        },
        { content: "Developed a YOLOv5 based logo segmentation model." },
        {
          content: "Constructed a model deployment server on Amazon EC2 Inf1.",
          image: "images/mc-1.png",
        },
      ],
    },
    // {
    //   title: '',
    //   subTitle: 'Konkuk University',
    //   startedAt: '2018-06',
    //   endedAt: '2023-01',
    //   descriptions: [
    //     {
    //       content:
    //         '권취 롤(copper film) 내부 응력 분포를 고려한 Web handling 불량 개선 방안 연구, SK 넥실리스',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 10 ~ 2023. 01)' },
    //         { content: '제품 운송 진동, 충격에 따른 가속도 데이터 특징 분석' },
    //       ],
    //     },
    //     {
    //       content: '미래형 센서를 위한 초정밀 대면적 생산시스템 전문 인력 양성, 한국연구재단',
    //       descriptions: [{ content: 'SiM Lab. (2021. 09 ~ 2023. 01)' }],
    //     },
    //     {
    //       content: '소형위성 분리용 어댑터 최적설계, 스페이스베이',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 09 ~ 2023. 01)' },
    //         { content: '모터 동특성 분석 모델 개발 및 최적화' },
    //       ],
    //     },
    //     {
    //       content:
    //         '이차전지전극을 위한 멀티코터가 구비된 지능형 롤투롤 코팅시스템 개발, 산업통상자원부',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 05 ~ 2023. 01)' },
    //         { content: 'Roll-to-Roll 연속 공정 내 편심 롤 진단을 위한 신호 처리 및 모델 개발' },
    //       ],
    //     },
    //     {
    //       content:
    //         '대면적 고효율 기능성 필름 대량 생산을 위한 스마트 인쇄 전자 제조 기술 개발, 한국연구재단',
    //       descriptions: [
    //         { content: 'SiM Lab. (2021. 01 ~ 2022. 12)' },
    //         {
    //           content:
    //             'Roll-to-Roll slot-die coating 공정의 코팅층 진단 모델 및 Graphic User Interface 개발',
    //         },
    //       ],
    //     },
    //     {
    //       content: '열주름 해석을 통한 보정 기술 및 정밀 장력제어 기술, LG 전자',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 03 ~ 2022. 12)' },
    //         { content: '롤 정렬도 불량에 따른 사행량 예측 모델 개발' },
    //       ],
    //     },
    //     {
    //       content:
    //         '웹 핸들링 기반 롤 배치 최적화 및 Tilting에 따른 사행/주름 분석, LG 에너지솔루션',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 05 ~ 2022. 12)' },
    //         { content: '롤 정렬도 불량에 따른 사행량 예측 모델 개발' },
    //       ],
    //     },
    //     {
    //       content:
    //         '자동차용 배터리 전극 소재 떨림 최소화를 위한 건조 시스템 해석 및 공기 부양 유닛 노즐 최적화, LG 에너지솔루션',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 04 ~ 2022. 11)' },
    //         { content: '소재 온도 분포 파악을 위한 열전도도 프로파일 개발' },
    //       ],
    //     },
    //     {
    //       content: 'R2R 인쇄 유연컴퓨터개발 연구센터, 한국연구재단',
    //       descriptions: [
    //         { content: 'SiM Lab. (2021. 06 ~ 2022. 05)' },
    //         {
    //           content:
    //             'Roll-to-Roll slot-die coating 공정의 meniscus vision data 기반 진행 방향 코팅층 두께 예측 모델 개발',
    //         },
    //         {
    //           content: 'Roll-to-Roll 공정의 장력 전달 모델 시뮬레이터 개발',
    //           href: 'https://github.com/Zerohertz/Roll-to-Roll-Simulation-GUI',
    //         },
    //         {
    //           content: 'Roll-to-Roll 공정의 수학적 사행 모델 시뮬레이터 개발',
    //           href: 'https://github.com/Zerohertz/Lateral-Dynamics-due-to-Roll-Misalignment',
    //         },
    //       ],
    //     },
    //     {
    //       content: '머신러닝 기반의 지능형 친환경 머서라이징 시스템 실증, 한국산업기술평가관리원',
    //       descriptions: [
    //         { content: 'SiM Lab. (2021. 04 ~ 2022. 05)' },
    //         { content: 'Vision data 기반 머서라이징 공정 모니터링 시스템 개발' },
    //       ],
    //     },
    //     {
    //       content: '복합형상 부품가공용 스마트 컴팩트 라인센터 개발, 한국산업기술평가관리원',
    //       descriptions: [
    //         { content: 'SiM Lab. (2021. 01 ~ 2021. 12)' },
    //         {
    //           content: 'Bearing 상태 진단 모델 및 Graphic User Interface 개발',
    //           href: 'https://github.com/Zerohertz/Bearing-condition-monitoring-GUI',
    //         },
    //       ],
    //     },
    //     {
    //       content:
    //         '실감형 실내 사이클링을 위한 2자유도 실내 사이클링 플랫폼 및 가상현실기반 고품질 사이클링 시뮬레이션기술 개발, 중소벤처기업진흥공단',
    //       descriptions: [
    //         { content: 'MRV Lab. (2019. 05 ~ 2020. 05)' },
    //         {
    //           content: 'Unreal Engine 기반 가상 현실 환경 구축',
    //         },
    //       ],
    //     },
    //     {
    //       content: '스마트 커뮤니티 폴리싱 시스템(Googi) 개발, 한국연구재단',
    //       descriptions: [
    //         { content: 'MRV Lab. (2018. 06 ~ 2019. 11)' },
    //         {
    //           content: 'Unreal Engine 기반 가상 현실 환경 구축',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default projects;
