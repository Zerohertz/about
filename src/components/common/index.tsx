import Container from "@/components/common/Container";
import Payload from "@/components/common/Payload";
import Section from "@/components/common/Section";
import ComponentWrapper from "@/components/default/ComponentWrapper";
import { Language } from "@/components/default/Language";

const Component = ({ payload, language }: { payload: Payload; language: Language }) => {
  return (
    <Section payload={payload}>
      <Container payload={payload} language={language} />
    </Section>
  );
};

export default ComponentWrapper(Component);
