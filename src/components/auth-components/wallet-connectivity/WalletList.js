import { useState, useCallback, useEffect, useContext } from "react";
import { getAllWalletListData } from "../../../services/data-files/WalletListData";
import { STATUS_CONNECTED } from "../../../utilities/constants";
import { connect, useWallet } from "../../../hooks/useWallet";
import ImageComponent from "../../shared/ImageComponent";
import StatusCard from "../../shared/StatusCard";
import {
  getDataOrErrorMessageObj,
  getErrorMessage,
} from "../../../utilities/helpers";
import IsLoadingHOC from "../../shared/IsLoadingHOC";
import { UserContext } from "../../../context/userContext";
import { getWalletNonceApi, signUpApi } from "../../../services/api/auth";
import { useApi } from "../../../hooks/react-query/useApi";
import { useRouter } from "next/router";

const walletData = getAllWalletListData();
const addressWallet = "";
export const WalletList = (props) => {
  const router = useRouter();
  const { setLoading } = props;
  const userContaxt = useContext(UserContext);
  const [selectedWalletName, setSelectedWallet] = useState(null);
  const [walletConnectionResponseObj, setWalletConnectionResponseObj] =
    useState(null);
  const {
    account,
    connect,
    connectionStatus,
    signMessage,
    error: errorWallet,
  } = useWallet(addressWallet);

  const {
    callApi: signupApiCall,
    reset: signupApiCallReset,
    ...verificationCodeUseApi
  } = useApi(signUpApi);

  const {
    callApi: nonceApiCall,
    reset: nonceApiCallReset,
    ...nonceUseApi
  } = useApi(getWalletNonceApi);

  const changeWalletSelection = (walletDetails) => {
    if (!walletDetails.enabled) return;
    setSelectedWallet(walletDetails.name);
  };

  const getSignupApiReqBody = (walletAddress, userObj) => {
    setTimeout(() => {
      if (!userObj || !userObj.email || !userObj.password)
        return router.push("/signup");
    }, 1000);
    const res = {
      account: userObj.email,
      password: userObj.password,
      verify_code: userObj.verify_code,
      wallet_category: 1,
      wallet_address: walletAddress.address
        ? walletAddress.address
        : walletAddress,
    };

    return res;
  };

  useEffect(() => {
    console.log("STATE", userContaxt.state.user);
  }, []);

  const linkWalletHandler = useCallback(async () => {
    setLoading(true);
    // if (!selectedWalletName) return;
    try {
      let address = account?.address;
      if (connectionStatus !== STATUS_CONNECTED) {
        const accountInfo = await connect();
        if (!accountInfo) throw Error("Connection failed please try again");
        address = accountInfo?.address;
        if (address) {
          console.log("address", address);
          const userObj = userContaxt.state.user ?? null;
          console.log(userObj);
          const apiReq = getSignupApiReqBody(address, userObj);
          const apiResponse = await signUpApi(apiReq);
          console.log(apiResponse);
          const parsedResponse = getDataOrErrorMessageObj(apiResponse);
          console.log(parsedResponse);
          if (parsedResponse.error) {
            setWalletConnectionResponseObj({
              type: "error",
              message: parsedResponse.error,
              imageName: "error-mark.svg",
              link: "/signup/wallet",
            });
          } else {
            userContaxt.dispatch({
              type: "WALLET_CONNECTED",
              payload: { walletId: address },
            });
            setWalletConnectionResponseObj({
              type: "success",
              message: "Account created and wallet Connected Successfully",
              imageName: "success-mark.svg",
              link: "/",
            });
          }

          setLoading(false);
        }
      }
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      setWalletConnectionResponseObj({
        type: "error",
        message: errorMessage,
        imageName: "error-mark.svg",
        link: "/signup/wallet",
      });
      setLoading(false);
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
      {!walletConnectionResponseObj ? (
        <>
          <div className="font-semibold text-[14px] md:text-[18px] text-center md:leading-5 leading-5 md:pb-6 pb-3 pt-3 px-2">
            Connect with one of our available wallet Providers or create a new
            one.
          </div>
          <div className="rounded-2xl cursor-pointer w-[80%]">
            {walletData.map((wallet, i, { length }) => {
              return (
                <div
                  key={i}
                  className={
                    "flex flex-row items-center md:py-3 lg:py-4 py-3 px-8 border-b-2 " +
                    (!wallet.enabled
                      ? " bg-[#e6e7e6] cursor-default opacity-50"
                      : " hover:bg-[#C3CA84] rounded-t-2xl hover:text-white ") +
                    (selectedWalletName == wallet.name
                      ? " bg-[#C3CA84] text-white rounded-t-2xl"
                      : " bg-white bg-opacity-70") +
                    (i + 1 === length ? " rounded-b-2xl" : "")
                  }
                  onClick={() => changeWalletSelection(wallet)}
                >
                  <ImageComponent
                    src={"/assets/wallet/" + wallet.icon}
                    className=""
                    alt={wallet.name}
                  />

                  <p className="px-2 whitespace-nowrap">{wallet.name}</p>
                  <p
                    className={
                      "flex justify-end w-full text-[10px] " +
                      (selectedWalletName == wallet.name
                        ? " text-white"
                        : " text-[#6D706F]")
                    }
                  >
                    {wallet.text}
                  </p>
                </div>
              );
            })}

            {/* <p className="w-full text-center py-3 sm:py-4 text-sm">
          Show more options
        </p> */}
          </div>

          <button
            type="submit"
            className={
              "btnPrimary w-[80%] mx-auto flex items-center mt-4 md:mt-8 justify-center rounded-[10px] h-[45px] md:h-[52px] text-[0.8rem] md:text-[1rem] " +
              (!selectedWalletName ? "disabled" : "")
            }
            onClick={linkWalletHandler}
            disabled={!selectedWalletName}
          >
            Next
          </button>
        </>
      ) : (
        <div className="w-[80%] mt-[1rem] md:mt-[2.5rem]">
          <StatusCard
            walletConnectionResponseObj={walletConnectionResponseObj}
            onNextClick={() => setWalletConnectionResponseObj(null)}
          />
        </div>
      )}
    </div>
  );
};

export default IsLoadingHOC(
  WalletList,
  "Connecting, please check your wallet."
);
