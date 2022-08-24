import { LOCAL_STORAGE_AUTH_INFO } from "./constants";
import nookies from "nookies";

const removeCookies = (key) => {
  nookies.destroyCookie("ctx", key);
};

const getCookies = (key) => {
  const cookie = nookies.get();
  console.log("cook", cookie);
  return cookie[key];
};
const setCookies = (key, value) => {
  nookies.set("ctx", key, JSON.stringify(value), {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
};

// token
export const setAuthInfo = (value) => {
  setCookies(LOCAL_STORAGE_AUTH_INFO, value);
};

export const getAuthInfoObj = () => {
  console.log(getCookies(LOCAL_STORAGE_AUTH_INFO));
  return getCookies(LOCAL_STORAGE_AUTH_INFO);
};

export const removeAuthInfo = () => {
  removeCookies(LOCAL_STORAGE_AUTH_INFO);
};
