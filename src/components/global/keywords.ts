// Values are either a https://simpleicons.org/ slug or, when simple-icons has
// no entry, the name of an SVG in public/icons/logos
const keywordMap = new Map([
  ["Triton Inference Server", "nvidia"],
  ["NCCL", "nvidia"],
  ["RDMA", "nvidia"],
  ["Transformers", "huggingface"],
  ["Gradio", "huggingface"],
  ["Argo CD", "argo"],
  ["Label Studio", "materialdesignicons"],
  ["Tibero", "oracle"],
]);

const getReplacedKeyword = (keyword: string): string => {
  return keywordMap.has(keyword)
    ? (keywordMap.get(keyword) ?? keyword.replaceAll("+", "%2B"))
    : keyword.replaceAll("+", "%2B");
};

export default getReplacedKeyword;
