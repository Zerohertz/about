import { Fragment } from "react";

import ReactMarkdown from "react-markdown";

import Description from "@/components/default/Description";
import Href from "@/components/default/Href";
import _Image from "@/components/default/Image";

const Descriptions = ({ descriptions }: { descriptions: Description[] }) => {
  return (
    <>
      {descriptions ? (
        <ul>
          {descriptions.map((description, descIndex) => (
            <Fragment key={`${description.content}-${descIndex}`}>
              <CreateDescription description={description} key={`description-${description.content}-${descIndex}`} />
              {description.descriptions ? (
                <RecursiveDescription
                  descriptions={description.descriptions}
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
    </>
  );
};

const RecursiveDescription = ({ descriptions }: { descriptions: Description[] }) => {
  return (
    <ul>
      {descriptions.map((description, index) => (
        <Fragment key={`${description.content}-${index}`}>
          <CreateDescription description={description} key={`description-${description.content}-${index}`} />
          {description.descriptions ? (
            <RecursiveDescription
              descriptions={description.descriptions}
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

const CreateDescription = ({ description }: { description: Description }) => {
  const { content, className, href, image } = description;
  return (
    <>
      <meta name="format-detection" content="telephone=no" />
      <li>
        {href ? (
          <Href className={className} href={href}>
            {content}
          </Href>
        ) : (
          <ReactMarkdown
            className="markdown"
            components={{
              a: Href,
            }}
          >
            {content}
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
