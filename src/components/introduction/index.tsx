import { Badge } from "reactstrap";

import { DateTime } from "luxon";

import { parisienne } from "@/styles/fonts";

import { dateTimeToString, stringToDateTime } from "@/utils/DateTime";

import ComponentWrapper from "@/components/default/ComponentWrapper";
import Payload from "@/components/introduction/Payload";

const Component = ({ payload }: { payload: Payload }) => {
  const latestUpdated = stringToDateTime(payload.latestUpdated, true);
  const latestUpdatedByNow = Math.floor(DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24);
  return (
    <div className="mt-md-5 mt-4">
      <h2 className="primary mb-3">{payload.title}</h2>
      {payload.contents.map((content, index) => (
        <p key={index.toString()}>{content}</p>
      ))}
      <p className="text-end">
        <small>Latest Updated</small>{" "}
        <Badge color="secondary">{`${dateTimeToString(latestUpdated, true)} (D+${latestUpdatedByNow})`}</Badge>
      </p>
      <p className={`${parisienne.variable} font-parisienne signature text-end`}>{payload.signature}</p>
    </div>
  );
};

export default ComponentWrapper(Component);
