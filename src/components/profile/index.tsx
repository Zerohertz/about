import { Alert, Col, Row } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAnimation } from "@/contexts/AnimationContext";

import { Language } from "@/utils/GlobalLanguage";
import { getLocalizedText } from "@/utils/MultiLanguage";
import { useLanguage } from "@/utils/useLanguage";

import Href from "@/components/default/Href";
import _Image from "@/components/default/Image";
import Item from "@/components/profile/Item";
import Payload from "@/components/profile/Payload";

import { IMAGE_DEFAULTS } from "@/constants";

const Component = ({ payload }: { payload: Payload }) => {
  const { language } = useLanguage();
  const { getAnimationClass } = useAnimation();

  return (
    <Row className="mt-md-5 mt-3 mb-md-5 mb-4">
      <Col md={4} sm={12}>
        <div className={getAnimationClass(0)}>
          <Profile src={payload.image} />
        </div>
      </Col>
      <Col md={8} sm={12}>
        <div className="ms-md-3">
          <div className={getAnimationClass(1)}>
            <Name name={payload.name} language={language} />
          </div>
          <div className={getAnimationClass(2)}>
            <Contacts contacts={payload.contact} />
          </div>
        </div>
      </Col>
      {payload.notice && (
        <div className={getAnimationClass(3)}>
          <Alert color="secondary" role="alert" className="mt-3">
            {payload.notice.icon ? <FontAwesomeIcon className="mr-2" icon={payload.notice.icon} /> : null}{" "}
            {getLocalizedText(payload.notice.title, language)}
          </Alert>
        </div>
      )}
    </Row>
  );
};

const Profile = ({ src }: { src: string }) => {
  return (
    <div className="text-md-start text-center mb-md-0 mb-3">
      <_Image src={src} className="img-fluid rounded" size={IMAGE_DEFAULTS.PROFILE_SIZE} />
    </div>
  );
};

const Name = ({ name, language }: { name: Payload["name"]; language: Language }) => {
  return (
    <h1 className="primary text-md-start text-center">
      {getLocalizedText(name.title, language)} <small>{getLocalizedText(name.small || "", language)}</small>
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
