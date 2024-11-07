import { PropsWithChildren } from "react";

import ComponentWrapper from "@/components/common/ComponentWrapper";
import Section from "@/components/common/Section";
import Payload from "@/components/educations/Payload";
import Row from "@/components/educations/Row";

const Component = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  return (
    <Section title="EDUCATIONS">
      <Row payload={payload} />
    </Section>
  );
};

export default ComponentWrapper(Component);
