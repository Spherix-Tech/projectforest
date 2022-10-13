import { publicApiCall, privateApiCall } from "./config/apiCalls";
import { getHeadersAuthorization } from "./config/helpersApi";

// public routes
export const loginApi = async (params) => {
  const res = await publicApiCall.post({ url: "user/v1/login", body: params });
  return res;
};
export const loginByWalletApi = async (params) => {
  const res = await publicApiCall.post({
    url: "user/v1/wallet_login",
    body: params,
  });
  return res;
};
export const sendVerificationCodeApi = async (params) => {
  const res = await publicApiCall.post({
    url: "user/v1/send_code",
    body: params,
  });
  return res;
};
export const checkVerificationCodeApi = async (params) => {
  const res = await publicApiCall.post({
    url: "/user/v1/check_code",
    body: params,
  });
  return res;
};
export const getWalletNonceApi = async (category, address) => {
  const res = await publicApiCall.get({
    url: `/user/v1/wallet_nonce?category=${category}&address=${address}`,
  });
  return res;
};

export const signUpApi = async (params) => {
  const res = await publicApiCall.post({
    url: "user/v1/signup",
    body: { ...params },
  });
  return res;
};

export const getWalletRandomValues = async (params) => {
  const res = await publicApiCall.post({
    url: "user/v1/wallet_nonce",
    body: params,
  });
  return res;
};

export const getAvatarListApi = async (params) => {
  const res = await publicApiCall.get({
    url: "user/v1/option",
    headers: getHeadersAuthorization(params?.token),
  });
  return res;
};

export const resetPasswordApi = async (params) => {
  const res = await publicApiCall.post({
    url: "/resetpassword",
    body: params,
    headers: getHeadersAuthorization(params?.token),
  });
  return res;
};

export const changePasswordApi = async (params) => {
  const res = await publicApiCall.post({
    url: "user/fotgetpwd",
    body: params,
  });
  return res;
};

// private routes
export const getProfileApi = async () => {
  const res = await privateApiCall.get({ url: "/profile" });
  return res;
};

export const updateProfileApi = async () => {
  const res = await privateApiCall.post({ url: "/profile" });
  return res;
};

export const logoutApi = async () => {
  const res = await privateApiCall.post({ url: "/logout" });
  return res;
};
