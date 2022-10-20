import { useContext } from "react";
import { useRouter } from "next/router";

import ImageComponent from "../shared/ImageComponent";
import NavLink from "./nav-link/NavLink";
import Profile from "./profile/Profile";
import ChangePassword from "./change-password/ChangePassword";
import { UserContext } from "../../context/userContext";

const SettingsCard = () => {
  const { query, replace } = useRouter();
  const userContaxt = useContext(UserContext);

  let rightForm;

  if (!query.page) rightForm = <Profile />;
  else if (query.page === "change-password") rightForm = <ChangePassword />;

  const logout = () => {
    userContaxt.dispatch({
      type: "LOGOUT",
    });
    replace("/");
  };

  return (
    <div className="flex justify-center items-center auth-card relative">
      <div className="flex flex-col min-h-[400px] w-[350px] xs:w-[450px] sm:w-[450px] md:w-[750px] lg:w-[900px] 2xl:w-[1320px] rounded-[1rem] xl:rounded-[2rem] custom-shadow sha pt-8">
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center justify-between mb-4 md:pl-9 px-6 md:justify-start ">
            <div className="flex flex-row items-center">
              <ImageComponent
                src="/assets/settings/setting-icon.svg"
                className="h-8 md:h-full"
              />
              <h1 className="ml-3 text-xl md:text-3xl text-[#434343]  font-semibold">
                Settings
              </h1>
            </div>
            <div
              className="flex md:hidden flex-row items-center gap-2 font-medium text-sm text-[#919191] hover:text-[#434343] cursor-pointer"
              onClick={logout}
            >
              <ImageComponent
                src="/assets/settings/logout.svg"
                className="h-5"
              />
              Logout
            </div>
          </div>
          <hr className="border-t-gray-300 border-transparent min-w-full border-1" />
        </div>
        <div className="flex flex-col md:flex-row md:my-7 flex-grow">
          {/* Left side */}
          <div className="flex flex-row md:flex-col h-[98.5%]">
            <NavLink
              icon="profile-icon.svg"
              path={{
                href: "/settings",
              }}
            >
              Profile
            </NavLink>
            <NavLink
              icon="forgot-password-icon.svg"
              path={{
                href: "/settings",
                query: {
                  page: "change-password",
                },
              }}
            >
              Change Password
            </NavLink>

            <div
              className="md:flex hidden flex-row items-center gap-6 text-sm text-[#919191] hover:text-[#434343] text-[18px] px-10 py-3 cursor-pointer"
              onClick={logout}
            >
              <ImageComponent
                src="/assets/settings/logout.svg"
                className="h-6"
              />
              Logout
            </div>
          </div>
          <span className="border-l-gray-300 border-transparent min-h-full w-1 border-[1.5px] ml-4" />

          {/* Right side */}
          <div className="flex flex-grow flex-col text-labelTextColor pl-8 pr-6 pt-3 md:pt-0">
            {rightForm}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
