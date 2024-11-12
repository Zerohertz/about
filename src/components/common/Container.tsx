import { Badge, Col, Row } from "reactstrap";

import { dateTimeToString, getDuration, stringToDateTime } from "@/utils/DateTime";

import Item from "@/components/common/Item";
import Payload from "@/components/common/Payload";
import Descriptions from "@/components/default/Descriptions";
import Href from "@/components/default/Href";
import _Image from "@/components/default/Image";

const Container = ({ payload }: { payload: Payload }) => {
  return (
    <>
      {payload.list.map((item, index) => {
        return <Grid key={index.toString()} item={item} index={index} period={payload.currentAndPeriod} />;
      })}
    </>
  );
};

const Grid = ({ item, index, period }: { item: Item; index: number; period?: boolean }) => {
  return (
    <>
      {index > 0 ? <hr /> : ""}
      <Row>
        <Col sm={12} md={3} className="text-md-end">
          <Left item={item} period={period} />
        </Col>
        <Col sm={12} md={9}>
          <Title item={item} />
          {item.subTitle ? <i className="gray">{item.subTitle}</i> : null}
          {item.keywords ? <Keywords keywords={item.keywords} /> : null}
          {item.descriptions ? <Descriptions descriptions={item.descriptions} /> : null}
        </Col>
      </Row>
    </>
  );
};

const Left = ({ item, period }: { item: Item; period?: boolean }) => {
  if (!item.startedAt) {
    if (!item.title) {
      return null;
    }
    if (item.href) {
      if (item.title.includes("/") && item.href.includes("github.com")) {
        return (
          <Row>
            <Col md={12} xs={9}>
              <h4 className="fs-5">
                <Href className="gray" href={item.href}>
                  {item.title}
                </Href>
              </h4>
            </Col>
            <Col md={12} xs={3} className="text-md-end text-center">
              <_Image src={`https://img.shields.io/github/stars/${item.title}.svg?style=flat-square`} />
            </Col>
          </Row>
        );
      }
      return (
        <h4>
          <Href className="gray fs-5" href={item.href}>
            {item.title}
          </Href>
        </h4>
      );
    }
    return <h4 className="gray">{item.title}</h4>;
  }
  const startedAt = stringToDateTime(item.startedAt);
  if (item.onGoing) {
    return (
      <Row>
        <Col md={12} xs={7}>
          <h4 className="gray">{`${dateTimeToString(startedAt)} ~`}</h4>
        </Col>
        <Col md={12} xs={5} className="text-md-end text-center">
          {period && (
            <>
              <Badge className="me-1" color="primary">
                Current
              </Badge>
              <Badge color="info">{getDuration(startedAt, undefined)}</Badge>
            </>
          )}
        </Col>
      </Row>
    );
  }
  if (item.endedAt) {
    const endedAt = stringToDateTime(item.endedAt);
    return (
      <Row>
        <Col md={12} xs={9}>
          <h4 className="gray">{`${dateTimeToString(startedAt)} ~ ${dateTimeToString(endedAt)}`}</h4>
        </Col>
        <Col md={12} xs={3} className="text-md-end text-center">
          {period && <Badge color="info">{getDuration(startedAt, endedAt)}</Badge>}
        </Col>
      </Row>
    );
  }
  return <h4 className="gray">{dateTimeToString(startedAt)}</h4>;
};

const Title = ({ item }: { item: Item }) => {
  if (!item.startedAt) {
    return null;
  }
  if (item.title && item.href) {
    return (
      <h4>
        <Href className="name" href={item.href}>
          {item.title}
        </Href>
      </h4>
    );
  }
  if (item.title && !item.href) {
    return <h4>{item.title}</h4>;
  }
  return null;
};

const Keywords = ({ keywords }: { keywords: string[] }) => {
  if (!keywords) {
    return null;
  }
  return (
    <>
      <br />
      {keywords.map((keyword, index) => (
        <Badge className="me-1" key={index.toString()} color="secondary">
          {keyword}
        </Badge>
      ))}
    </>
  );
};

export default Container;
