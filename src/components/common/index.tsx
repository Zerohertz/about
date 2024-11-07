import Container from "@/components/common/Container";
import Payload from "@/components/common/Payload";
import Section from "@/components/common/Section";
import ComponentWrapper from "@/components/default/ComponentWrapper";

const Component = ({ payload }: { payload: Payload }) => {
  return (
    <Section payload={payload}>
      <Container payload={payload} />
    </Section>
  );
};

export default ComponentWrapper(Component);
