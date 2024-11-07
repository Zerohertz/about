import Payload from "@/components/global/Payload";

const title = "About Hyogeun Oh (오효근)";
const description = "About Hyogeun Oh";

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
          url: "images/preview.png",
          alt: "OpenGraphImage.png",
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
};

export default global;
