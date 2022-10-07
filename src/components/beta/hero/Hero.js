import React, { useContext } from "react";
import ImageComponent from "../../shared/ImageComponent";
import {
  setCookies,
} from "../../../services/localStorage";
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
      window.open(
        "https://gleam.io/competitions/DB317-project-forest-closed-beta-invite",
        "_self"
      );
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="relative max-h-[100vh] overflow-hidden flex flex-col gap-4 md:gap-7 items-center text-center px-8">
      <div className="pointer-events-none absolute top-0 bottom-0 w-full h-full custom-gradient z-100" />
      <h4 className=" text-2xl md:text-6xl text-[#3A3A3C] font-bold">
        Reforestation Is Here
      </h4>
      <p className="  w-full md:w-3/4 lg:w-2/4 text-primaryBlue text-base md:text-xl ">
        Project Forest&apos;s closed beta is now live. Be the first to
        experience the Grow-to-Earn app and earn exclusive rewards.
        Pre-registrations for the closed beta have concluded, and beta invites
        have been sent out. Players that wish to be a part of the closed beta
        can stay tuned for updates in the coming days.<br></br>
        <br></br> Let&apos;s rebuild the Earth&apos;s environment one branch at
        a time.
      </p>
      <div className="flex flex-row gap-3 w-full justify-center">
        <div className="w-[165px] md:w-auto flex flex-col">
          <a
            href="https://projectforest.io/download-game"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" btnBeta bg-[#C3CA84] hover:bg-[#A2AA5F]">
              <p>Download Beta (APK) </p>
            </button>
          </a>
          <p className="pt-2 text-[#A0A0A0] text-[10px] md:text-sm">
            For mobile phones only
          </p>
        </div>
        <div className="w-[165px] md:w-auto flex flex-col">
          <button
            className=" btnBeta bg-transparent hover:bg-white"
            onClick={setActivationCode}
          >
            <p>Get Activation Code</p>
          </button>
          <p className="pt-2 text-[#A0A0A0] text-[10px] md:text-sm">
            Complete gleam to receive code
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
