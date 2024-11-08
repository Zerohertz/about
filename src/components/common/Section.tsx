import { PropsWithChildren } from "react";
import { Badge, Col, Row } from "reactstrap";

import { DateTime, Duration } from "luxon";

import Payload from "@/components/common/Payload";
import { stringToDateTime } from "@/utils/DateTime";

const Section = ({ payload, children }: PropsWithChildren<{ payload: Payload }>) => {
  return (
    <div className="mt-md-5 mt-3 mb-md-5 mb-3">
      <Row className="pb-3">
        <Col>
          <div className="d-flex align-items-center">
            <h2 className="primary">{payload.title || "UNKNOWN"}</h2>
            <TotalPeriod payload={payload} />
          </div>
        </Col>
      </Row>
      {children}
    </div>
  );
};

type TimeCount = { startedAt: DateTime; endedAt: DateTime };

const TotalPeriod = ({ payload }: { payload: Payload }) => {
  if (!payload.totalPeriod) {
    return null;
  }
  const totalDuration = () => {
    const durations = payload.list
      .map((item) => {
        if (!item.title) {
          return null;
        }
        if (item.title.includes("Lab")) {
          return null;
        }
        if (!item.startedAt) {
          return null;
        }
        return {
          startedAt: stringToDateTime(item.startedAt),
          endedAt: item.endedAt ? stringToDateTime(item.endedAt) : DateTime.local(),
        };
      })
      .filter((item): item is TimeCount => item !== null)
      .map(({ startedAt, endedAt }) => {
        return endedAt.plus({ month: 1 }).diff(startedAt);
      });
    const totalExperience = durations.reduce((prev, cur) => prev.plus(cur), Duration.fromMillis(0));
    const totalMonths = Math.floor(totalExperience.as("months"));
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    if (years === 0) {
      return `Total ${months} month${months > 1 ? "s" : ""}`;
    }
    return `Total ${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
  };
  return (
    <>
      <div className="d-none d-md-block">
        <Badge className="ms-2" color="primary">
          {totalDuration()}
        </Badge>
      </div>
      <div className="d-md-none ms-auto">
        <Badge className="ms-2" color="primary">
          {totalDuration()}
        </Badge>
      </div>
    </>
  );
};

export default Section;
