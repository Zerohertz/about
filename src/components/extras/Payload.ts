import CommonPayload from "@/components/common/Payload";
import Item from "@/components/extras/Item";

interface Payload extends CommonPayload {
  list: Item[];
}

export default Payload;
