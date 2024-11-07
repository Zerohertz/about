import Description from "@/components/default/DescriptionType";

type ItemBase = {
  title: string;
  href?: string;
  subTitle: string;
  keywords?: string[];
  descriptions?: Description[];
};

type ItemDefault = ItemBase & {
  startedAt?: never;
  endedAt?: never;
  onGoing?: never;
};

type ItemDone = ItemBase & {
  startedAt: string;
  endedAt: string;
  onGoing?: never;
};

type ItemOnGoing = ItemBase & {
  startedAt: string;
  endedAt?: never;
  onGoing: boolean;
};

type Item = ItemDefault | ItemDone | ItemOnGoing;

export default Item;
