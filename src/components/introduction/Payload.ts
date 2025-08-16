import { MultiLanguageArray } from "@/utils/MultiLanguage";

import DefaultPayload from "@/components/default/Payload";

interface Payload extends DefaultPayload {
  contents: string[] | MultiLanguageArray;
  latestUpdated: string;
  // signature: string;
}

export default Payload;
