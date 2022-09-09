import { SUCCESS_CODE } from "../services/constants";

export const getDataOrErrorMessageObj = (apiResponse) => {
  return apiResponse.code === SUCCESS_CODE
    ? { data: apiResponse.data }
    : { error: apiResponse.msg };
};

export const getErrorMessage = (error) => {
  console.log(error);
  return error.message ? error.message : error.error.message;
};
