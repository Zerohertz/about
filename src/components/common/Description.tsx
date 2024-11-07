import { Fragment, PropsWithChildren } from "react";

import Image from "next/image";

import DescriptionType from "@/components/common/DescriptionType";
import Href from "@/components/common/Href";

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
  const maxWidth = 1000;
  const { content, className, href, postImage, postHref } = description;
  const component = (() => {
    if (href && postImage) {
      return (
        <li className={className}>
          <Href url={href} text={content} />
          <br />
          <Image className="img-fluid" src={postImage} alt={postImage} width={maxWidth} height={maxWidth} />
        </li>
      );
    }
    if (href) {
      return (
        <li className={className}>
          <Href url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li className={className}>
          {content} <Href url={postHref} text={postHref} /> <br />
          <Image className="img-fluid" src={postImage} alt={postImage} width={maxWidth} height={maxWidth} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li className={className}>
          {content} <Href url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li className={className}>
          {content}
          <br />
          <Image className="img-fluid" src={postImage} alt={postImage} width={maxWidth} height={maxWidth} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li className={className}>{content}</li>
      </>
    );
  })();
  return component;
};

export default Description;
