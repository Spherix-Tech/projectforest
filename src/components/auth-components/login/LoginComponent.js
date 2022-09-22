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

const addressWallet = "";

export const LoginComponent = (props) => {
  const { setLoading } = props;
  const router = useRouter();
  const userContaxt = useContext(UserContext);
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
      if (connectionStatus !== STATUS_CONNECTED) {
        let walletAddress = await connect();
        console.log("walletAddress", walletAddress);
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
              setTimeout(() => {
                router.push("/");
              }, 2000);
            }
          }
        }
      }
    } catch (err) {
      console.log("ERRR", err);
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
      <div className="absolute top-[2.25rem] right-[2.5rem] text-[12px] md:text-[15px]">
        <p className="font-medium">
          Not a member?
          <Link href="/signup">
            <a className="text-[#4599FC] underline font-semibold">
              {" "}
              Register now
            </a>
          </Link>
        </p>
      </div>
      {!walletConnectionResponseObj ? (
        <>
          <div className="flex flex-col justify-center items-center gap-[1rem] lg:gap-[1.5rem]">
            <div className="font-semibold text-[12px] md:text-[17px]">
              Hello again!{" "}
            </div>
            <div className="text-[9px] md:text-[14px]">
              Welcome back. You’ve been missed!{" "}
            </div>
            <div className="my-[0.7rem] md:my-[1rem]">
              <button
                onClick={connectWallet}
                className="btnPrimary flex items-center justify-center rounded-[10px] h-[45px] md:h-[52px] w-[11rem] md:w-[15rem] text-[0.8rem] md:text-[1rem]"
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
