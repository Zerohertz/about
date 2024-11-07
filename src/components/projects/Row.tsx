import { PropsWithChildren } from "react";

import { DateTime } from "luxon";

import CommonRow from "@/components/common/Row";
import RowType from "@/components/common/RowType";
import Util from "@/components/common/Util";
import Item from "@/components/projects/Item";
import Payload from "@/components/projects/Payload";

function _Row({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <>
      {payload.list.map((item, index) => {
        return <CommonRow key={index.toString()} item={serialize(item)} index={index} />;
      })}
    </>
  );
}

function serialize(payload: Item): RowType {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);
  const title = (() => {
    if (payload.endedAt) {
      const endedAt = DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);
      return `${startedAt} ~ ${endedAt}`;
    }
    return `${startedAt} ~`;
  })();
  return {
    left: {
      title,
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions,
    },
  };
}

export default _Row;
