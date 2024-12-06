import { Badge, Col, Row } from "reactstrap";

import colors from "@/styles/colors.module.scss";

import { dateTimeToString, getDuration, stringToDateTime } from "@/utils/DateTime";

import Item from "@/components/common/Item";
import Payload from "@/components/common/Payload";
import Descriptions from "@/components/default/Descriptions";
import Href from "@/components/default/Href";
import _Image from "@/components/default/Image";
import getReplacedKeyword from "@/components/global/keywords";

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
          {item.subTitle ? (
            <i className="gray">
              {item.subTitle}
              <br />
            </i>
          ) : null}
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
            <Col md={12} xs={8}>
              <h4 className={`${item.title.length > 25 ? "github-repo-long" : "github-repo-short"}`}>
                <Href className="gray" src={item.href}>
                  {item.title}
                </Href>
              </h4>
            </Col>
            <Col md={12} xs={4} className="text-md-end text-end">
              <_Image
                src={`https://img.shields.io/github/stars/${item.title}?style=flat&logo=github&logoColor=000000&label=GitHub%20%F0%9F%8C%9F&labelColor=gray&color=${colors.primary.replace("#", "")}`}
              />
            </Col>
          </Row>
        );
      }
      return (
        <h4>
          <Href className="gray github-repo-short" src={item.href}>
            {item.title}
          </Href>
        </h4>
      );
    }
    return (
      <h4 className={`gray ${item.title.length > 25 ? "github-repo-long" : "github-repo-short"}`}>{item.title}</h4>
    );
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
            <div className="text-end">
              <Badge className="me-1" color="primary">
                Present
              </Badge>
              <Badge color="info">{getDuration(startedAt, undefined)}</Badge>
            </div>
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
          {period && (
            <div className="text-end">
              <Badge color="info">{getDuration(startedAt, endedAt)}</Badge>
            </div>
          )}
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
        <Href className="black" src={item.href}>
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
    <div className="mb-1">
      {keywords.map((keyword, index) => (
        <span className="me-1" key={index.toString()}>
          <_Image
            src={`https://img.shields.io/badge/${keyword}-white?style=flat&logo=${getReplacedKeyword(keyword)}&logoColor=white&color=${colors.primary.replace("#", "")}`}
          />
        </span>
      ))}
    </div>
  );
};

export default Container;
