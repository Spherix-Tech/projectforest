import { API_BASE_URL } from "../../constants";
import { getAuthInfoObj, removeAuthInfo } from "../../localStorage";
import { getCustomApi, getCustomAxios, getCustomCalls } from "./customAxios";
import { UnauthorizedHttpError } from "./errorApi";
import { getHeadersAuthorization } from "./helpersApi";

export const URL = API_BASE_URL;

const customAxios = getCustomAxios({ URL });

const customCalls = getCustomCalls(customAxios);

// public methods
const apiCall = async (callback, header) => {
  const res = await callback(header);
  return res.data;
};

// privates methods
// const refreshTheToken = async () => {
//   const { refreshToken = null } = getAuthInfoObj();
//   const res = await apiCall(
//     customCalls.post({ url: refreshTokenURL }),
//     getHeadersAuthorization(refreshToken)
//   );
//   patchAuthInfo(res?.data);
// };

const apiCallAuth = async (callback) => {
  try {
    // get auth from local storage
    const { accessToken = null } = getAuthInfoObj();
    const res = await apiCall(callback, getHeadersAuthorization(accessToken));
    return res;
  } catch (err) {
    if (err instanceof UnauthorizedHttpError) {
      try {
        // refreshTheToken();
        const { accessToken = null } = getAuthInfoObj();
        const res = await apiCall(
          callback,
          getHeadersAuthorization(accessToken)
        );
        return res;
      } catch (err2) {
        if (err2 instanceof UnauthorizedHttpError) {
          removeAuthInfo();
          // CHECK @TODO
          // clearAuth();
        }
        throw err2;
      }
    }
    throw err;
  }
};

export const publicApiCall = getCustomApi(customCalls, apiCall);
export const privateApiCall = getCustomApi(customCalls, apiCallAuth);
