import Payload from "@/components/skills/Payload";
import Skill from "@/components/skills/Skill";

const programming: Skill = {
  category: "Programming",
  items: [
    {
      title: "Python",
    },
    {
      title: "C, C++",
    },
    {
      title: "JavaScript, TypeScript",
    },
    {
      title: "Java",
    },
    {
      title: "Go",
    },
  ],
};

const mlops: Skill = {
  category: "MLOps",
  items: [
    {
      title: "Triton Inference Server",
    },
    {
      title: "vLLM",
    },
    {
      title: "TensorRT",
    },
    {
      title: "ONNX",
    },
    {
      title: "Amazon EC2 Inf1",
    },
    {
      title: "DVC",
    },
    {
      title: "Kubeflow",
    },
    {
      title: "MLflow",
    },
  ],
};

const infra: Skill = {
  category: "Infra",
  items: [
    {
      title: "Docker",
    },
    {
      title: "Kubernetes",
    },
    {
      title: "Grafana",
    },
    {
      title: "Prometheus",
    },
    {
      title: "GitHub Actions",
    },
    {
      title: "MinIO",
    },
    {
      title: "Argo CD",
    },
    {
      title: "Traefik",
    },
  ],
};

const dataEngineering: Skill = {
  category: "Data Engineering",
  items: [
    {
      title: "Apache Airflow",
    },
    {
      title: "Apache Kafka",
    },
  ],
};

const database: Skill = {
  category: "Database",
  items: [
    {
      title: "SQL",
    },
    {
      title: "Redis",
    },
    {
      title: "MongoDB",
    },
  ],
};

const etc: Skill = {
  category: "Etc",
  items: [
    { title: "Ansys" },
    { title: "Arduino" },
    { title: "Catia" },
    { title: "LabVIEW" },
    { title: "MATLAB" },
    { title: "R" },
    { title: "Raspberry Pi" },
    { title: "Unreal Engine" },
  ],
};

const skills: Payload = {
  title: "SKILLS",
  disabled: false,
  skills: [programming, mlops, infra, dataEngineering, database, etc], // ingress
  // tooltip: {
  //   en: "1: Beginner\n2: Intermediate\n3: Professional",
  //   ko: "1: 초급\n2: 중급\n3: 고급",
  // },
};

export default skills;
