import {
  DISCORD_LINK,
  MEDIUM_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
} from "../../utilities/constants";

const allData = [
  {
    icon: "/assets/footer/discord.svg",
    href: DISCORD_LINK,
  },
  {
    icon: "/assets/footer/twitter.svg",
    href: TWITTER_LINK,
  },
  {
    icon: "/assets/footer/medium.svg",
    href: MEDIUM_LINK,
  },
  {
    icon: "assets/footer/telegram.svg",
    href: TELEGRAM_LINK,
  },
  // {
  //   icon: "assets/footer/reddit.svg",
  //   href: REDDIT_LINK,
  // },
  // {
  //   icon: "assets/footer/instagram.svg",
  //   href: INSTAGRAM_LINK,
  // },
];

export const getAllSocialsData = () => allData;
