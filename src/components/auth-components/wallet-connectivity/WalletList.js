import React from "react";
import { useState, useCallback } from "react";
import { getAllWalletListData } from "../../../services/data-files/WalletListData";
import { STATUS_CONNECTED } from "../../../utilities/constants";
import { connect, useWallet } from "../../../hooks/useWallet";
import ImageComponent from "../../shared/ImageComponent";

const walletData = getAllWalletListData();
const addressWallet = "";
function WalletList({ setValue }) {
  const [loading, setLoading] = useState(false);
  const {
    account,
    connect,
    connectionStatus,
    signMessage,
    error: errorWallet,
  } = useWallet(addressWallet);
  const linkWalletHandler = useCallback(async () => {
    setLoading(true);
    try {
      let address = account?.address;
      if (connectionStatus !== STATUS_CONNECTED) {
        const accountInfo = await connect();
        console.log("accountInfo", accountInfo);
        if (!accountInfo) throw Error("can't connect please try again");
        address = accountInfo?.address;
      }
      // const nonceData = await getNonceApiCall({ address });
      // const signature = await signMessage(nonceData.data.nonce);
      // await linkMetamaskApiCall({ sign: signature, address });
      // dispatch(updateAddress({ address }));
      setLoading(false);
    } catch (err) {
      const { errorCode } = getError(err);
      setError(firstCap(errorCode ? errorCode.message : err.message));
      setLoading(false);
      console.warn(err);
    }
  }, [
    account?.address,
    connect,
    connectionStatus,
    //dispatch,
    //getNonceApiCall,
    //linkMetamaskApiCall,
    //signMessage,
  ]);

  return (
    <div className="flex flex-col items-center w-full ">
      <div className="font-semibold text-[14px] md:text-[18px] text-center md:leading-5 leading-5 md:pb-6 pb-3 pt-3">
        Connect with one of our available wallet Providers or create a new one.
      </div>
      <div className=" bg-white bg-opacity-70 rounded-2xl cursor-pointer w-[100%]">
        {walletData.map((e, i) => {
          return (
            <div
              key={i}
              className="flex flex-row items-center md:py-3 lg:py-4 py-3 px-8 border-b-2"
              onClick={linkWalletHandler}
            >
              <ImageComponent
                src={"/assets/wallet/" + e.icon}
                className=""
                alt={e.name}
              />

              <p className="px-2">{e.name}</p>
              <p className="flex justify-end w-full text-[10px] text-[#6D706F]">
                {e.text}
              </p>
            </div>
          );
        })}
        <p className="w-full text-center py-3 sm:py-4 text-sm">
          Show more options
        </p>
      </div>
    </div>
  );
}

export default WalletList;
