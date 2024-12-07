import { PropsWithChildren } from "react";
import { Badge, Col, Row } from "reactstrap";

import { getTotalPeriod } from "@/utils/DateTime";

import Payload from "@/components/common/Payload";

const Section = ({ payload, children }: PropsWithChildren<{ payload: Payload }>) => {
  const id = payload.title.replace(" & ", "-").replace(" ", "-").toLowerCase();
  const totalPeriod = getTotalPeriod(payload);
  return (
    <div className="mt-md-5 mt-5 mb-md-5 mb-5">
      <Row className="pb-3">
        <Col>
          <div className="d-flex align-items-center">
            <h2 id={id}>
              <a className="primary" href={`#${id}`}>
                {payload.title || "UNKNOWN"}
              </a>
            </h2>
            <TotalPeriod totalPeriod={totalPeriod} />
          </div>
        </Col>
      </Row>
      {children}
    </div>
  );
};

const TotalPeriod = ({ totalPeriod }: { totalPeriod: string | null }) => {
  if (!totalPeriod) {
    return null;
  }
  return (
    <>
      <div className="d-none d-md-block">
        <Badge className="ms-2" color="primary">
          {totalPeriod}
        </Badge>
      </div>
      <div className="d-md-none ms-auto">
        <Badge className="ms-2" color="primary">
          {totalPeriod}
        </Badge>
      </div>
    </>
  );
};

export default Section;
