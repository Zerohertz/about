import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Item {
  icon: IconDefinition;
  title?: string;
  link?: string;
  badge?: true;
}

export default Item;
