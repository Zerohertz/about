import CommonPayload from "@/components/common/Payload";
import Item from "@/components/projects/Item";

interface Payload extends CommonPayload {
  list: Item[];
}

export default Payload;
