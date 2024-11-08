import { NextSeoProps } from "next-seo";

interface Payload {
  headTitle: string;
  favicon: string;
  seo: NextSeoProps;
  analytics?: {
    google?: string;
    naver?: string;
  };
}

export default Payload;
