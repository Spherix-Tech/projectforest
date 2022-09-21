import { METAMASK_ERROR_LIST, SUCCESS_CODE } from "../services/constants";

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
  console.log(errorObj);
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
