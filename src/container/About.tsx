import { Container } from "reactstrap";

import Common from "@/components/common";
import LanguageToggle from "@/components/common/LanguageToggle";
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

import { AnimationProvider } from "@/contexts/AnimationContext";

function About() {
  return (
    <AnimationProvider>
      <Container>
        <LanguageToggle />
        <Profile payload={profile} />
        <Introduction payload={introduction} />
        <Common payload={experiences} />
        <Common payload={projects} />
        <Common payload={presentations} />
        <Common payload={openSources} />
        <Skills payload={skills} />
        <Common payload={publications} />
        <Common payload={educations} />
        <Common payload={extras} />
      </Container>
    </AnimationProvider>
  );
}

export default About;
