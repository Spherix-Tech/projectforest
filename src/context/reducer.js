import {
  getAuthInfoObj,
  removeAuthInfo,
  setAuthInfo,
} from "../services/localStorage";
let user = getAuthInfoObj() || {};
export const initialState = {
  user: user,
  loading: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_REGISTER" || "REQUEST_LOGIN" || "REQUEST_VERIFY_OTP":
      return {
        ...state,
        loading: true,
      };
    case "OTP_SENT":
      return {
        ...state,
        user: {
          email: action.payload.values.email,
          password: action.payload.values.password,
          verify_code: action.payload.values.verificationCode,
        },
        loading: false,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: {
          email: action.payload.values.email,
          password: action.payload.values.password,
        },
        loading: false,
      };
    case "OTP_VERIFIED":
      return {
        ...state,
        user: {
          email: state.user.email,
          password: state.user.password,
          verify_code: action.payload.verify_code,
          isOTPVerified: action.payload.isOTPVerified,
        },
        loading: false,
      };
    case "WALLET_CONNECTED":
      let userObj = {
        email: state.user.email,
        isOTPVerified: state.user.isOTPVerified,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
      setAuthInfo(userObj);
      return {
        ...state,
        user: userObj,
        loading: false,
      };
    case "LOGIN_SUCCESS":
      userObj = {
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
      setAuthInfo(userObj);
      return {
        ...state,
        user: userObj,
        loading: false,
      };
    case "LOGOUT":
      removeAuthInfo();
      return {
        ...state,
        user: null,
        accessToken: null,
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
