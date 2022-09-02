import { useState, useCallback, useContext } from "react";
import Link from "next/link";
import { STATUS_CONNECTED } from "../../../utilities/constants";
import { useWallet } from "../../../hooks/useWallet";
import { UserContext } from "../../../context/userContext";
import { useRouter } from "next/router";
import { getErrorMessage } from "../../../utilities/helpers";
import StatusCard from "../../shared/StatusCard";
import IsLoadingHOC from "../../shared/IsLoadingHOC";
const addressWallet = "";

export const LoginComponent = (props) => {
  const { setLoading } = props;
  const router = useRouter();
  const [error, setError] = useState("");
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

  const connectWallet = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      if (connectionStatus !== STATUS_CONNECTED) {
        const accountInfo = await connect();
        if (!accountInfo) throw Error("can't connect please try again");
        userContaxt.dispatch({
          type: "WALLET_CONNECTED",
          payload: { walletId: accountInfo },
        });
        setWalletConnectionResponseObj({
          type: "success",
          message: "Wallet Connected Successfully",
          imageName: "success-mark.svg",
          link: "/",
        });
        setLoading(false);
        setTimeout(() => {
          router.push("/");
        }, 2000);
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
      <div className="absolute top-[2.25rem] right-[2.5rem] text-[12px] md:text-[15px]">
        <p className="font-medium">
          Not a member?
          <Link href="/signup">
            <a className="text-[#4599FC] underline font-semibold">
              {" "}
              Register Now
            </a>
          </Link>
        </p>
      </div>
      {!walletConnectionResponseObj ? (
        <>
          <div className="flex flex-col justify-center items-center gap-[1rem] lg:gap-[1.5rem]">
            <div className="font-semibold text-[12px] md:text-[17px]">
              Hello Again!{" "}
            </div>
            <div className="text-[9px] md:text-[14px]">
              Welcome Back You’ve been Missed!{" "}
            </div>
            <div className="my-[0.7rem] md:my-[1rem]">
              <button
                onClick={connectWallet}
                className="btnPrimary flex items-center justify-center rounded-[10px] h-[45px] md:h-[52px] w-[11rem] md:w-[15rem] text-[0.8rem] md:text-[1rem]"
              >
                Login with Metamask
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
export default IsLoadingHOC(LoginComponent, "Connecting with Metamask");
