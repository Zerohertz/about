import { PropsWithChildren } from "react";
import { Col, Row } from "reactstrap";

import ComponentWrapper from "@/components/common/ComponentWrapper";
import ProfileContact from "@/components/profile/Contact";
import ProfileImage from "@/components/profile/Image";
import Payload from "@/components/profile/Payload";

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { image, contact, name } = payload;
  return (
    <div className="mt-3 mt-md-5">
      <Row>
        <Col md={3} sm={12}>
          <ProfileImage src={image} />
        </Col>
        <Col md={9} sm={12}>
          {createNameArea(name)}
          {createProfileContactMap(contact)}
        </Col>
      </Row>
    </div>
  );
}

function createNameArea(name: Payload["name"]) {
  return (
    <Row>
      <Col className="text-md-start text-center">
        <h1 className="primary ps-md-3">
          {name.title} <small>{name.small || ""}</small>
        </h1>
      </Col>
    </Row>
  );
}

function createProfileContactMap(contacts: Payload["contact"]) {
  return (
    <Row>
      <Col className="pt-3">
        {contacts.map((contact, index) => (
          <ProfileContact key={index.toString()} payload={contact} />
        ))}
      </Col>
    </Row>
  );
}

export default ComponentWrapper(Component);
