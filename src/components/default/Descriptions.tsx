import { Fragment, memo } from "react";

import ReactMarkdown from "react-markdown";

import { getLocalizedText } from "@/utils/MultiLanguage";

import Description from "@/components/default/Description";
import Href from "@/components/default/Href";
import _Image from "@/components/default/Image";

import { Language } from "@/types/language";

const Descriptions = ({ descriptions, language }: { descriptions: Description[]; language: Language }) => {
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
