import { Container } from "reactstrap";

import Experiences from "@/components/experiences";
import Introduction from "@/components/introduction";
import Profile from "@/components/profile";
import Skills from "@/components/skills";
import experiences from "@/payloads/experiences";
import introduction from "@/payloads/introduction";
import profile from "@/payloads/profile";
import skills from "@/payloads/skills";
import { notoSerifKR } from "@/styles/fonts";

function About() {
  return (
    <Container className={`${notoSerifKR.variable} font-noto-serif-kr`}>
      <Profile payload={profile} />
      <Introduction payload={introduction} />
      <Skills payload={skills} />
      <Experiences payload={experiences} />
    </Container>
  );
}

export default About;
