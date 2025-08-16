import { useEffect, useState } from "react";
import { Badge, Col, Row } from "reactstrap";

import colors from "@/styles/colors.module.scss";

import { dateTimeToString, getDuration, stringToDateTime } from "@/utils/DateTime";
import { getCurrentLanguage, Language } from "@/utils/GlobalLanguage";
import { getLocalizedText, includes } from "@/utils/MultiLanguage";

import Item from "@/components/common/Item";
import Payload from "@/components/common/Payload";
import Descriptions from "@/components/default/Descriptions";
import Href from "@/components/default/Href";
import _Image from "@/components/default/Image";
import getReplacedKeyword from "@/components/global/keywords";

const Container = ({ payload }: { payload: Payload }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setLanguage(getCurrentLanguage());

    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setIsTransitioning(true);
      setTimeout(() => {
        setLanguage(event.detail);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 150);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <div
      style={{
        opacity: isTransitioning ? 0.3 : 1,
        transform: isTransitioning ? "translateY(5px)" : "translateY(0)",
        transition: "all 0.2s ease-in-out",
      }}
    >
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
          {item.descriptions ? <Descriptions descriptions={item.descriptions} /> : null}
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
        return (
          <Row>
            <Col md={12} xs={8}>
              <h4
                className={`${getLocalizedText(item.title, language).length > 25 ? "github-repo-long" : "github-repo-short"}`}
              >
                <Href className="gray" href={item.href}>
                  {getLocalizedText(item.title, language)}
                </Href>
              </h4>
            </Col>
            <Col md={12} xs={4} className="text-md-end text-end">
              <_Image
                src={`https://img.shields.io/github/stars/${getLocalizedText(item.title, language)}?style=flat&logo=github&logoColor=000000&label=GitHub%20%F0%9F%8C%9F&labelColor=gray&color=${colors.primary.replace("#", "")}`}
              />
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
        className={`gray ${getLocalizedText(item.title, language).length > 25 ? "github-repo-long" : "github-repo-short"}`}
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
                {language === "ko" ? "현재" : "Present"}
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
      {keywords.map((keyword, index) => (
        <span className="me-1" key={index.toString()}>
          <_Image
            // src={`https://img.shields.io/badge/${keyword}-white?style=flat&logo=${getReplacedKeyword(keyword)}&logoColor=white&color=${colors.primary.replace("#", "")}`}
            src={`https://img.shields.io/badge/${keyword}-black?style=flat&logo=${getReplacedKeyword(keyword)}`}
          />
        </span>
      ))}
    </div>
  );
};

export default Container;
