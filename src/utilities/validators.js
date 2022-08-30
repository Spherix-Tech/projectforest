import { isEmpty } from "lodash";

export const TEXT_ERRORS = {
  REQUIRED: "Please fill the required inputs",
  EMAIL_NOT_VALID: "Email is not valid",
  PASSWORD_NOT_EQUAL: "Passwords do not match",
  PASSWORD_NOT_STRONG: "Password is not strong",
  NETWORK_ERROR_METAMASK: (network) =>
    `Please switch to ${
      network === "Polygon 137" ? "Polygon Mainnet" : "Polygon Testnet"
    }`,
};

export const validateEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export const validatePassword = (password, option = {}) => {
  const {
    shouldHaveLower = false,
    shouldHaveUpper = false,
    shouldHaveNumber = false,
    minLength = 6,
  } = option;

  const lowerCaseLetters = /[a-z]/g;
  if (shouldHaveLower && !password.match(lowerCaseLetters)) {
    return false;
  }

  const upperCaseLetters = /[A-Z]/g;
  if (shouldHaveUpper && !password.match(upperCaseLetters)) {
    return false;
  }

  const numbers = /[0-9]/g;
  if (shouldHaveNumber && !password.match(numbers)) {
    return false;
  }

  if (password.length < minLength) {
    return false;
  }

  return true;
};

export const validateInput = (input, length) => {
  if (input.length > length) {
    return true;
  }
  return false;
};

export const assertNotEmpty = (obj) => {
  const empty = Object.values(obj).filter((e) => isEmpty(e));
  if (!isEmpty(empty)) throw Error(TEXT_ERRORS.REQUIRED);
};

export const assertValidEmail = (email) => {
  if (!email) throw Error(TEXT_ERRORS.REQUIRED);
  if (!validateEmail(email)) throw Error(TEXT_ERRORS.EMAIL_NOT_VALID);
};

export const assertValidPassword = (password, confirmPassword) => {
  if (!password || !confirmPassword) throw Error(TEXT_ERRORS.REQUIRED);
  if (password !== confirmPassword) throw Error(TEXT_ERRORS.PASSWORD_NOT_EQUAL);
  if (!validatePassword(password)) throw Error(TEXT_ERRORS.PASSWORD_NOT_STRONG);
};

export const isAllowedNetwork = (network, allowedNetworks = []) => {
  if (!isEmpty(allowedNetworks)) {
    if (!allowedNetworks.some((e) => e.ID === network)) return false;
  }
  return true;
};

export const assertAllowedNetwork = (network, allowedNetworks = []) => {
  return true;
  //if (!isAllowedNetwork(network, allowedNetworks)) throw Error(TEXT_ERRORS.NETWORK_ERROR_METAMASK(`${allowedNetworks[0].NAME} ${allowedNetworks[0].ID}`));
};
