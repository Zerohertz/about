import { Badge } from "reactstrap";

import { DateTime } from "luxon";
import ReactMarkdown from "react-markdown";

import { dateTimeToString, stringToDateTime } from "@/utils/DateTime";

import ComponentWrapper from "@/components/default/ComponentWrapper";
import Href from "@/components/default/Href";
import Payload from "@/components/introduction/Payload";

const Component = ({ payload }: { payload: Payload }) => {
  const latestUpdated = stringToDateTime(payload.latestUpdated);
  const latestUpdatedByNow = Math.floor(DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24);
  return (
    <div className="mt-md-5 mt-4 mb-md-5 mb-5">
      <h2 className="mb-3" id="INTRODUCTION">
        <a className="primary" href="#INTRODUCTION">
          {payload.title}
        </a>
      </h2>
      {payload.contents.map((content, index) => (
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
        <small>Latest Updated</small>{" "}
        <Badge color="secondary">{`${dateTimeToString(latestUpdated, true)} (D+${latestUpdatedByNow})`}</Badge>
      </p>
      <p className={"signature text-end"}>{payload.signature}</p>
    </div>
  );
};

export default ComponentWrapper(Component);
