import Description from "@/components/common/DescriptionType";

interface Item {
  title: string;
  subTitle: string;
  descriptions?: Description[];
  startedAt: string;
  endedAt?: string;
}

export default Item;
