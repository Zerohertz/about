import { Col, Row } from "reactstrap";

import ComponentWrapper from "@/components/default/ComponentWrapper";
import { Language } from "@/components/default/Language";
import { useAnimation } from "@/components/global/AnimationContext";
import Container from "@/components/skills/Container";
import Payload from "@/components/skills/Payload";
import ToolTip from "@/components/skills/ToolTip";

const Component = ({ payload, language }: { payload: Payload; language: Language }) => {
  const { getAnimationClass } = useAnimation();

  return (
    <div className="mt-md-5 mt-5 mb-md-5 mb-5">
      <Row className="pb-3">
        <Col>
          <div className={getAnimationClass(0)}>
            <h2 className="skill-heading" id="skills">
              <span>
                <a className="primary" href="#skills">
                  {payload.title}
                </a>
              </span>
              <ToolTip content={payload.tooltip} language={language} />
            </h2>
          </div>
        </Col>
      </Row>
      <div className={getAnimationClass(1)}>
        {payload.skills.map((skill, index) => (
          <Container key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ComponentWrapper(Component);
