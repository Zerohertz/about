import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import Item from "@/components/profile/Item";

interface Payload {
  image: string;
  name: {
    title: string;
    small?: string;
  };
  contact: Item[];
  notice?: {
    title: string;
    icon?: IconDefinition;
  };
}

export default Payload;
