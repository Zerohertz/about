import { Fragment, PropsWithChildren } from "react";

import DescriptionType from "@/components/common/DescriptionType";
import Href from "@/components/common/Href";
import _Image from "@/components/common/Image";

const Description = ({
  descriptions,
  option,
}: PropsWithChildren<{
  descriptions: DescriptionType[];
  option?: { padding?: boolean };
}>) => {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? "pt-2" : ""}>
          {descriptions.map((description, descIndex) => (
            <Fragment key={`${description.content}-${descIndex}`}>
              <CreateDescription description={description} key={`description-${description.content}-${descIndex}`} />
              {description.descriptions ? (
                <DescriptionRecursion
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

const DescriptionRecursion = ({ descriptions }: PropsWithChildren<{ descriptions: DescriptionType[] }>) => {
  return (
    <ul>
      {descriptions.map((description, index) => (
        <Fragment key={`${description.content}-${index}`}>
          <CreateDescription description={description} key={`description-${description.content}-${index}`} />
          {description.descriptions ? (
            <DescriptionRecursion
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

const CreateDescription = ({ description }: PropsWithChildren<{ description: DescriptionType }>) => {
  const { content, className, href, image } = description;
  return (
    <>
      <meta name="format-detection" content="telephone=no" />
      <li className={className}>
        {href ? <Href url={href} text={content} /> : content}
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

export default Description;
