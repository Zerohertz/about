import DescriptionType from "@/components/common/DescriptionType";

interface Row {
  left: Left;
  right: Right;
}

interface Left {
  title: string;
  subTitle?: JSX.Element;
}

interface Right {
  title?: string;
  subTitle?: string;
  descriptions?: DescriptionType[];
}

export default Row;
