import { Container } from "reactstrap";

import Common from "@/components/common";
import Introduction from "@/components/introduction";
import Profile from "@/components/profile";
import Skills from "@/components/skills";
import educations from "@/payloads/educations";
import experiences from "@/payloads/experiences";
import extras from "@/payloads/extras";
import introduction from "@/payloads/introduction";
import openSources from "@/payloads/opensources";
import presentations from "@/payloads/presentations";
import profile from "@/payloads/profile";
import projects from "@/payloads/projects";
import publications from "@/payloads/publications";
import skills from "@/payloads/skills";
import { notoSerifKR } from "@/styles/fonts";

function About() {
  return (
    <Container className={`${notoSerifKR.variable} font-noto-serif-kr`}>
      <Profile payload={profile} />
      <Introduction payload={introduction} />
      <Skills payload={skills} />
      <Common payload={experiences} />
      <Common payload={projects} />
      <Common payload={publications} />
      <Common payload={presentations} />
      <Common payload={openSources} />
      <Common payload={educations} />
      <Common payload={extras} />
    </Container>
  );
}

export default About;
