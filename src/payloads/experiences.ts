import Payload from "@/components/experiences/Payload";

const experiences: Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: "Tmax WAPL",
      link: "https://tmaxcore.ai/",
      position: "Backend Engineer",
      startedAt: "2024-09",
      descriptions: [
        "Developed backend infrastructure for WAPL, a collaboration platform, using microservices architecture (MSA) within an 11-member team.",
        "Developed scheduling functionality utilizing a Netty-based in-house Java backend framework, supporting the efficient creation, deletion, and retrieval of schedules.",
      ],
      skillKeywords: ["Java", "Tibero", "Docker", "Kubernetes"],
    },
    {
      title: "AgileSoDA",
      link: "http://www.agilesoda.com/",
      position: "Machine Learning Research Engineer",
      startedAt: "2023-02",
      endedAt: "2024-09",
      descriptions: [
        "Managed the entire lifecycle of machine learning services (annotation, modeling, training, deployment) and oversaw Kubernetes-based IDC infrastructure within an 11-member team.",
        "Researched and developed models for text, signature, and checkbox detection, as well as information extraction, for the AI optical character recognition (OCR) product TwinReader.",
        "Developed a Python backend for model serving and optimized pipelines to enhance efficiency.",
        "Streamlined the development process by creating a solution that resolved versioning challenges and reduced build times through the separation of backend dependencies.",
        "Executed AI projects and proof of concept (PoC) to meet client specifications.",
      ],
      skillKeywords: ["Python", "Docker", "Kubernetes", "Research", "Machine Learning"],
    },
    {
      title: "SiM Lab. (Smart intelligent Manufacturing system Laboratory)",
      link: "https://sites.google.com/view/simlabkonkuk",
      position: "Research Student",
      startedAt: "2021-03",
      endedAt: "2023-02",
      descriptions: [
        "Researched and developed diagnostic models utilizing time-series and vision data for real-time monitoring of process conditions in industrial-scale manufacturing systems.",
        "Published two SCI(E) Q1-ranked research papers on feature selection algorithms, advancing efficient machine learning methodologies in industrial applications.",
        "Executed 10+ government and industry-funded projects, further enhancing research capabilities in machine learning.",
        // 'Developed a graphical user interface (GUI) for real-time monitoring.',
        // 'Performed computational fluid dynamics (CFD) simulations based on tension and temperature in roll-to-roll continuous processes.',
      ],
      skillKeywords: ["Python", "C++", "MATLAB", "LabVIEW", "Ansys", "Machine Learning"],
    },
    {
      title: "SiM Lab. (Smart intelligent Manufacturing system Laboratory)",
      link: "https://sites.google.com/view/simlabkonkuk",
      position: "Research Intern",
      startedAt: "2019-11",
      endedAt: "2021-02",
      descriptions: ["Developed bearing condition diagnostic model and graphic user interface."],
      skillKeywords: ["MATLAB", "Research", "Machine Learning"],
    },
    {
      title: "MRV Lab. (Medical Robotics and Virtual Reality Laboratory)",
      link: "https://rvlab.konkuk.ac.kr/",
      position: "Research Intern",
      startedAt: "2018-06",
      endedAt: "2019-11",
      descriptions: ["Developed virtual reality environments based on C++ and Unreal Engine."],
      skillKeywords: ["Unreal Engine", "C++"],
    },
  ],
};

export default experiences;
