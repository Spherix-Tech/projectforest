export const siteTabKeys = {
  siteOneUrlHash: "luckyhash",
  siteTwoUrlHash: "finaldigit",
};
// API
export const API_BASE_URL = "https://uc.projectforest.io/";

// LOCAL STORAGE
export const LOCAL_STORAGE_AUTH_INFO = "LOCAL_STORAGE_AUTH_INFO";
export const COUNTDOWN_STORAGE_KEY = "COUNTDOWN_STORAGE_KEY";

export const MODE_DEBUG = true;

export const SUCCESS_CODE = 0;
// 4xx client errors
export const STATUS_BAD_REQUEST = 400;
export const STATUS_UNAUTHORIZED = 401;
export const STATUS_PAYMENT_REQUIRED = 402;
export const STATUS_FORBIDDEN = 403;
export const STATUS_NOT_FOUND = 404;
export const STATUS_NOT_ALLOWED = 405;
export const STATUS_NOT_ACCEPTABLE = 406;
export const STATUS_SERVER_ERROR = 500;
// MetaMask Error codes
export const METAMASK_ERROR_LIST = [
  {
    code: -32002,
    message:
      "allet confirmation request is already pending. Please approve from wallet.",
  },

  { code: -4001, message: "The request has been rejected by the user." },
  {
    code: "ACTION_REJECTED",
    message: "The request has been rejected by the user.",
  },

  {
    code: -4200,
    message: "The requested method is not supported by this provider.",
  },

  { code: -4900, message: "You are not connected to any chain." },

  { code: -4901, message: "You are not connected to this chain." },

  {
    code: -32700,
    message:
      "An error has been received by the wallet. Your request is incomplete.",
  },

  {
    code: -32600,
    message:
      "An error has been received by the wallet. Your request is invalid.",
  },

  {
    code: -32601,
    message:
      " An error has been received by the wallet. Your request does not exist / is not available.",
  },

  { code: -32602, message: "The method of your request is invalid." },

  { code: -32603, message: "The wallet has received an internal error." },

  { code: -32000, message: "The information provided by the user is invalid." },

  {
    code: -32001,
    message: "The particular resource was not found.",
  },

  {
    code: -32003,
    message:
      "Your transaction has been rejected. Please check your transaction details and try again.",
  },

  { code: -32004, message: "The method used is not supported on this wallet." },

  { code: -32005, message: "The request limit has been exceeded." },
];
// LOCAL VALIDATION ERROR CODES
export const REQUIRED = 1;
export const EMAIL_INVALID = 2;
export const PASSWORD_MISMATCH = 3;
export const PASSWORD_INVALID = 4;
export const USERNAME_INVALID = 5;

export const allLanguagesArr = [
  { langKey: "en", langTitle: "English", flagImageName: "english-icon.svg" },
  { langKey: "tr", langTitle: "Turkish", flagImageName: "turkish-icon.svg" },
];
// API ERRORS
export const responseList = [
  { code: 2001, message: "failedToEdit" },
  { code: 7777, message: "serverError" },
  { code: 6666, message: "incorrectDetails" },
  { code: 3001, message: "accountNotExist" },
  { code: 3002, message: "trc20Wrong" },
  { code: 3003, message: "accountNotMeet" },
  {
    code: 3004,
    message: "passwordRequirments",
  },
  {
    code: 3005,
    message: "diffPasswords",
  },
  { code: 4000, message: "systemError" },
  { code: 4001, message: "accountEmpty" },
  { code: 4002, message: "passwordEmpty" },
  { code: 4003, message: "trc20Empty" },
  { code: REQUIRED, message: "required" },
  { code: EMAIL_INVALID, message: "emailInvalid" },
  { code: PASSWORD_MISMATCH, message: "passwordMismatch" },
  { code: PASSWORD_INVALID, message: "passwordInvalid" },
  { code: USERNAME_INVALID, message: "usernameInvalid" },
];
export const translateErrorMessageObj = (errorObj, t) => {
  let localErrorObj = JSON.parse(JSON.stringify(errorObj));
  localErrorObj.message = t("common.errors." + localErrorObj.message);
  return localErrorObj;
};
export const getErrorObjByCode = (errorCode, t) => {
  let errorObj = responseList.find((e) => e.code == errorCode);
  // JSON stringify for deep copy
  return errorObj
    ? translateErrorMessageObj(errorObj, t)
    : translateErrorMessageObj({ code: 0, message: "general" });
};
