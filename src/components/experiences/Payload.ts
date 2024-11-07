import CommonPayload from "@/components/common/Payload";
import Item from "@/components/experiences/Item";

interface Payload extends CommonPayload {
  list: Item[];
  disableTotalPeriod?: boolean;
}

export default Payload;
