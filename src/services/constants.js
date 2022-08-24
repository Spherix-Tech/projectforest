export const siteTabKeys = {
  siteOneUrlHash: "luckyhash",
  siteTwoUrlHash: "finaldigit",
};
// API
export const API_BASE_URL = "https://api.theluckyhash.com/api/";

// LOCAL STORAGE
export const LOCAL_STORAGE_AUTH_INFO = "LOCAL_STORAGE_AUTH_INFO";

export const MODE_DEBUG = true;

export const SUCCESS_CODE = 2000;
// 4xx client errors
export const STATUS_BAD_REQUEST = 400;
export const STATUS_UNAUTHORIZED = 401;
export const STATUS_PAYMENT_REQUIRED = 402;
export const STATUS_FORBIDDEN = 403;
export const STATUS_NOT_FOUND = 404;
export const STATUS_NOT_ALLOWED = 405;
export const STATUS_NOT_ACCEPTABLE = 406;
export const STATUS_SERVER_ERROR = 500;
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
