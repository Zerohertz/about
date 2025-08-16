import { useEffect, useState } from "react";
import { Alert, Col, Row } from "reactstrap";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getCurrentLanguage, Language } from "@/utils/GlobalLanguage";
import { getImageSrc } from "@/utils/ImagePath";
import { getLocalizedText } from "@/utils/MultiLanguage";

import Href from "@/components/default/Href";
import Item from "@/components/profile/Item";
import Payload from "@/components/profile/Payload";

const Component = ({ payload }: { payload: Payload }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    setLanguage(getCurrentLanguage());

    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <Row className="mt-md-5 mt-3 mb-md-5 mb-4">
      <Col md={4} sm={12}>
        <Profile src={payload.image} />
      </Col>
      <Col md={8} sm={12}>
        <div className="ms-md-3">
          <Name name={payload.name} language={language} />
          <Contacts contacts={payload.contact} />
        </div>
      </Col>
      {payload.notice && (
        <Alert color="secondary" role="alert" className="mt-3">
          {payload.notice.icon ? <FontAwesomeIcon className="mr-2" icon={payload.notice.icon} /> : null}{" "}
          {getLocalizedText(payload.notice.title, language)}
        </Alert>
      )}
    </Row>
  );
};

const Profile = ({ src }: { src: string }) => {
  return (
    <div className="text-md-start text-center mb-md-0 mb-3">
      <Image
        className="img-fluid rounded"
        src={getImageSrc(src)}
        alt="Profile"
        width={300}
        height={300}
        quality={100}
      />
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
