import { PropsWithChildren } from "react";
import { Badge, Col, Row } from "reactstrap";

import { DateTime, Duration } from "luxon";

import ComponentWrapper from "@/components/common/ComponentWrapper";
import Util from "@/components/common/Util";
import Payload from "@/components/experiences/Payload";
import ExperienceRow from "@/components/experiences/Row";

type TimeCount = { endedAt: DateTime; startedAt: DateTime };

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const totalPeriod = () => {
    if (payload.disableTotalPeriod) {
      return "";
    }
    return (
      <span style={{ fontSize: "50%" }}>
        <Badge color="primary">{getFormattingExperienceTotalDuration(payload)}</Badge>
      </span>
    );
  };

  return (
    <div className="mt-5">
      <Row className="pb-3">
        <Col>
          <h2 className="primary">EXPERIENCES {totalPeriod()}</h2>
        </Col>
      </Row>
      {payload.list.map((item, index) => (
        <ExperienceRow key={index.toString()} item={item} index={index} />
      ))}
    </div>
  );
}

function getFormattingExperienceTotalDuration(payload: Payload) {
  const durations = (
    payload.list
      .map((item) => {
        if (item.title.includes("Lab")) {
          return null;
        }
        return {
          endedAt: item.endedAt ? DateTime.fromFormat(item.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL) : DateTime.local(),
          startedAt: DateTime.fromFormat(item.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
        };
      })
      .filter((item) => item) as TimeCount[]
  ).map(({ endedAt, startedAt }) => {
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
}

export default ComponentWrapper(Component);
