import { MultiLanguageText } from "@/components/default/Language";
import DefaultPayload from "@/components/default/Payload";
import Skill from "@/components/skills/Skill";

interface Payload extends DefaultPayload {
  skills: Skill[];
  tooltip?: MultiLanguageText;
}

export default Payload;
