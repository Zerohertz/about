import { Container } from "reactstrap";

import Introduction from "@/components/introduction";
import Profile from "@/components/profile";
import introduction from "@/payloads/introduction";
import profile from "@/payloads/profile";
import { notoSerifKR } from "@/styles/fonts";

function About() {
  return (
    <Container className={`${notoSerifKR.variable} font-noto-serif-kr`}>
      <Profile payload={profile} />
      <Introduction payload={introduction} />
    </Container>
  );
}

export default About;
