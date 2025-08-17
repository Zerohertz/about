import { Fragment, memo, useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

import { getCurrentLanguage, Language } from "@/utils/GlobalLanguage";
import { getLocalizedText } from "@/utils/MultiLanguage";

import Description from "@/components/default/Description";
import Href from "@/components/default/Href";
import _Image from "@/components/default/Image";

const Descriptions = ({ descriptions }: { descriptions: Description[] }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    setLanguage(getCurrentLanguage());

    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <div>
      {descriptions ? (
        <ul>
          {descriptions.map((description, descIndex) => (
            <Fragment key={`desc-${descIndex}`}>
              <CreateDescription description={description} language={language} />
              {description.descriptions && (
                <RecursiveDescription descriptions={description.descriptions} language={language} />
              )}
            </Fragment>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

const RecursiveDescription = memo(function RecursiveDescription({
  descriptions,
  language,
}: {
  descriptions: Description[];
  language: Language;
}) {
  return (
    <ul>
      {descriptions.map((description, index) => (
        <Fragment key={`recursive-desc-${index}`}>
          <CreateDescription description={description} language={language} />
          {description.descriptions && (
            <RecursiveDescription descriptions={description.descriptions} language={language} />
          )}
        </Fragment>
      ))}
    </ul>
  );
});

const CreateDescription = memo(function CreateDescription({
  description,
  language,
}: {
  description: Description;
  language: Language;
}) {
  const { content, className, href, image } = description;
  const localizedContent = getLocalizedText(content, language);

  return (
    <li>
      {href ? (
        <Href className={className} href={href}>
          {localizedContent}
        </Href>
      ) : (
        <ReactMarkdown
          className="markdown"
          components={{
            a: Href,
          }}
        >
          {localizedContent}
        </ReactMarkdown>
      )}
      {image && (
        <div>
          <_Image src={image} />
        </div>
      )}
    </li>
  );
});

export default memo(Descriptions);
