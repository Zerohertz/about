import { useEffect, useMemo, useState } from "react";
import { Badge } from "reactstrap";

import { DateTime } from "luxon";
import ReactMarkdown from "react-markdown";

import { dateTimeToString, stringToDateTime } from "@/utils/DateTime";
import { getLocalizedText } from "@/utils/MultiLanguage";
import { useLanguage } from "@/utils/useLanguage";

import ComponentWrapper from "@/components/default/ComponentWrapper";
import Href from "@/components/default/Href";
import Payload from "@/components/introduction/Payload";

import { useAnimation } from "@/contexts/AnimationContext";

const Component = ({ payload }: { payload: Payload }) => {
  const { language } = useLanguage();
  const { getAnimationClass } = useAnimation();
  const [forceUpdate, setForceUpdate] = useState(0);

  console.log("Introduction component language:", language);

  useEffect(() => {
    // Force re-render when language changes
    setForceUpdate((prev) => prev + 1);
  }, [language]);

  const localizedTitle = useMemo(() => {
    const result = getLocalizedText(payload.title, language);
    console.log("Localized title:", result);
    return result;
  }, [payload.title, language]);

  const localizedContents = useMemo(() => {
    const result = payload.contents.map((item) => getLocalizedText(item, language));
    console.log("Localized contents:", result[0], result[1]); // 첫 두 항목만 출력
    return result;
  }, [payload.contents, language]);
  const localizedLatestUpdated = useMemo(
    () => getLocalizedText(payload.latestUpdated, language),
    [payload.latestUpdated, language],
  );

  const { latestUpdated, latestUpdatedByNow } = useMemo(() => {
    const updated = stringToDateTime(localizedLatestUpdated, language);
    const daysDiff = Math.floor(DateTime.local().diff(updated).milliseconds / 1000 / 60 / 60 / 24);
    return { latestUpdated: updated, latestUpdatedByNow: daysDiff };
  }, [localizedLatestUpdated, language]);

  return (
    <div className="mt-md-5 mt-4 mb-md-5 mb-5" key={`intro-${language}-${forceUpdate}`}>
      <div className={getAnimationClass(0)}>
        <h2 className="mb-3" id="introduction">
          <a className="primary" href="#introduction">
            {localizedTitle}
          </a>
        </h2>
      </div>
      <div className={getAnimationClass(1)}>
        {localizedContents.map((content, index) => (
          <ReactMarkdown
            key={index.toString()}
            components={{
              a: Href,
            }}
          >
            {content}
          </ReactMarkdown>
        ))}
        <p className="text-end">
          <small>{"Latest Updated"}</small>{" "}
          <Badge color="secondary">{`${dateTimeToString(latestUpdated, true)} (D+${latestUpdatedByNow})`}</Badge>
        </p>
        {/* <p className={"signature text-end"}>{payload.signature}</p> */}
      </div>
    </div>
  );
};

export default ComponentWrapper(Component);
