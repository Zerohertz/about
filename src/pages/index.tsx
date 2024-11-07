import { Container } from "reactstrap";

import Profile from "@/components/profile";
import profile from "@/payloads/profile";
import { notoSerifKR } from "@/styles/fonts";

function About() {
  return (
    <Container className={`${notoSerifKR.variable} font-noto-serif-kr`}>
      <Profile payload={profile} />
    </Container>
  );
}

export default About;
