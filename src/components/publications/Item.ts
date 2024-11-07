import Description from "@/components/common/DescriptionType";

export interface Item {
  title: string;
  subTitle: string;
  at: string;
  descriptions: Description[];
}

export default Item;
