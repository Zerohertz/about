import { PropsWithChildren } from "react";

import { DateTime } from "luxon";

import CommonRow from "@/components/common/Row";
import RowType from "@/components/common/RowType";
import Util from "@/components/common/Util";
import Item from "@/components/extras/Item";
import Payload from "@/components/extras/Payload";

const Row = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  return (
    <>
      {payload.list.map((item, index) => {
        return <CommonRow key={index.toString()} item={serialize(item)} index={index} />;
      })}
    </>
  );
};

const serialize = (item: Item): RowType => {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(item.startedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);
  const title = (() => {
    if (item.endedAt) {
      const endedAt = DateTime.fromFormat(item.endedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);
      return `${startedAt} ~ ${endedAt}`;
    }
    return startedAt;
  })();

  return {
    left: {
      title,
    },
    right: {
      ...item,
    },
  };
};

export default Row;
