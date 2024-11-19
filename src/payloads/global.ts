import Payload from "@/components/global/Payload";

const title = "About Hyogeun Oh (오효근)";
const description = "⚡️ About Hyogeun Oh ⚡️";

const global: Payload = {
  favicon: "icons/favicon.ico",
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "props/zerohertz_red_og.png",
          alt: "Open Graph Image",
        },
      ],
      type: "profile",
      profile: {
        firstName: "Hyogeun",
        lastName: "Oh",
        username: "Zerohertz",
        gender: "male",
      },
    },
  },
  analytics: {
    google: "G-ZCW0CR8M8X",
    naver: "7e701a42aec008",
  },
};

export default global;
