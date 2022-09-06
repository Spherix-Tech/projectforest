import { getAuthInfoObj, setAuthInfo } from "../services/localStorage";
let { user = null } = getAuthInfoObj() ? getAuthInfoObj() : {};
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
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: { email: action.payload.values.email },
        loading: false,
      };
    case "OTP_VERIFIED":
      return {
        ...state,
        user: {
          email: state.user.email,
          isOTPVerified: action.payload.isOTPVerified,
        },
        loading: false,
      };
    case "WALLET_CONNECTED":
      let userObj = {
        email: state.user.email,
        isOTPVerified: state.user.isOTPVerified,
        walletId: action.payload.walletId,
      };
      setAuthInfo({ user: userObj });
      return {
        ...state,
        user: userObj,
        loading: false,
      };
    case "LOGIN_SUCCESS":
      userObj = {
        email: action.payload.email,
        walletId: action.payload.walletId,
      };
      setAuthInfo(userObj);
      return {
        ...state,
        user: userObj,
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
