import axios from "axios";
import { requestLogger, errorLogger, responseLogger } from "axios-logger";
import { isFunction } from "lodash";
import {
  MODE_DEBUG,
  STATUS_FORBIDDEN,
  STATUS_NOT_ALLOWED,
  STATUS_UNAUTHORIZED,
} from "../../constants";
import {
  ClientHttpError,
  NotSupportedStatusHttpError,
  RequestHttpError,
  ServerHttpError,
  UnauthorizedHttpError,
} from "./errorApi";

// config axios
export const isSuccessStatus = (status) => status >= 200 && status < 300;
export const isRedirectionStatus = (status) => status >= 300 && status < 400;
export const isClientStatus = (status) => status >= 400 && status < 500;
export const isServerStatus = (status) => status >= 500 && status < 600;

const statusUnauthorized = [
  STATUS_UNAUTHORIZED,
  STATUS_FORBIDDEN,
  STATUS_NOT_ALLOWED,
];
export const isUnauthorizedStatus = (status) =>
  statusUnauthorized.indexOf(status) >= 0;

export const getCustomAxios = ({ URL }) => {
  const customAxios = axios.create({
    baseURL: URL,
    validateStatus: isSuccessStatus,
    // transformRequest: [toSnakeCase],
    // transformResponse: [toCamelCase],
  });

  if (MODE_DEBUG) {
    customAxios.interceptors.request.use(requestLogger, errorLogger);
    customAxios.interceptors.response.use(responseLogger, errorLogger);
  }

  customAxios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      // Do something with request error
      let customError = null;
      customError = new RequestHttpError("invalid request", error);
      return Promise.reject(customError);
    }
  );

  // Add a response interceptor fsd
  customAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Do something with response error
      const newError = error;
      let customError = null;
      const status = newError.response.status;
      if (isUnauthorizedStatus(status))
        customError = new UnauthorizedHttpError("Unauthorized!", newError);
      else if (isClientStatus(status))
        customError = new ClientHttpError("Client error", newError);
      else if (isServerStatus(status))
        customError = new ServerHttpError("Error! Please try again", newError);
      else
        customError = new NotSupportedStatusHttpError(
          "Error! Please try again",
          newError
        );
      return Promise.reject(customError);
    }
  );

  return customAxios;
};

export const combineHeader = (header1, header2) => {
  return { ...header1, ...header2 };
};

const methods = ["get", "post", "put", "delete", "patch"];

export const getCustomCalls = (customAxios) => {
  const customCalls = {};
  for (const method of methods)
    customCalls[method] =
      ({ headers = {}, body = {}, ...params }) =>
      async (defaultHeaders = {}) =>
        customAxios.request({
          method: method,
          headers: combineHeader(defaultHeaders, headers),
          data: body,
          ...params,
        });

  return customCalls;
};

export const getCustomApi = (customCalls, preCallBack) => {
  const customApi = {};
  for (const [key, func] of Object.entries(customCalls))
    customApi[key] = isFunction(func)
      ? (params) => preCallBack(func(params))
      : func;
  return customApi;
};
