import { Container } from "reactstrap";

import Educations from "@/components/educations";
import Experiences from "@/components/experiences";
import Extras from "@/components/extras";
import Introduction from "@/components/introduction";
import OpenSources from "@/components/opensources";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Publications from "@/components/publications";
import Skills from "@/components/skills";
import educations from "@/payloads/educations";
import experiences from "@/payloads/experiences";
import extras from "@/payloads/extras";
import introduction from "@/payloads/introduction";
import openSources from "@/payloads/opensources";
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
      <Experiences payload={experiences} />
      <Projects payload={projects} />
      <Publications payload={publications} />
      <OpenSources payload={openSources} />
      <Educations payload={educations} />
      <Extras payload={extras} />
    </Container>
  );
}

export default About;
