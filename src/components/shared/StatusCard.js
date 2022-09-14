import Link from "next/link";
import ImageComponent from "./ImageComponent";

const StatusCard = ({ walletConnectionResponseObj, onNextClick }) => {
  const onNextBtnClick = () => {
    if (walletConnectionResponseObj.link == "/") return;
    onNextClick();
  };
  return (
    <div className="md:min-h-[400px] w-[100%]">
      <div className="bg-white bg-opacity-60 flex flex-col items-center rounded-xl h-[200px] md:h-[300px] ">
        <div className="flex flex-col justify-center w-full h-full items-center gap-2 pt-4">
          {walletConnectionResponseObj.type == "success" ? (
            <ImageComponent
              src="/assets/wallet/confirm-icon.svg"
              className="h-[3rem] md:h-[4rem] mb-[1.7rem]"
              alt="confirm icon"
            />
          ) : (
            <ImageComponent
              src="/assets/wallet/fail-icon.svg"
              className="h-[3rem] md:h-[4rem] mb-[1.7rem]"
              alt="fail icon"
            />
          )}
          <p className="text-sm md:text-lg pb-8 md:pb-0 text-center">
            {walletConnectionResponseObj.message}
          </p>
        </div>
      </div>

      <Link
        href={
          walletConnectionResponseObj && walletConnectionResponseObj.link
            ? walletConnectionResponseObj.link
            : ""
        }
      >
        <button
          type="submit"
          className={
            "btnPrimary mx-auto flex w-full items-center mt-4 md:mt-8 justify-center rounded-[10px] h-[45px] md:h-[52px] text-[0.8rem] md:text-[1rem] "
          }
          onClick={onNextBtnClick}
        >
          {walletConnectionResponseObj.type == "error" ? "Try Again" : "Next"}
        </button>
      </Link>
    </div>
  );
};

export default StatusCard;
