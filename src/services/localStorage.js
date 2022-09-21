import { LOCAL_STORAGE_AUTH_INFO } from "./constants";
import nookies from "nookies";

export const removeCookies = (key) => {
  nookies.destroy("ctx", key);
};

export const getCookies = (key) => {
  let cookie = nookies.get();
  cookie = cookie[key];
  if (!cookie || cookie === "undefined") return undefined;

  return JSON.parse(cookie);
};
export const setCookies = (key, value) => {
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
  return getCookies(LOCAL_STORAGE_AUTH_INFO);
};

export const removeAuthInfo = () => {
  removeCookies(LOCAL_STORAGE_AUTH_INFO);
};
