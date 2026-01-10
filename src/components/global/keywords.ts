// https://simpleicons.org/
const keywordMap = new Map([
  ["Java", "coffeescript"],
  ["MATLAB", "codeclimate"],
  ["Tibero", "solid"],
  ["Research", "internetarchive"],
  ["Machine Learning", "openai"],
  ["Triton Inference Server", "nvidia"],
  ["NCCL", "nvidia"],
  ["RDMA", "nvidia"],
  ["Label Studio", "materialdesignicons"],
  ["Transformers", "huggingface"],
  ["Gradio", "huggingface"],
  ["Traefik", "traefikproxy"],
  ["Argo CD", "argo"],
  ["Amazon EC2", "amazonec2"],
  ["vLLM", "vonage"],
  ["SGLang", "codecrafters"],
  ["DeepSpeed", "rocket"],
]);

const getReplacedKeyword = (keyword: string): string => {
  return keywordMap.has(keyword)
    ? (keywordMap.get(keyword) ?? keyword.replaceAll("+", "%2B"))
    : keyword.replaceAll("+", "%2B");
};

export default getReplacedKeyword;
