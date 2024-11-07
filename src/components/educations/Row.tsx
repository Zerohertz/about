import { PropsWithChildren } from "react";

import { DateTime } from "luxon";

import CommonRow from "@/components/common/Row";
import RowType from "@/components/common/RowType";
import Util from "@/components/common/Util";
import Item from "@/components/educations/Item";
import Payload from "@/components/educations/Payload";

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
  const [startedAt] = [item.startedAt].map((at) =>
    DateTime.fromFormat(at, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL),
  );

  const endedAt =
    item.endedAt === undefined
      ? " "
      : [item.endedAt].map((at) => DateTime.fromFormat(at, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL));

  return {
    left: { title: `${startedAt} ~ ${endedAt}` },
    right: {
      ...item,
    },
  };
};

export default Row;
