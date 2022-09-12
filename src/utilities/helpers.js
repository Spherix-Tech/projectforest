import { SUCCESS_CODE } from "../services/constants";

export const getDataOrErrorMessageObj = (apiResponse) => {
  return apiResponse.code === SUCCESS_CODE
    ? { data: apiResponse.data }
    : { error: apiResponse.msg };
};

export const getErrorMessage = (error) => {
  console.log(error);
  return getDefaultErrorMessageForUnknownError(
    error.message ? error.message : error.error.message
  );
};

const getDefaultErrorMessageForUnknownError = (errorMessage) => {
  return errorMessage.toString().length > 100
    ? "Error! Please try again"
    : errorMessage;
};

export const getWalletAddressStr = (walletAddress) => {
  console.log(walletAddress);
  return walletAddress.address.address
    ? walletAddress.address.address
    : walletAddress.address;
};
