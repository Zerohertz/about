import CommonPayload from "@/components/common/Payload";
import Item from "@/components/opensources/Item";

export interface Payload extends CommonPayload {
  list: Item[];
}

export default Payload;
