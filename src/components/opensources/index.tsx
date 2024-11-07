import { PropsWithChildren } from "react";

import ComponentWrapper from "@/components/common/ComponentWrapper";
import Section from "@/components/common/Section";
import Payload from "@/components/opensources/Payload";
import Row from "@/components/opensources/Row";

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <Section title="OPEN SOURCES">
      <Row payload={payload} />
    </Section>
  );
}

export default ComponentWrapper(Component);
