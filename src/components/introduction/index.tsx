import { useEffect, useState } from "react";
import { Badge } from "reactstrap";

import { DateTime } from "luxon";
import ReactMarkdown from "react-markdown";

import { dateTimeToString, stringToDateTime } from "@/utils/DateTime";
import { getCurrentLanguage, Language } from "@/utils/GlobalLanguage";
import { getLocalizedArray, getLocalizedText } from "@/utils/MultiLanguage";

import ComponentWrapper from "@/components/default/ComponentWrapper";
import Href from "@/components/default/Href";
import Payload from "@/components/introduction/Payload";

const Component = ({ payload }: { payload: Payload }) => {
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

  const localizedTitle = getLocalizedText(payload.title, language);
  const localizedContents = getLocalizedArray(payload.contents, language);
  const localizedLatestUpdated = getLocalizedText(payload.latestUpdated, language);

  const latestUpdated = stringToDateTime(localizedLatestUpdated, language);
  const latestUpdatedByNow = Math.floor(DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24);

  return (
    <div className="mt-md-5 mt-4 mb-md-5 mb-5">
      <h2 className="mb-3" id="introduction">
        <a className="primary" href="#introduction">
          {localizedTitle}
        </a>
      </h2>
      <div
        style={{
          opacity: isTransitioning ? 0.3 : 1,
          transform: isTransitioning ? "translateY(10px)" : "translateY(0)",
          transition: "all 0.3s ease-in-out",
        }}
      >
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
