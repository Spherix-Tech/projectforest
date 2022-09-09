import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import IsLoadingHOC from "../../shared/IsLoadingHOC";
import { UserContext } from "../../../context/userContext";
import {
  checkVerificationCodeApi,
  sendVerificationCodeApi,
} from "../../../services/api/auth";
import { useApi } from "../../../hooks/react-query/useApi";
import StatusCard from "../../shared/StatusCard";
import { getDataOrErrorMessageObj } from "../../../utilities/helpers";

export const SignupComponent = (props) => {
  const { setLoading } = props;
  const router = useRouter();
  const userContaxt = useContext(UserContext);
  const [walletConnectionResponseObj, setWalletConnectionResponseObj] =
    useState(null);

  const {
    callApi: verificationCodeApiCall,
    reset: verificationCodeApiCallReset,
    ...verificationCodeUseApi
  } = useApi(sendVerificationCodeApi);

  const {
    callApi: checkVerificationCodeApiCall,
    reset: checkVerificationCodeApiCallReset,
    ...checkVerificationCodeUseApi
  } = useApi(checkVerificationCodeApi);

  let validationSchema = Yup.object({
    otpSent: Yup.boolean(),
    email: Yup.string().when("otpSent", {
      is: false,
      then: Yup.string()
        .email()
        .required("Email is required")
        .test(
          "len",
          "Email Length must be between 10-40 characters",
          (val) => val && val.length >= 10 && val.length <= 40
        ),
      otherwise: Yup.string(),
    }),
    password: Yup.string().when("otpSent", {
      is: false,
      then: Yup.string()
        .required("Password is required")
        .test(
          "len",
          "Password Length must be between 8-20 characters",
          (val) => val && val.length >= 8 && val.length <= 20
        ),
      otherwise: Yup.string(),
    }),
    verificationCode: Yup.string().when("otpSent", {
      is: true,
      then: Yup.string()
        .test(
          "len",
          "Verification code must be less than 8 characters",
          (val) => !val || (val && val.toString().length < 8)
        )
        .required("Verification Code is required"),
      otherwise: Yup.string(),
    }),
  });

  const verifyOTP = async (formValues) => {
    checkVerificationCodeApiCallReset();
    const apiReq = {
      account: formValues.email,
      verify_code: formValues.verificationCode,
    };
    const apiResponse = await checkVerificationCodeApi(apiReq);
    console.log(apiResponse);
    const parsedResponse = getDataOrErrorMessageObj(apiResponse);
    console.log("RES", parsedResponse);
    if (parsedResponse.error) {
      setWalletConnectionResponseObj({
        type: "error",
        message: parsedResponse.error,
        imageName: "error-mark.svg",
        link: "/signup",
      });
    } else {
      console.log("VALUES", formValues);
      userContaxt.dispatch({
        type: "OTP_VERIFIED",
        payload: {
          isOTPVerified: true,
          verify_code: formValues.verificationCode,
        },
      });
      router.push("/signup/wallet");
    }
  };

  const sendVerificationCode = async (formValues) => {
    verificationCodeApiCallReset();
    const apiReq = { type: 1, account: formValues.email };
    const apiResponse = await sendVerificationCodeApi(apiReq);
    console.log(apiResponse);
    const parsedResponse = getDataOrErrorMessageObj(apiResponse);
    console.log(parsedResponse);
    if (parsedResponse.error) {
      setWalletConnectionResponseObj({
        type: "error",
        message: parsedResponse.error,
        imageName: "error-mark.svg",
        link: "/signup",
      });
    } else {
      console.log("VALUES", formValues);
      userContaxt.dispatch({
        type: "OTP_SENT",
        payload: { values: formValues },
      });
      formValues.otpSent = true;
    }
  };

  const resendOTP = () => {
    console.log("RESEND");
  };

  return (
    <>
      {!walletConnectionResponseObj ? (
        <div className="w-[70%]">
          <div className="flex flex-col justify-center items-center gap-[1rem] lg:gap-[1.5rem]">
            <div className="w-full text-[9px] md:text-[14px]">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  verificationCode: "",
                  otpSent: false,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(false);
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 1500);
                  if (values.otpSent && values.otpSent !== "") {
                    verifyOTP(values);
                  } else {
                    sendVerificationCode(values);
                  }
                }}
              >
                {({ values, isSubmitting }) => (
                  <Form>
                    {!values.otpSent ? (
                      <>
                        <div className="font-semibold text-[12px] md:text-[17px] text-center">
                          Registration
                        </div>
                        <div>
                          <div className="flex my-4">
                            <Field
                              type="email"
                              placeholder="Enter Email"
                              name="email"
                              className="p-4 text-xs w-full rounded-lg"
                            />
                          </div>
                          <ErrorMessage name="email" component="div" />
                          <div className="flex my-4">
                            <Field
                              type="password"
                              placeholder="Enter Password"
                              name="password"
                              className="p-4 text-xs w-full rounded-lg"
                            />
                          </div>
                          <ErrorMessage name="password" component="div" />
                        </div>
                      </>
                    ) : (
                      // This part is shown after otp is sent
                      <ResedOTP onClick={() => resendOTP} />
                    )}
                    <div className=" my-4 md:my-[1rem] w-full">
                      <button
                        type="submit"
                        className={
                          "btnPrimary  w-full flex items-center justify-center rounded-[10px] h-[45px] md:h-[52px] text-[0.8rem] md:text-[1rem] " +
                          (isSubmitting ? "disabled" : "")
                        }
                        disabled={isSubmitting}
                      >
                        Next
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[80%]">
          <StatusCard
            walletConnectionResponseObj={walletConnectionResponseObj}
            onNextClick={() => setWalletConnectionResponseObj(null)}
          />
        </div>
      )}
    </>
  );
};
export default IsLoadingHOC(SignupComponent, "Registratring, please wait");

export function ResedOTP(props) {
  return (
    <>
      <div className="font-semibold text-[12px] md:text-[17px] text-center">
        Registration
      </div>
      <div>
        <div className="flex my-6 justify-between items-center">
          <div className="w-[77%]">
            <Field
              type="text"
              placeholder="Enter Verification Code"
              name="verificationCode"
              className="p-4 text-xs w-full rounded-lg"
            />
          </div>
          <div className="w-[20%]">
            <button
              type="button"
              onClick={props.onClick()}
              className="btnPrimary flex items-center justify-center rounded-[10px] w-full h-[45px] md:h-[47px] text-[10px] md:text-[10px] lg:text-[12px]"
            >
              Resend
            </button>
          </div>
        </div>
        <ErrorMessage name="verificationCode" component="div" />
      </div>
    </>
  );
}
