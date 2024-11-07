import CommonPayload from "@/components/common/Payload";
import Item from "@/components/educations/Item";

interface Payload extends CommonPayload {
  list: Item[];
}

export default Payload;
