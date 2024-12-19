// https://simpleicons.org/
const keywordMap = new Map([
  ["Java", "coffeescript"],
  ["MATLAB", "mcdonalds"],
  ["Tibero", "oracle"],
  ["Research", "internetarchive"],
  ["Machine Learning", "openai"],
  ["Triton Inference Server", "nvidia"],
  ["Label Studio", "materialdesignicons"],
  ["Gradio", "huggingface"],
  ["Traefik", "traefikproxy"],
  ["Argo CD", "argo"],
  ["Amazon EC2", "amazonec2"],
  ["vLLM", "vonage"],
]);

const getReplacedKeyword = (keyword: string): string => {
  return keywordMap.has(keyword)
    ? (keywordMap.get(keyword) ?? keyword.replaceAll("+", "%2B"))
    : keyword.replaceAll("+", "%2B");
};

export default getReplacedKeyword;
