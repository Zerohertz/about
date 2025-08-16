import { MultiLanguageText } from "@/utils/MultiLanguage";

interface Description {
  content: string | MultiLanguageText;
  className?: string;
  href?: string;
  image?: string;
  descriptions?: Description[];
}

export default Description;
