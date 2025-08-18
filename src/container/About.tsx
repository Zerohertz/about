import { Container } from "reactstrap";

import { AnimationProvider } from "@/contexts/AnimationContext";

import { useLanguage } from "@/utils/useLanguage";

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

function About() {
  const { language } = useLanguage();

  return (
    <AnimationProvider>
      <Container>
        <LanguageToggle />
        <Profile payload={profile} language={language} />
        <Introduction payload={introduction} language={language} />
        <Common payload={experiences} language={language} />
        <Common payload={projects} language={language} />
        <Common payload={presentations} language={language} />
        <Common payload={openSources} language={language} />
        <Skills payload={skills} language={language} />
        <Common payload={publications} language={language} />
        <Common payload={educations} language={language} />
        <Common payload={extras} language={language} />
      </Container>
    </AnimationProvider>
  );
}

export default About;
