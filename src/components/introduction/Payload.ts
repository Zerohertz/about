import { MultiLanguageText } from "@/utils/MultiLanguage";

import DefaultPayload from "@/components/default/Payload";

interface Payload extends DefaultPayload {
  contents: MultiLanguageText[];
  latestUpdated: string;
  // signature: string;
}

export default Payload;
