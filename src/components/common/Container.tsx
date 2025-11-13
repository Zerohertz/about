import { Badge, Col, Row } from "reactstrap";

import { dateTimeToString, getDuration, stringToDateTime } from "@/utils/DateTime";
import { getLocalizedText, includes } from "@/utils/MultiLanguage";

import Item from "@/components/common/Item";
import Payload from "@/components/common/Payload";
import Descriptions from "@/components/default/Descriptions";
import Href from "@/components/default/Href";
import _Image from "@/components/default/Image";
import { Language } from "@/components/default/Language";

const Container = ({ payload, language }: { payload: Payload; language: Language }) => {
  return (
    <div>
      {payload.list.map((item, index) => {
        return (
          <Grid
            key={index.toString()}
            item={item}
            index={index}
            period={payload.currentAndPeriod}
            language={language}
          />
        );
      })}
    </div>
  );
};

const Grid = ({
  item,
  index,
  period,
  language,
}: {
  item: Item;
  index: number;
  period?: boolean;
  language: Language;
}) => {
  return (
    <>
      {index > 0 ? <hr /> : ""}
      <Row>
        <Col sm={12} md={3} className="text-md-end">
          <Left item={item} period={period} language={language} />
        </Col>
        <Col sm={12} md={9}>
          <Title item={item} language={language} />
          {item.subTitle ? (
            <i className="gray">
              {item.subTitle}
              <br />
            </i>
          ) : null}
          {item.keywords ? <Keywords keywords={item.keywords} /> : null}
          {item.descriptions ? <Descriptions descriptions={item.descriptions} language={language} /> : null}
        </Col>
      </Row>
    </>
  );
};

const Left = ({ item, period, language }: { item: Item; period?: boolean; language: Language }) => {
  if (!item.startedAt) {
    if (!item.title) {
      return null;
    }
    if (item.href) {
      if (includes(item.title, "/", language) && item.href.includes("github.com")) {
        const repoName = getLocalizedText(item.title, language);
        const svgFileName = `${repoName.replace("/", "-").replace(/\s+/g, "-").toLowerCase()}.svg`;
        const svgPath = `/icons/stars/${svgFileName}`;
        return (
          <Row>
            <Col md={12} xs={8}>
              <h4 className={`${repoName.length > 25 ? "github-repo-long" : "github-repo-short"}`}>
                <Href className="gray" href={item.href}>
                  {repoName}
                </Href>
              </h4>
            </Col>
            <Col md={12} xs={4} className="text-md-end text-end">
              <_Image src={svgPath} />
            </Col>
          </Row>
        );
      }
      return (
        <h4>
          <Href className="gray github-repo-short" href={item.href}>
            {getLocalizedText(item.title, language)}
          </Href>
        </h4>
      );
    }
    return (
      <h4
        className={`gray ${(getLocalizedText(item.title, language) || "").length > 25 ? "github-repo-long" : "github-repo-short"}`}
      >
        {getLocalizedText(item.title, language)}
      </h4>
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
                {"Present"}
              </Badge>
              <Badge color="secondary">{getDuration(startedAt, undefined)}</Badge>
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
              <Badge color="secondary">{getDuration(startedAt, endedAt)}</Badge>
            </div>
          )}
        </Col>
      </Row>
    );
  }
  return <h4 className="gray">{dateTimeToString(startedAt)}</h4>;
};

const Title = ({ item, language }: { item: Item; language: Language }) => {
  if (!item.startedAt) {
    return null;
  }
  if (item.title && item.href) {
    return (
      <h4>
        <Href className="black" href={item.href}>
          {getLocalizedText(item.title, language)}
        </Href>
      </h4>
    );
  }
  if (item.title && !item.href) {
    return <h4>{getLocalizedText(item.title, language)}</h4>;
  }
  return null;
};

const Keywords = ({ keywords }: { keywords: string[] }) => {
  if (!keywords) {
    return null;
  }
  return (
    <div className="mb-1">
      {keywords.map((keyword, index) => {
        const svgFileName = `${keyword.replace(/\s+/g, "-").toLowerCase()}.svg`;
        const svgPath = `/icons/keywords/${svgFileName}`;
        return (
          <span className="me-1" key={index.toString()}>
            <_Image src={svgPath} />
          </span>
        );
      })}
    </div>
  );
};

export default Container;
