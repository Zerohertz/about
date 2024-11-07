import { PropsWithChildren } from "react";
import { Badge } from "reactstrap";

import { DateTime } from "luxon";

import ComponentWrapper from "@/components/common/ComponentWrapper";
import Util from "@/components/common/Util";
import Payload from "@/components/introduction/Payload";
import { parisienne } from "@/styles/fonts";

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const latestUpdated = DateTime.fromFormat(payload.latestUpdated, Util.LUXON_DATE_FORMAT.YYYY_LL_DD);
  const latestUpdatedByNow = Math.floor(DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24);
  return (
    <div className="mt-5">
      <h2 className="primary">INTRODUCTION</h2>
      {payload.contents.map((content, index) => (
        <p key={index.toString()}>{content}</p>
      ))}
      <p className="text-end">
        <small>Latest Updated</small>{" "}
        <Badge color="secondary">
          {`${latestUpdated.toFormat(Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD)} (D+${latestUpdatedByNow})`}
        </Badge>
      </p>
      <p className={`${parisienne.variable} font-parisienne signature text-end`}>{payload.signature}</p>
    </div>
  );
}

export default ComponentWrapper(Component);
