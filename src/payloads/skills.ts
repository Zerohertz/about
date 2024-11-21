import Payload from "@/components/skills/Payload";
import Skill from "@/components/skills/Skill";

const programming: Skill = {
  category: "Programming",
  items: [
    {
      title: "Python",
      level: 3,
    },
    {
      title: "Java",
      level: 2,
    },
    {
      title: "C, C++",
      level: 2,
    },
    {
      title: "TypeScript",
      level: 2,
    },
    {
      title: "Go",
      level: 1,
    },
  ],
};

const mlops: Skill = {
  category: "MLOps",
  items: [
    {
      title: "Triton Inference Server",
      level: 3,
    },
    {
      title: "TensorRT",
      level: 2,
    },
    {
      title: "ONNX",
      level: 2,
    },
    {
      title: "Amazon EC2 Inf1",
      level: 2,
    },
    {
      title: "DVC",
      level: 2,
    },
    {
      title: "Kubeflow",
      level: 1,
    },
    {
      title: "MLflow",
      level: 1,
    },
  ],
};

const infra: Skill = {
  category: "Infra",
  items: [
    {
      title: "Docker",
      level: 3,
    },
    {
      title: "Kubernetes",
      level: 3,
    },
    {
      title: "GitHub Actions",
      level: 2,
    },
    {
      title: "MinIO",
      level: 2,
    },
    {
      title: "Argo CD",
      level: 1,
    },
    {
      title: "Grafana",
      level: 1,
    },
    {
      title: "Prometheus",
      level: 1,
    },
    {
      title: "Traefik",
      level: 1,
    },
  ],
};

const dataEngineering: Skill = {
  category: "Data Engineering",
  items: [
    {
      title: "Apache Airflow",
      level: 2,
    },
    {
      title: "Apache Kafka",
      level: 1,
    },
  ],
};

const database: Skill = {
  category: "Database",
  items: [
    {
      title: "PostgreSQL",
      level: 2,
    },
    {
      title: "MySQL",
      level: 1,
    },
    {
      title: "Redis",
      level: 1,
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
  disable: false,
  skills: [programming, mlops, infra, dataEngineering, database, etc], // ingress
  tooltip: "1: Beginner\n2: Intermediate\n3: Professional",
};

export default skills;
