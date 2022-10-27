const howItWorksHomepageData = [
  {
    boldTitle: "Mint ",
    normalTitle: "a Virtual Tree",
    imageName: "halloween-tree.webp",
    description:
      "Purchase or redeem your virtual Tree NFT from Project Forest. Each tree has a unique set of attributes and belongs to a distinct class of species.",
  },
  {
    boldTitle: "Plant ",
    normalTitle: "Your Seed",
    imageName: "seeds-only-img.webp",
    description:
      "Once purchased, your virtual Tree NFT can be planted as a seed within the Project Forest mobile application in your very own garden.",
    roundedMarginClasses: " ml-0 lg:ml-[3.3rem] 2xl:ml-[7.5%] ",
  },
  {
    boldTitle: "Nurture ",
    normalTitle: "It Daily",
    imageName: "watering-img.webp",
    description:
      "Use in-app consumables such as water and fertilizers to nurture your plants, leveling them up and preventing them from wilting.",
    roundedMarginClasses: " ml-0 lg:ml-[4.8rem] ",
  },
  {
    boldTitle: "Earn ",
    normalTitle: "Token Rewards",
    imageName: "watered-plant-img.webp",
    description:
      "A healthy and well-watered plant grants you daily rewards in the form of O2 and LEAF tokens.",
    roundedMarginClasses: " ml-0 lg:ml-[4.6rem] ",
  },
  {
    boldTitle: "Participate ",
    normalTitle: "in Special Events",
    imageName: "ready-plant-img.webp",
    description:
      "Use your Tree NFTs to participate in events or test their resistance against climate conditions that let you earn greater rewards.",
    roundedMarginClasses: " ml-0 lg:ml-[3rem] ",
  },
  {
    boldTitle: "Build ",
    normalTitle: "a Virtual Forest",
    imageName: "rewards-plant-img.webp",
    description:
      "Use your token earnings to mint and plant more trees to create your own NFT forest and ecosystem. The more trees you have in your forest, the more you earn.",
  },
];
const howItWorksOtherPageData = [
  {
    boldTitle: "Mint ",
    normalTitle: "a Virtual Tree",
    imageName: "intro-main-img.webp",
    description:
      "Purchase or redeem your virtual Tree NFT from Project Forest. Each tree has a unique set of attributes and belongs to a distinct class of species.",
  },
  {
    boldTitle: "Plant ",
    normalTitle: "Your Seed",
    imageName: "seeds-only-img.webp",
    description:
      "Once purchased, your virtual Tree NFT can be planted as a seed within the Project Forest mobile application in your very own garden.",
  },
  {
    boldTitle: "Nature ",
    normalTitle: "It Daily",
    imageName: "watering-img.webp",
    description:
      "Use in-app consumables such as water and fertilizers to nurture your plants, leveling them up and preventing them from wilting.",
  },
  {
    boldTitle: "Earn ",
    normalTitle: "Token Rewards",
    imageName: "watered-plant-img.webp",
    description:
      "A healthy and well-watered plant grants you daily rewards in the form of O2 and LEAF tokens.",
  },
  {
    boldTitle: "Participate ",
    normalTitle: "in Special Events",
    imageName: "ready-plant-img.webp",
    description:
      "Use your Tree NFTs to participate in events or test their resistance against climate conditions that let you earn greater rewards.",
  },
  {
    boldTitle: "Build ",
    normalTitle: "a Virtual Forest",
    imageName: "rewards-plant-img.webp",
    description:
      "Use your token earnings to mint and plant more trees to create your own NFT forest and ecosystem. The more trees you have in your forest, the more you earn.",
  },
];

export const getHowItWorksData = (pageName) =>
  pageName == "homepage" ? howItWorksHomepageData : howItWorksOtherPageData;
