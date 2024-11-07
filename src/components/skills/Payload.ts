import DefaultPayload from "@/components/default/Payload";
import Skill from "@/components/skills/Skill";

interface Payload extends DefaultPayload {
  skills: Skill[];
  tooltip: string;
}

export default Payload;
