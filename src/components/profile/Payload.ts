import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import CommonPayload from "@/components/common/Payload";
import Item from "@/components/profile/Item";

interface Payload extends CommonPayload {
  image: string;
  name: {
    title: string;
    small?: string;
  };
  contact: Item[];
  notice: {
    title: string;
    icon?: IconDefinition;
  };
}

export default Payload;
