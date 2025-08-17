import { Col, Row } from "reactstrap";

import ComponentWrapper from "@/components/default/ComponentWrapper";
import Container from "@/components/skills/Container";
import Payload from "@/components/skills/Payload";
import ToolTip from "@/components/skills/ToolTip";

import { useStaggeredAnimation } from "@/hooks/useAnimation";

const Component = ({ payload }: { payload: Payload }) => {
  const { animationClass: titleAnimationClass } = useStaggeredAnimation(0);
  const { animationClass: contentAnimationClass } = useStaggeredAnimation(1);

  return (
    <div className="mt-md-5 mt-5 mb-md-5 mb-5">
      <Row className="pb-3">
        <Col>
          <div className={titleAnimationClass || ""}>
            <h2 className="skill-heading" id="skills">
              <span>
                <a className="primary" href="#skills">
                  {payload.title}
                </a>
              </span>
              <ToolTip content={payload.tooltip} />
            </h2>
          </div>
        </Col>
      </Row>
      <div className={contentAnimationClass || ""}>
        {payload.skills.map((skill, index) => (
          <Container key={index.toString()} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ComponentWrapper(Component);
