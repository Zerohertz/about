import { PropsWithChildren } from "react";

import ComponentWrapper from "@/components/common/ComponentWrapper";
import CommonSection from "@/components/common/Section";
import Payload from "@/components/projects/Payload";
import Row from "@/components/projects/Row";

const Component = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  return (
    <CommonSection title="PROJECTS">
      <Row payload={payload} />
    </CommonSection>
  );
};

export default ComponentWrapper(Component);
