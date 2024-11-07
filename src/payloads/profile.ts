import { faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBolt, faEnvelope, faScroll } from "@fortawesome/free-solid-svg-icons";
// import { faSeedling } from "@fortawesome/free-solid-svg-icons";

import Payload from "@/components/profile/Payload";

const profile: Payload = {
  image: "images/profile.jpg",
  name: {
    title: "Hyogeun Oh",
    small: "(오효근)",
  },
  contact: [
    {
      title: "ohg3417@gmail.com",
      href: "mailto:ohg3417@gmail.com",
      icon: faEnvelope,
    },
    {
      title: "GitHub",
      href: "https://github.com/Zerohertz",
      icon: faGithub,
    },
    {
      title: "Tech Blog",
      href: "https://zerohertz.github.io/",
      icon: faBolt,
    },
    {
      title: "Resume",
      href: "https://cloud.zerohertz.xyz/s/kHm6ckdnj9SH2pW",
      icon: faScroll,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/hyogeunoh/",
      icon: faLinkedin,
    },
    {
      title: "Google Scholar",
      href: "https://scholar.google.com/citations?user=TxiJyc0AAAAJ",
      icon: faGoogle,
    },
  ],
  // notice: {
  //   title: "",
  //   icon: faSeedling,
  // },
};

export default profile;
