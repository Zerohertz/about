import { PropsWithChildren } from "react";

import ComponentWrapper from "@/components/common/ComponentWrapper";
import Section from "@/components/common/Section";
import Payload from "@/components/extras/Payload";
import Row from "@/components/extras/Row";

const Component = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  return (
    <Section title="EXTRAS">
      <Row payload={payload} />
    </Section>
  );
};

export default ComponentWrapper(Component);
