import CommonPayload from "@/components/common/Payload";

interface Payload extends CommonPayload {
  contents: string[];
  signature: string;
  latestUpdated: string;
}

export default Payload;
