import React from "react";
import { APP_ANDROID_STORE, APP_APPLE_STORE } from "../../services/constants";
import ImageComponent from "../shared/ImageComponent";

function DownloadGameComponent() {
  return (
    <div className="flex justify-end items-center download-game-bg h-full min-h-[103vh]">
      <div className="flex justify-end items-center mr-[7%] lg:mr-[12%] xl:mr-[14%]">
        <div className="flex flex-col justify-center items-center gap-[15px]">
          <div>
            <ImageComponent
              src="/assets/download-game/logo.png"
              alt="download-game"
              className="w-[20rem] md:w-[30rem]"
            />
          </div>
          <div className="flex justify-center items-center ga-2">
            <div>
              <ImageComponent
                src="/assets/download-game/mobile1.png"
                alt="download-game"
                className="max-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
              />
            </div>
            <div>
              <ImageComponent
                src="/assets/download-game/mobile2.png"
                alt="download-game"
                className="max-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
              />
            </div>
          </div>
          <div>
            <ImageComponent
              src="/assets/download-game/available-now.png"
              alt="download-game"
              className="w-[15rem] sm:w-[20rem] md:w-[30rem]"
            />
          </div>
          <div className="flex justify-center items-center gap-2 mt-[15px]">
            <div>
              <a
                target="_blank"
                without
                rel="noreferrer"
                href={APP_ANDROID_STORE}
              >
                <ImageComponent
                  src="/assets/download-game/playstore.png"
                  alt="download-game"
                  className="h-[3rem] md:h-[5rem] cursor-pointer"
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                without
                rel="noreferrer"
                href={APP_APPLE_STORE}
              >
                <ImageComponent
                  src="/assets/download-game/app-store.png"
                  alt="download-game"
                  className="h-[3rem] md:h-[5rem] cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadGameComponent;
