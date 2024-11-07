import { PropsWithChildren } from "react";
import { Col, Row } from "reactstrap";

import Description from "@/components/common/Description";
import RowType from "@/components/common/RowType";

const _Row = ({ item, index }: PropsWithChildren<{ item: RowType; index: number }>) => {
  const { left, right } = item;
  const isNeedDescriptionPadding = !!(right.title || right.subTitle);
  return (
    <div>
      {index > 0 ? <hr /> : ""}
      <Row>
        <Col sm={12} md={3} className="text-md-end">
          <Row>
            <Col md={12}>
              <h4 className="gray">{left.title}</h4>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ""}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? <h4>{right.title}</h4> : ""}
          {right.subTitle ? <i className="gray">{right.subTitle}</i> : ""}
          {right.descriptions ? (
            <Description descriptions={right.descriptions} option={{ padding: isNeedDescriptionPadding }} />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
};

export default _Row;
