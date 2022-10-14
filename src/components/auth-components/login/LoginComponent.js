import { useState, useCallback, useContext } from "react";
import Link from "next/link";

import { STATUS_CONNECTED } from "../../../utilities/constants";
import { useWallet } from "../../../hooks/useWallet";
import { UserContext } from "../../../context/userContext";
import { useRouter } from "next/router";
import {
  getDataOrErrorMessageObj,
  getErrorMessage,
  getWalletAddressStr,
} from "../../../utilities/helpers";
import StatusCard from "../../shared/StatusCard";
import IsLoadingHOC from "../../shared/IsLoadingHOC";
import {
  getWalletNonceApi,
  loginByWalletApi,
} from "../../../services/api/auth";
import { useApi } from "../../../hooks/react-query/useApi";
import { getCookies, setCookies } from "../../../services/localStorage";
import PopupB from "../../shared/PopupB";
import ImageComponent from "../../shared/ImageComponent";

const addressWallet = "";

export const LoginComponent = (props) => {
  const { setLoading } = props;
  const router = useRouter();
  const userContaxt = useContext(UserContext);
  const [popup1Open, setPopup1Open] = useState(false);
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
    callApi: getNonceApiCall,
    reset: getNonceApiCallReset,
    ...getNonceUseApi
  } = useApi(getWalletNonceApi);

  const {
    callApi: loginApiCall,
    reset: loginApiCallReset,
    ...loginUseApi
  } = useApi(loginByWalletApi);

  const connectWallet = useCallback(async () => {
    setLoading(true);
    setWalletConnectionResponseObj(null);
    try {
      let walletAddress = await connect();
      if (!walletAddress) throw Error("Can't connect please try again");
      walletAddress = getWalletAddressStr(walletAddress);
      if (walletAddress) {
        const apiResponse = await getWalletNonceApi(1, walletAddress);
        const parsedResponse = getDataOrErrorMessageObj(apiResponse);
        if (!parsedResponse.error) {
          const signature = await signMessage(parsedResponse.data.nonce);
          const apiParams = {
            category: 1,
            address: walletAddress,
            signature: signature,
          };
          let response = await loginByWalletApi(apiParams);
          response = getDataOrErrorMessageObj(response);
          if (!response.error) {
            userContaxt.dispatch({
              type: "LOGIN_SUCCESS",
              payload: {
                email: response.data.user.account,
                avatar: response.data.user.avatar,
                accessToken: response.data.token.access_token,
                refreshToken: response.data.token.refresh_token,
              },
            });
            setWalletConnectionResponseObj({
              type: "success",
              message: "Logged In Successfully",
              imageName: "success-mark.svg",
              link: "/",
            });
            setLoading(false);

            let activationCode = getCookies("ACTIVATION_BUTTON_TRIGGERED");
            if (activationCode === true) {
              setPopup1Open(true);
              setCookies("ACTIVATION_BUTTON_TRIGGERED", false);
              setTimeout(() => {
                router.push("/beta");
              }, 10000000);
            } else {
              setTimeout(() => {
                router.push("/");
              }, 1000);
            }
          } else {
            throw Error(response.error);
          }
        } else {
          throw Error(parsedResponse.error);
        }
      }
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      setWalletConnectionResponseObj({
        type: "error",
        message: errorMessage,
        imageName: "error-mark.svg",
        link: "/login",
      });
      setLoading(false);
    }
  }, [connect, connectionStatus]);

  return (
    <div className="w-[80%]">
      <PopupB open={popup1Open} onClose={() => setPopup1Open((prev) => !prev)}>
        <div className="flex items-end">
          <div className="flex flex-col">
            <div className="flex gap-2 mb-3 items-center">
              <ImageComponent
                src="/assets/mail-icon.svg"
                className="object-contain h-6"
              />
              <h1 className="text-xl font-bold">Get Started</h1>
            </div>
            <p className="w-[90%]">
              You already have a Project Forest account. Please download the
              beta app and log in with your account details to start playing.
            </p>
          </div>
          <Link href="/beta" className="cursor-pointer" rel="noreferrer">
            <ImageComponent
              src="/assets/circle-button.svg"
              className="h-10 mb-2"
            />
          </Link>
        </div>
      </PopupB>
      {!walletConnectionResponseObj ? (
        <>
          <div className="flex flex-col justify-center items-center gap-[1rem] lg:gap-[1.5rem]">
            <div className="absolute top-[2.25rem] right-[2.5rem] text-[12px] md:text-[15px]">
              <p className="font-medium">
                New user?
                <Link href="/signup">
                  <a className="text-[#4599FC] underline font-semibold">
                    {" "}
                    Register Now
                  </a>
                </Link>
              </p>
            </div>
            <div className="font-semibold text-[12px] md:text-[17px]">
              Hello again!{" "}
            </div>
            <div className="text-[9px] md:text-[14px]">
              Welcome back. You’ve been missed!{" "}
            </div>
            <div className="my-[0.7rem] md:my-[1rem]">
              <button
                onClick={connectWallet}
                className="btnPrimary mr-0 flex items-center justify-center rounded-[10px] h-[45px] md:h-[52px] w-[11rem] md:w-[15rem] text-[0.8rem] md:text-[1rem]"
              >
                Login with MetaMask
              </button>
            </div>
          </div>
        </>
      ) : (
        <StatusCard
          walletConnectionResponseObj={walletConnectionResponseObj}
          onNextClick={() => setWalletConnectionResponseObj(null)}
        />
      )}
    </div>
  );
};
export default IsLoadingHOC(
  LoginComponent,
  "Connecting, Please check your wallet."
);
