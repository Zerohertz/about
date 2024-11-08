import { Fragment } from "react";

import Description from "@/components/default/Description";
import Href from "@/components/default/Href";
import _Image from "@/components/default/Image";

const Descriptions = ({ descriptions, option }: { descriptions: Description[]; option?: { padding?: boolean } }) => {
  return (
    <div className="mt-1">
      {descriptions ? (
        <ul className={option?.padding ? "pt-2" : ""}>
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
    </div>
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
        {href ? <Href className={className} url={href} text={content} /> : content}
        {image && (
          <>
            <br />
            <_Image src={image} />
          </>
        )}
      </li>
    </>
  );
};

export default Descriptions;
