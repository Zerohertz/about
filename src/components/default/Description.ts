import { MultiLanguageText } from "@/utils/MultiLanguage";

interface Description {
  content: MultiLanguageText;
  className?: string;
  href?: string;
  image?: string;
  descriptions?: Description[];
}

export default Description;
