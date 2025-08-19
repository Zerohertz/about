import { useMemo } from "react";
import { Badge } from "reactstrap";

import { DateTime } from "luxon";
import ReactMarkdown from "react-markdown";

import { useAnimation } from "@/contexts/AnimationContext";

import { dateTimeToString, stringToDateTime } from "@/utils/DateTime";
import { Language } from "@/utils/GlobalLanguage";
import { getLocalizedText } from "@/utils/MultiLanguage";

import ComponentWrapper from "@/components/default/ComponentWrapper";
import Href from "@/components/default/Href";
import Payload from "@/components/introduction/Payload";

const Component = ({ payload, language }: { payload: Payload; language: Language }) => {
  const { getAnimationClass } = useAnimation();

  const localizedTitle = useMemo(() => getLocalizedText(payload.title, language), [payload.title, language]);

  const localizedContents = useMemo(
    () => payload.contents.map((item) => getLocalizedText(item, language)),
    [payload.contents, language],
  );
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
    <div className="mt-md-5 mt-4 mb-md-5 mb-5" key={`intro-${language}`}>
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
      </div>
    </div>
  );
};

export default ComponentWrapper(Component);
