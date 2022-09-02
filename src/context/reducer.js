import { getAuthInfoObj, setAuthInfo } from "../services/localStorage";
let { accessToken = null, user = null } = getAuthInfoObj()
  ? getAuthInfoObj()
  : {};
export const initialState = {
  user: user,
  token: accessToken,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_REGISTER" || "REQUEST_LOGIN" || "REQUEST_VERIFY_OTP":
      return {
        ...state,
        loading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        ...user,
        user: { email: action.payload.values.email },
        loading: false,
      };
    case "OTP_VERIFIED":
      return {
        ...state,
        ...user,
        user: { isOTPVerified: action.payload.isOTPVerified },
        loading: false,
      };
    case "WALLET_CONNECTED":
      return {
        ...state,
        ...user,
        user: { walletId: action.payload.walletId },
        loading: false,
      };
    case "LOGIN_SUCCESS":
      setAuthInfo(action.payload);
      return {
        ...state,
        user: action.payload.expires_in,
        token: action.payload.access_token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
