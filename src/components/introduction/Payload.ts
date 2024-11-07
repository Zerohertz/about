import DefaultPayload from "@/components/default/Payload";

interface Payload extends DefaultPayload {
  contents: string[];
  signature: string;
  latestUpdated: string;
}

export default Payload;
