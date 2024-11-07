import { PropsWithChildren } from "react";

import { DateTime } from "luxon";

import CommonRow from "@/components/common/Row";
import RowType from "@/components/common/RowType";
import Util from "@/components/common/Util";
import Item from "@/components/publications/Item";
import Payload from "@/components/publications/Payload";

function _Row({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <>
      {payload.list.map((item, index) => {
        return <CommonRow key={index.toString()} item={serialize(item)} index={index} />;
      })}
    </>
  );
}

function serialize(item: Item): RowType {
  return {
    left: {
      title: DateTime.fromFormat(item.at, Util.LUXON_DATE_FORMAT.YYYY_LL).toFormat(Util.LUXON_DATE_FORMAT.YYYY_DOT_LL),
    },
    right: {
      ...item,
    },
  };
}

export default _Row;
