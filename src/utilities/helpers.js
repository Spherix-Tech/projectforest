import {
  APP_ANDROID_STORE,
  APP_APPLE_STORE,
  METAMASK_ERROR_LIST,
  SUCCESS_CODE,
} from "../services/constants";

export const getDataOrErrorMessageObj = (apiResponse) => {
  return apiResponse.code === SUCCESS_CODE
    ? { data: apiResponse.data }
    : { error: apiResponse.msg };
};

export const getErrorMessage = (error) => {
  return getDefaultErrorMessageForUnknownError(
    error.message ? error.message : error.error.message
  );
};

export const getErrorMessageFromErrorObj = (errorObj) => {
  const error = METAMASK_ERROR_LIST.filter(
    (error) => error.code === errorObj.code
  )[0];
  if (error) return error.message;
  return getDefaultErrorMessageForUnknownError(
    errorObj.message ? errorObj.message : errorObj.error.message
  );
};

const getDefaultErrorMessageForUnknownError = (errorMessage) => {
  return errorMessage.toString().length > 130
    ? "Error! Please try again"
    : errorMessage;
};

export const getWalletAddressStr = (walletAddress) => {
  return walletAddress.address.address
    ? walletAddress.address.address
    : walletAddress.address;
};

const getMobileOperatingSystem = () => {
  if (!navigator && !window) {
    return "unknown";
  }

  let userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|Macintosh|Mac|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
};

export const getAppStoreUrl = () => {
  const operatingSystem = getMobileOperatingSystem();
  if (operatingSystem === "iOS") {
    return APP_APPLE_STORE;
  }
  return APP_ANDROID_STORE;
};

export const getQueryParamsFromRouter = (router) => {
  const { query } = router;
  if (!query || Object.keys(query).length === 0) {
    return router.asPath.split("?")[1];
  } else {
    return query;
  }
};
