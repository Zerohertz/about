import { PropsWithChildren } from "react";
import { Badge, Col, Row } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Href from "@/components/common/Href";
import Item from "@/components/profile/Item";

function Contact({ payload }: PropsWithChildren<{ payload: Item }>) {
  return (
    <Row className="pb-2 pb-md-3">
      <Col xs={1} className="text-end">
        <FontAwesomeIcon icon={payload.icon} className="icon" />
      </Col>
      <Col xs="auto">{createLink(payload)}</Col>
    </Row>
  );
}

function createLink(payload: Item) {
  if (payload.badge) {
    return <Badge color="secondary">{payload.title || payload.link}</Badge>;
  }
  return payload.link ? <Href url={payload.link} text={payload.title} /> : <span>{payload.title}</span>;
}

export default Contact;
