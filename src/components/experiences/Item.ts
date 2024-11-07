interface Item {
  title: string;
  link?: string;
  position: string;
  startedAt: string;
  endedAt?: string;
  descriptions: string[];
  skillKeywords?: string[];
}

export default Item;
