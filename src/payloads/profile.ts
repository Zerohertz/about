import { faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons/faDev";
import { faHashnode } from "@fortawesome/free-brands-svg-icons/faHashnode";
import { faBolt, faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faSeedling } from "@fortawesome/free-solid-svg-icons";

import Payload from "@/components/profile/Payload";

const profile: Payload = {
  image: "props/profile.webp",
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
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/hyogeunoh/",
      icon: faLinkedin,
    },
    {
      title: "Dev.to",
      href: "https://dev.to/zerohertz",
      icon: faDev,
    },
    {
      title: "Hashnode",
      href: "https://zerohertz.hashnode.dev",
      icon: faHashnode,
    },
    {
      title: "Google Scholar",
      href: "https://scholar.google.com/citations?user=TxiJyc0AAAAJ",
      icon: faGoogle,
    },
    {
      title: "Coffee Chat",
      href: "https://cal.com/zerohertz?redirect=false",
      icon: faCoffee,
    },
  ],
  // notice: {
  //   title: "",
  //   icon: faSeedling,
  // },
};

export default profile;
