import { MultiLanguageText } from "@/utils/MultiLanguage";

import DefaultPayload from "@/components/default/Payload";

interface Payload extends DefaultPayload {
  contents: MultiLanguageText[];
  latestUpdated: string;
}

export default Payload;
