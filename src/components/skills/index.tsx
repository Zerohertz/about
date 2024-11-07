import { PropsWithChildren } from "react";
import { Col, Row } from "reactstrap";

import ComponentWrapper from "@/components/common/ComponentWrapper";
import Payload from "@/components/skills/Payload";
import SkillRow from "@/components/skills/Row";
import ToolTip from "@/components/skills/ToolTip";

const Component = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  return (
    <div className="mt-5">
      <Row className="pb-3">
        <Col>
          <h2 className="skill-heading">
            <span className="primary">SKILLS</span>
            <ToolTip content={payload.tooltip} />
          </h2>
        </Col>
      </Row>
      {payload.skills.map((skill, index) => (
        <SkillRow key={index.toString()} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default ComponentWrapper(Component);
