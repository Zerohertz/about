import { Container } from "reactstrap";

import Experiences from "@/components/experiences";
import Introduction from "@/components/introduction";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Publications from "@/components/publications";
import Skills from "@/components/skills";
import experiences from "@/payloads/experiences";
import introduction from "@/payloads/introduction";
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
    </Container>
  );
}

export default About;
