import { MultiLanguageText } from "@/components/default/Language";

interface Description {
  content: MultiLanguageText;
  className?: string;
  href?: string;
  image?: string;
  descriptions?: Description[];
}

export default Description;
