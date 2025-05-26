import Payload from "@/components/common/Payload";

const experiences: Payload = {
  title: "EXPERIENCES",
  disable: false,
  totalPeriod: true,
  currentAndPeriod: true,
  list: [
    {
      title: "GenON",
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
          content:
            "Designed and implemented a GPU resource scheduler, a Kubernetes resource controller, and comprehensive LLM lifecycle management modules for the GenOS LLMOps product, enhancing resource efficiency and system reliability.",
        },
        {
          content:
            "Developed distributed training and serving pipelines for large language models (LLMs) and multimodal large language models (MLLMs) on a Kubernetes platform, which improved scalability and boosted performance.",
        },
        {
          content:
            "Collaborated closely with the R&D team to productize cutting-edge model training code, streamlining integration and accelerating time-to-market for advanced machine learning solutions.",
        },
      ],
    },
    {
      title: "Tmax WAPL",
      href: "https://tmaxcore.ai/",
      subTitle: "Backend Engineer",
      startedAt: "2024-09-09",
      endedAt: "2024-11-29",
      keywords: ["Java", "Tibero", "Docker", "Kubernetes", "Grafana"],
      descriptions: [
        {
          content:
            "Developed backend infrastructure for WAPL, a collaboration platform, using microservices architecture (MSA) within an 11-member team.",
        },
        {
          content:
            "Developed scheduling functionality utilizing a Netty-based in-house Java backend framework, supporting the efficient creation, deletion, and retrieval of schedules.",
        },
      ],
    },
    {
      title: "AgileSoDA",
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
          content:
            "Managed the entire lifecycle of machine learning services (annotation, modeling, training, deployment) and oversaw Kubernetes-based IDC infrastructure within an 11-member team.",
        },
        {
          content:
            "Researched and developed models for text, signature, and checkbox detection, as well as information extraction, for the AI optical character recognition (OCR) product TwinReader.",
        },
        { content: "Developed a Python backend for model serving and optimized pipelines to enhance efficiency." },
        {
          content:
            "Streamlined the development process by creating a solution that resolved versioning challenges and reduced build times through the separation of backend dependencies.",
        },
        { content: "Executed AI projects and proof of concept (PoC) to meet client specifications." },
      ],
    },
    {
      title: "SiM Lab. (Smart intelligent Manufacturing system Laboratory)",
      href: "https://sites.google.com/view/simlabkonkuk",
      subTitle: "Research Student",
      startedAt: "2021-03",
      endedAt: "2023-02",
      keywords: ["MATLAB", "Python", "PyTorch", "C++", "LabVIEW", "Ansys"],
      descriptions: [
        {
          content:
            "Researched and developed diagnostic models utilizing time-series and vision data for real-time monitoring of process conditions in industrial-scale manufacturing systems.",
        },
        {
          content:
            "Published two SCI(E) Q1-ranked research papers on feature selection algorithms, advancing efficient machine learning methodologies in industrial applications.",
        },
        {
          content:
            "Executed 10+ government and industry-funded projects, further enhancing research capabilities in machine learning.",
        },
        // { content: "Developed a graphical user interface (GUI) for real-time monitoring." },
        // {
        //   content:
        //     "Performed computational fluid dynamics (CFD) simulations based on tension and temperature in roll-to-roll continuous processes.",
        // },
      ],
    },
    {
      title: "SiM Lab. (Smart intelligent Manufacturing system Laboratory)",
      href: "https://sites.google.com/view/simlabkonkuk",
      subTitle: "Research Intern",
      startedAt: "2019-11",
      endedAt: "2021-02",
      keywords: ["MATLAB", "Python", "PyTorch", "LabVIEW", "Ansys"],
      descriptions: [{ content: "Developed bearing condition diagnostic model and graphic user interface." }],
    },
    {
      title: "MRV Lab. (Medical Robotics and Virtual Reality Laboratory)",
      href: "https://rvlab.konkuk.ac.kr/",
      subTitle: "Research Intern",
      startedAt: "2018-06",
      endedAt: "2019-11",
      keywords: ["Unreal Engine", "C++", "Python"],
      descriptions: [{ content: "Developed virtual reality environments based on C++ and Unreal Engine." }],
    },
  ],
};

export default experiences;
