import { getAuthInfoObj, setAuthInfo } from "../services/localStorage";
setAuthInfo("Present");
let { accessToken = null, user = null } = getAuthInfoObj()
  ? getAuthInfoObj()
  : {};
export const initialState = {
  user: user,
  token: accessToken,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      // console.log(action.payload);
      setAuthInfo(action.payload);
      return {
        ...initialState,
        user: action.payload.expires_in,
        token: action.payload.access_token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
