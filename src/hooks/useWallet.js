import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { STATUS_CONNECTED, STATUS_CONNECTING, STATUS_NOT_CONNECTED, STATUS_UNKNOWN } from 'utils/constants';
import { connectWallet, getWalletInfo, offAccountsChanged, offChainChanged, offDisconnect, onAccountsChanged, onChainChanged, onDisconnect, signMessage } from 'utils/etherHelpers';
import { assertAllowedNetwork } from 'utils/validators';
import { networkAllowed } from 'contracts/ankt';
import { useSelector } from 'react-redux';
import { selectAddressAuth } from 'services/reducers/auth';
import { useNavigate } from 'react-router';

const WalletContext = createContext();

export const useWallet = (expectedAddress = '') => {
  const [account, setAccount] = useState({});
  const [connectionStatus, setConnectionStatus] = useState(STATUS_UNKNOWN);
  const [errorWallet, setErrorWallet] = useState('');
  const connected = useMemo(() => connectionStatus === STATUS_CONNECTED, [connectionStatus]);
  const noConnected = useMemo(() => connectionStatus === STATUS_NOT_CONNECTED, [connectionStatus]);

  const update = useCallback(
    async (connectFirst = false) => {
      setErrorWallet('');
      try {
        setConnectionStatus(STATUS_CONNECTING);
        if (connectFirst) await connectWallet();
        const walletInfo = await getWalletInfo();
        assertAllowedNetwork(walletInfo?.network?.chainId, networkAllowed);
        if (expectedAddress && walletInfo.address !== expectedAddress) throw Error('Something’s not right! Please make sure you use the same address that you used for signing up.');
        setAccount(walletInfo);
        setConnectionStatus(STATUS_CONNECTED);
        return walletInfo;
      } catch (err) {
        setErrorWallet(err.message);
        setConnectionStatus(STATUS_NOT_CONNECTED);
        throw err;
      }
    },
    [expectedAddress]
  );

  const connect = useCallback(async () => {
    return update(true);
  }, [update]);

  const disconnect = useCallback(async () => {
    setErrorWallet('');
    setConnectionStatus(STATUS_NOT_CONNECTED);
    setAccount({});
  }, []);

  useEffect(() => {
    update();
    onChainChanged(update);
    onAccountsChanged(update);
    onDisconnect(update);

    return () => {
      offChainChanged(update);
      offAccountsChanged(update);
      offDisconnect(update);
    };
  }, [update]);

  return {
    account,
    error: errorWallet,
    connect,
    disconnect,
    update,
    connectionStatus,
    onChainChanged,
    onAccountsChanged,
    onDisconnect,
    signMessage,
    offChainChanged,
    offAccountsChanged,
    offDisconnect,
    connected,
    noConnected,
  };
};

export const WalletProvider = ({ children }) => {
  const addressWallet = useSelector(selectAddressAuth);
  const wallet = useWallet(addressWallet);
  const { noConnected } = wallet;
  const shouldGoSetting = useMemo(() => noConnected || !addressWallet, [addressWallet, noConnected]);
  //  console.log({ noConnected, addressWallet });
  const navigate = useNavigate();

  const goSetting = useCallback(async () => {
    navigate('/setting-metamask');
  }, [navigate]);

  useEffect(() => {
    if (shouldGoSetting) goSetting();
  }, [shouldGoSetting, goSetting]);

  return <WalletContext.Provider value={wallet}>{children}</WalletContext.Provider>;
};
