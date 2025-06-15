import { Alert, Col, Row } from "reactstrap";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Href from "@/components/default/Href";
import Item from "@/components/profile/Item";
import Payload from "@/components/profile/Payload";

const Component = ({ payload }: { payload: Payload }) => {
  return (
    <Row className="mt-md-5 mt-3 mb-md-5 mb-4">
      <Col md={4} sm={12}>
        <Profile src={payload.image} />
      </Col>
      <Col md={8} sm={12}>
        <div className="ms-md-3">
          <Name name={payload.name} />
          <Contacts contacts={payload.contact} />
        </div>
      </Col>
      {payload.notice && (
        <Alert color="secondary" role="alert" className="mt-3">
          {payload.notice.icon ? <FontAwesomeIcon className="mr-2" icon={payload.notice.icon} /> : null}{" "}
          {payload.notice.title}
        </Alert>
      )}
    </Row>
  );
};

const Profile = ({ src }: { src: string }) => {
  return (
    <div className="text-md-start text-center mb-md-0 mb-3">
      <Image className="img-fluid rounded" src={src} alt="Profile" width={300} height={300} quality={100} />
    </div>
  );
};

const Name = ({ name }: { name: Payload["name"] }) => {
  return (
    <h1 className="primary text-md-start text-center">
      {name.title} <small>{name.small || ""}</small>
    </h1>
  );
};

const Contacts = ({ contacts }: { contacts: Payload["contact"] }) => {
  return (
    <div className="pt-3">
      {contacts.map((contact, index) => (
        <Contact key={index.toString()} item={contact} />
      ))}
    </div>
  );
};

const Contact = ({ item }: { item: Item }) => {
  return (
    <Row className="pb-2 pb-md-3">
      <Col xs="auto">
        <span className="ps-md-1" />
        <Href href={item.href}>
          <FontAwesomeIcon icon={item.icon} className="icon" />
          <span>{item.title}</span>
        </Href>
      </Col>
    </Row>
  );
};

export default Component;
