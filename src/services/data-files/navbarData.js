import { LITEPAPER_LINK } from "../../utilities/constants";

const allData = [
  // {
  //   name: "HOME",
  //   link: "#home",
  //   icon_src: "/assets/navbar/home.svg",
  // },
  // {
  //   name: "Gameplay",
  //   link: "/gameplay",
  //   icon_src: "/assets/navbar/how-it-works.svg",
  // },

  // {
  //   name: "NFTs",
  //   link: "/nfts",
  //   icon_src: "/assets/navbar/nft.svg",
  // },
  // {
  //   name: "FAQ",
  //   link: "/faq",
  //   icon_src: "/assets/navbar/token.svg",
  // },
  // {
  //   name: "About Us",
  //   link: "/about-us",
  //   icon_src: "/assets/navbar/roadmap.svg",
  // },

  {
    name: "HOME",
    link: "/",
    icon_src: "/assets/navbar/home.svg",
    newtab: false,
  },
  {
    name: "Gameplay",
    link: "/gameplay",
    icon_src: "/assets/navbar/token.svg",
    newtab: false,
  },
  {
    name: "NFTs",
    link: "/nfts",
    icon_src: "/assets/navbar/nft.svg",
    newtab: false,
  },
  // {
  //   name: "FAQs",
  //   link: "/faq",
  //   icon_src: "/assets/navbar/how-it-works.svg",
  //   newtab: false,
  // },
  {
    name: "Litepaper",
    link: LITEPAPER_LINK,
    icon_src: "/assets/navbar/litepaper.svg",
    newtab: true,
  },
  {
    name: "About Us",
    link: "/about-us",
    icon_src: "/assets/navbar/about-us.svg",
    newtab: false,
  },
  {
    name: "Login",
    link: "/login",
    icon_src: "/assets/navbar/token.svg",
    newtab: false,
  },

  // {
  //   name: "ROADMAP",
  //   link: "#roadmap",
  //   icon_src: "/assets/navbar/roadmap.svg",
  // },
  // {
  //   name: "HOW IT WORKS",
  //   link: "#how-it-works",
  //   icon_src: "/assets/navbar/how-it-works.svg",
  // },
];

export const getAllNavbarData = () => allData;
