const walletListData = [
  {
    name: "MetaMask",
    icon: "metamask.svg",
    text: "Popular",
    enabled: true,
  },
  {
    name: "Trust Wallet",
    icon: "coinbase.svg",
    enabled: false,
  },
  {
    name: "WalletConnect",
    icon: "walltconnect.svg",
    enabled: false,
  },
  {
    name: "Fortmatic",
    icon: "formatic.svg",
    enabled: false,
  },
];

export const getAllWalletListData = () => walletListData;
