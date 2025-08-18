import { Language } from "@/utils/GlobalLanguage";

import Container from "@/components/common/Container";
import Payload from "@/components/common/Payload";
import Section from "@/components/common/Section";
import ComponentWrapper from "@/components/default/ComponentWrapper";

const Component = ({ payload, language }: { payload: Payload; language: Language }) => {
  return (
    <Section payload={payload}>
      <Container payload={payload} language={language} />
    </Section>
  );
};

export default ComponentWrapper(Component);
