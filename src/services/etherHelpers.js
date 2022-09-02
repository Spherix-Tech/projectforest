import { utils, ethers } from "ethers";

export const parseBalance = (balance) =>
  parseFloat(utils.formatEther(balance)).toFixed(3);

export const getEthereum = async () => {
  const { ethereum } = window;
  const metamaskIsInstalled = ethereum && ethereum?.isMetaMask;
  if (!metamaskIsInstalled) throw new Error("Please install Metamask");
  return ethereum;
};

export const getProvider = async () => {
  const ethereum = await getEthereum();
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    return provider;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};

export const isMetaMaskConnected = async () => {
  const provider = await getProvider();
  try {
    const accounts = await provider.listAccounts();
    return accounts.length > 0;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};

export const getSigner = async () => {
  const provider = await getProvider();
  const metaMaskConnected = await isMetaMaskConnected();
  if (!metaMaskConnected) throw new Error("Please login to Metamask");
  try {
    const signer = provider.getSigner();
    return signer;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};

export const getNetwork = async () => {
  const provider = await getProvider();
  try {
    const network = await provider.getNetwork();
    return network;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};

export const getBalance = async () => {
  const signer = await getSigner();

  try {
    const balance = await signer.getBalance();
    const balanceParsed = parseBalance(balance);
    return balanceParsed;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};

export const getAddress = async () => {
  const signer = await getSigner();
  const address = await signer.getAddress();
  return address;
};

export const getWalletInfo = async () => {
  const provider = await getProvider();
  const signer = await getSigner();
  try {
    const network = await provider.getNetwork();
    const balance = await signer.getBalance();
    const address = await signer.getAddress();
    return { address, balance, network };
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};

export const connectWallet = async () => {
  const ethereum = await getEthereum();
  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    if (!accounts[0]) throw new Error("error please try again");
    return accounts;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};

export const signMessage = async (message) => {
  const signer = await getSigner();
  try {
    const signature = await signer.signMessage(message);
    return signature;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};

export const onChainChanged = (callback) => {
  if (window?.ethereum) {
    window.ethereum.on("chainChanged", callback);
    return true;
  }
  return false;
};

export const onAccountsChanged = (callback) => {
  if (window?.ethereum) {
    window.ethereum.on("accountsChanged", callback);
    return true;
  }
  return false;
};

export const onDisconnect = (callback) => {
  if (window?.ethereum) {
    window.ethereum.on("disconnect", callback);
    return true;
  }
  return false;
};

export const offChainChanged = (callback) => {
  if (window?.ethereum) {
    window.ethereum.removeListener("chainChanged", callback);
    return true;
  }
  return false;
};

export const offAccountsChanged = (callback) => {
  if (window?.ethereum) {
    window.ethereum.removeListener("accountsChanged", callback);
    return true;
  }
  return false;
};

export const offDisconnect = (callback) => {
  if (window?.ethereum) {
    window.ethereum.removeListener("disconnect", callback);
    return true;
  }
  return false;
};
