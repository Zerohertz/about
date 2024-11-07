import Item from "@/components/common/Item";
import DefaultPayload from "@/components/default/Payload";

interface Payload extends DefaultPayload {
  list: Item[];
  totalPeriod?: boolean;
  currentAndPeriod?: boolean;
}

export default Payload;
