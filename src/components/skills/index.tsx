import { Col, Row } from "reactstrap";

import ComponentWrapper from "@/components/default/ComponentWrapper";
import Container from "@/components/skills/Container";
import Payload from "@/components/skills/Payload";
import ToolTip from "@/components/skills/ToolTip";

const Component = ({ payload }: { payload: Payload }) => {
  return (
    <div className="mt-md-5 mt-5 mb-md-5 mb-5">
      <Row className="pb-3">
        <Col>
          <h2 className="skill-heading">
            <span className="primary">{payload.title}</span>
            <ToolTip content={payload.tooltip} />
          </h2>
        </Col>
      </Row>
      {payload.skills.map((skill, index) => (
        <Container key={index.toString()} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default ComponentWrapper(Component);
