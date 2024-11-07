import CommonPayload from "@/components/common/Payload";
import Skill from "@/components/skills/Skill";

interface Payload extends CommonPayload {
  skills: Skill[];
  tooltip?: string;
}

export default Payload;
