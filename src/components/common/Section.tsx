import { PropsWithChildren } from "react";
import { Col, Row } from "reactstrap";

const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="mt-5">
      <Row className="pb-3">
        <Col>
          <h2 className="primary">
            <span>{title}</span>
          </h2>
        </Col>
      </Row>
      {children}
    </div>
  );
};

export default Section;
