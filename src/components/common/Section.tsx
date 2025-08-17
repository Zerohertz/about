import { PropsWithChildren, useMemo } from "react";
import { Badge, Col, Row } from "reactstrap";

import { getTotalPeriod } from "@/utils/DateTime";

import Payload from "@/components/common/Payload";

import { useStaggeredAnimation } from "@/hooks/useAnimation";

const Section = ({ payload, children }: PropsWithChildren<{ payload: Payload }>) => {
  const id = useMemo(() => payload.title.replace(" & ", "-").replace(" ", "-").toLowerCase(), [payload.title]);
  const totalPeriod = useMemo(() => getTotalPeriod(payload), [payload]);
  const { animationClass: titleAnimationClass } = useStaggeredAnimation(0);
  const { animationClass: contentAnimationClass } = useStaggeredAnimation(1);

  return (
    <div className="mt-md-5 mt-5 mb-md-5 mb-5">
      <Row className="pb-3">
        <Col>
          <div className={titleAnimationClass || ""}>
            <div className="d-flex align-items-center">
              <h2 id={id}>
                <a className="primary" href={`#${id}`}>
                  {payload.title || "UNKNOWN"}
                </a>
              </h2>
              <TotalPeriod totalPeriod={totalPeriod} />
            </div>
          </div>
        </Col>
      </Row>
      <div className={contentAnimationClass || ""}>{children}</div>
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
