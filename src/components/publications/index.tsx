import { PropsWithChildren } from "react";

import ComponentWrapper from "@/components/common/ComponentWrapper";
import Section from "@/components/common/Section";
import Payload from "@/components/publications/Payload";
import Row from "@/components/publications/Row";

const Component = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  return (
    <Section title="PUBLICATIONS & PATENTS">
      <Row payload={payload} />
    </Section>
  );
};

export default ComponentWrapper(Component);
