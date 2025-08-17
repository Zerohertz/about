import { Fragment, useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

import { getCurrentLanguage, Language } from "@/utils/GlobalLanguage";
import { getLocalizedText } from "@/utils/MultiLanguage";

import Description from "@/components/default/Description";
import Href from "@/components/default/Href";
import _Image from "@/components/default/Image";

const Descriptions = ({ descriptions }: { descriptions: Description[] }) => {
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
    <div className={`language-transition-subtle ${isTransitioning ? "transitioning" : "normal"}`}>
      {descriptions ? (
        <ul>
          {descriptions.map((description, descIndex) => (
            <Fragment key={`${description.content}-${descIndex}`}>
              <CreateDescription
                description={description}
                language={language}
                key={`description-${description.content}-${descIndex}`}
              />
              {description.descriptions ? (
                <RecursiveDescription
                  descriptions={description.descriptions}
                  language={language}
                  key={`description-recursion-${description.content}-${descIndex}`}
                />
              ) : (
                ""
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

const RecursiveDescription = ({ descriptions, language }: { descriptions: Description[]; language: Language }) => {
  return (
    <ul>
      {descriptions.map((description, index) => (
        <Fragment key={`${description.content}-${index}`}>
          <CreateDescription
            description={description}
            language={language}
            key={`description-${description.content}-${index}`}
          />
          {description.descriptions ? (
            <RecursiveDescription
              descriptions={description.descriptions}
              language={language}
              key={`description-recursion-${description.content}-${index}`}
            />
          ) : (
            ""
          )}
        </Fragment>
      ))}
    </ul>
  );
};

const CreateDescription = ({ description, language }: { description: Description; language: Language }) => {
  const { content, className, href, image } = description;
  const localizedContent = getLocalizedText(content, language);

  return (
    <>
      <meta name="format-detection" content="telephone=no" />
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
    </>
  );
};

export default Descriptions;
