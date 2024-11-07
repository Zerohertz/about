import Description from "@/components/common/DescriptionType";

interface Item {
  title: string;
  where: string;
  startedAt: string;
  endedAt?: string;
  descriptions: Description[];
}

export default Item;
