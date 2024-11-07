import { PropsWithChildren } from "react";

import Row from "@/components/common/Row";
import RowType from "@/components/common/RowType";
import Item from "@/components/opensources/Item";
import Payload from "@/components/opensources/Payload";

function _Row({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <>
      {payload.list.map((item, index) => (
        <Row key={index.toString()} item={serialize(item)} index={index} />
      ))}
    </>
  );
}

function serialize(item: Item): RowType {
  return {
    left: {
      title: item.title,
    },
    right: {
      descriptions: item.descriptions,
    },
  };
}

export default _Row;
