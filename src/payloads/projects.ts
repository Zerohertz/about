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
      keywords: ["Python", "PyTest", "Sphinx", "Kubernetes", "Jenkins", "GitHub Actions", "Codecov", "PyPI"],
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
          image: "images/dacp-0.webp",
        },
        {
          content:
            "Built a GitHub Actions-based CI/CD pipeline (migrated from Jenkins) to automate repetitive tasks such as formatting, unit testing, and deployment, streamlining the process for feature additions and bug fixes.",
          image: "images/dacp-1.webp",
        },
        {
          content:
            "To prevent unnecessary deployments from non-production changes like documentation updates, implemented a detailed branching strategy on GitHub and set up dedicated pipelines for code segregation.",
          image: "images/dacp-2.webp",
        },
        {
          content:
            "Simplified version tracking by building a pipeline using the GitHub API to automatically generate and publish release notes to GitHub Releases, improving transparency across development cycles.",
        },
        {
          content:
            "Ensured easy access to comprehensive project guidelines and function usage by creating a Sphinx-based documentation pipeline, deploying it via GitHub Pages for consistent and up-to-date project documentation.",
          image: "images/dacp-3.webp",
        },
      ],
    },
    {
      title: "Python Library for Pre/Post-Processing, Visualization, and Model Backend",
      subTitle: "AgileSoDA",
      startedAt: "2023-10",
      endedAt: "2024-09",
      keywords: ["Python", "Numpy", "OpenCV", "PyTorch", "Triton Inference Server", "PyTest", "Sphinx"],
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
          image: "images/plfp-0.webp",
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
          image: "images/abos-0.webp",
        },
        {
          content:
            "Faced with excessive GPU usage during model deployment, resolved the issue by identifying and fixing a memory leak through GPU resource monitoring and logging. (GPU memory usage reduced by 47.9%)",
          image: "images/abos-1.webp",
        },
        {
          content:
            "Reduced inference time for a text detection model, where frequent calls made optimization critical, by utilizing TensorRT-based quantization. ([inference time decreased by 87.31%](https://github.com/Zerohertz/PANPP/tree/TensorRT))",
          image: "images/abos-2.webp",
        },
        {
          content:
            "Encountered low accuracy in document rotation classification, addressed by performing batch inference on image tensors rotated in four directions and averaging the results. (improved accuracy by 2.01%p)",
          image: "images/abos-3.webp",
        },
      ],
    },
    {
      title: "Information Extraction Model Development for Trade Document Processing",
      subTitle: "AgileSoDA",
      startedAt: "2024-02",
      endedAt: "2024-05",
      keywords: ["Python", "PyTorch", "Triton Inference Server", "Label Studio", "Streamlit", "Docker", "Kubernetes"],
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
      keywords: ["Python", "PyTorch", "Triton Inference Server", "Streamlit", "Docker", "Kubernetes"],
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
      keywords: ["Python", "PyTorch", "Triton Inference Server", "FastAPI", "Gradio", "Docker", "Kubernetes"],
      descriptions: [
        {
          content: "Developed models for segmentation of burn areas and severity diagnosis in burn patients.",
        },
        {
          content: "Designed and developed an API for model deployment using Triton Inference Server.",
          image: "images/adsf-0.webp",
        },
      ],
    },
    {
      title: "On-premise Kubernetes Cluster",
      subTitle: "Personal Project",
      startedAt: "2023-08",
      endedAt: "2023-09",
      keywords: ["Kubernetes", "Traefik", "Prometheus", "Grafana", "Apache Airflow", "Argo CD", "Jenkins"],
      descriptions: [
        {
          content: "Zerohertz/k8s-on-premise (GitHub)",
          href: "https://github.com/Zerohertz/k8s-on-premise",
          image: "images/opkc-0.webp",
        },
        {
          content: "Blog posts",
          href: "https://zerohertz.github.io/tags/home-server/",
          image: "images/opkc-1.webp",
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
      keywords: ["Python", "PyTorch", "Triton Inference Server", "FastAPI", "Amazon EC2", "Docker"],
      descriptions: [
        {
          content: "Team-BoonMoSa (GitHub)",
          href: "https://github.com/Team-BoonMoSa",
          image: "images/mc-0.webp",
        },
        { content: "Developed a YOLOv5 based logo segmentation model." },
        {
          content: "Constructed a model deployment server on Amazon EC2 Inf1.",
          image: "images/mc-1.webp",
        },
      ],
    },
  ],
};

export default projects;
