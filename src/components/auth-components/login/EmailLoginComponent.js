import { useContext, useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import IsLoadingHOC from "../../shared/IsLoadingHOC";
import { UserContext } from "../../../context/userContext";
import { useApi } from "../../../hooks/react-query/useApi";
import StatusCard from "../../shared/StatusCard";
import { getErrorMessage } from "../../../utilities/helpers";
import { loginWithEmail } from "../../../services/api/auth";

export const EmailLoginComponent = (props) => {
  const { setLoading } = props;
  const router = useRouter();
  const userContaxt = useContext(UserContext);

  const [walletConnectionResponseObj, setWalletConnectionResponseObj] =
    useState(null);

  const {
    callApi: verificationCodeApiCall,
    reset: loginApiCallReset,
    ...verificationCodeUseApi
  } = useApi(loginWithEmail);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .max(30, "Email too long!")
      .email("Please add valid email")
      .required("Email is required"),
    password: Yup.string()
      .max(30, "Password too long!")
      .required("Password is required"),
  });

  const login = async (formValues) => {
    loginApiCallReset();
    setLoading(true);
    try {
      const apiReq = { email: formValues.email, password: formValues.password };
      // const apiResponse = await loginWithEmail(apiReq);
      // const parsedResponse = getDataOrErrorMessageObj(apiResponse);
      console.log(apiReq);
      setTimeout(() => {
        router.push("/login/email");
      }, 2000);
      throw Error("parsedResponse error");
      // if (parsedResponse.error) {
      //   throw Error(parsedResponse.error);
      // } else {
      //   console.log("Logged In");
      // router.push("/profile");
      // }
    } catch (err) {
      console.log("ERR", err);
      const errorMessage = getErrorMessage(err);
      setWalletConnectionResponseObj({
        type: "error",
        message: errorMessage,
        imageName: "error-mark.svg",
        link: "/login/email",
      });
      setLoading(false);
    }
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
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(false);
                  login(values);
                }}
              >
                {({ values, isSubmitting }) => (
                  <Form>
                    <div className="font-semibold text-[12px] md:text-[17px] text-center">
                      Login with Email
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

                    <p id="countdown" className="text-center"></p>
                    <div className=" my-4 md:my-[1rem] w-full">
                      <button
                        type="submit"
                        className={
                          "btnPrimary w-full flex items-center justify-center rounded-[10px] h-[45px] md:h-[52px] text-[0.8rem] md:text-[1rem] " +
                          (isSubmitting ? "disabled" : "")
                        }
                        disabled={isSubmitting}
                      >
                        Login
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
export default IsLoadingHOC(EmailLoginComponent, "Verifying, please wait");
