import { PropsWithChildren } from "react";
import { Badge, Col, Row } from "reactstrap";

import { DateTime } from "luxon";

import Href from "@/components/common/Href";
import Util from "@/components/common/Util";
import Item from "@/components/experiences/Item";

function _Row({ item, index }: PropsWithChildren<{ item: Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ""}
      <Row>
        <Col sm={12} md={3} className="text-md-end">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9}>
          <h4 className="company-name">
            {item.link ? <Href className="name" url={item.link} text={item.title} /> : item.title}
          </h4>
          <i className="gray">{item.position}</i>
          {createSkillKeywords(item.skillKeywords)}
          <ul className="pt-2">
            {item.descriptions.map((description, descIndex) => (
              <li key={descIndex.toString()}>{description}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return "";
  }
  return (
    <div>
      {skillKeywords.map((keyword, index) => (
        <Badge className="me-1" key={index.toString()} color="secondary">
          {keyword}
        </Badge>
      ))}
    </div>
  );
}

function createWorkingPeriod(startedAtString: string, endedAtString?: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL);

  const { periodTitle, endedAt, isWorking } = (() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~`,
        isWorking: true,
        endedAt: undefined,
      };
    }

    const _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL);
    return {
      periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ ${_endedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)}`,
      endedAt: _endedAt,
      isWorking: false,
    };
  })();

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 className="gray">{periodTitle}</h4>
      </Col>
      <Col md={12} xs={isWorking ? 5 : 3} className="text-md-end text-center">
        {isWorking ? (
          <Badge className="me-1" color="primary">
            Current
          </Badge>
        ) : (
          ""
        )}
        <Badge color="info">{Util.getFormattingDuration(startedAt, endedAt)}</Badge>
      </Col>
    </Row>
  );
}

export default _Row;
