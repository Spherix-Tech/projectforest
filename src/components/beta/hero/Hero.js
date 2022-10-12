import React, { useContext } from "react";
import ImageComponent from "../../shared/ImageComponent";
import { setCookies } from "../../../services/localStorage";
import { useRouter } from "next/router";
import { UserContext } from "../../../context/userContext";




const Hero = () => {
  const router = useRouter();
  const userContaxt = useContext(UserContext);
  function setActivationCode() {
    setCookies("ACTIVATION_BUTTON_TRIGGERED", true);
    const user = userContaxt.state.user ?? null;
    if (user && user.email && user.accessToken) {
      setCookies("ACTIVATION_BUTTON_TRIGGERED", false);
      router.push("/beta");
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="relative max-h-[100vh] overflow-hidden flex flex-col gap-4 md:gap-7 items-center text-center px-8">
      <div className="pointer-events-none absolute top-0 bottom-0 w-full h-full custom-gradient z-100" />
      <h4 className=" text-2xl md:text-6xl text-[#3A3A3C] font-bold">
        Reforestation Starts Here
      </h4>
      <p className="  w-full md:w-3/4 lg:w-2/4 text-primaryBlue text-base md:text-xl font-medium">
        Project Forest&apos;s first round of public beta is currently live.
        Participate in the closed beta for free and earn exclusive NFT rewards
        and more. Get started by creating a Project Forest account and
        downloading the beta app on your iOS or Android mobile devices.
      </p>
      <p className="text-primaryBlue text-sm w-full md:w-3/4 lg:w-2/4 ">
        Closed beta is limited to 1000 player slots only.
      </p>
      <div className="flex flex-row gap-6 w-full justify-center">
        <div className=" w-[165px] md:w-[250px] flex flex-col">
          <button className=" btnBeta bg-transparent hover:bg-white ">
            <a
              href="https://projectforest.io/download-game"
              target="_blank"
              rel="noreferrer"
            >
              <p>Download Beta </p>
            </a>
          </button>

          <p className="pt-2 text-[#A0A0A0] text-[10px] md:text-xs">
            For iOS and Android mobile devices
          </p>
        </div>
        <div className=" w-[165px] md:w-[250px] flex flex-col">
          <button
            className="  btnBeta bg-[#C3CA84] hover:bg-[#A2AA5F]"
            onClick={setActivationCode}
          >
            <p>Register</p>
          </button>
          <p className="pt-2 text-[#A0A0A0] text-[10px] md:text-xs">
            Create your Project Forest beta account
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <ImageComponent src={"/assets/gameplay.webp"} className=" w-full" />
      </div>

      <ImageComponent
        src={"/assets/beta/hero/left-tree.webp"}
        className="absolute left-0 top-24 h-[700px] z-50 lg:block hidden"
      />
      <ImageComponent
        src={"/assets/beta/hero/right-tree.webp"}
        className="absolute right-0 top-24 h-[700px] z-50 hidden lg:block"
      />
    </div>
  );
};

export default Hero;
