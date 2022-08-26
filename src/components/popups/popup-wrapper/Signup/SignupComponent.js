import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignupComponent() {
  // const [otpSent, setOtpSent] = useState(true);
  let validationSchema = Yup.object({
    otpSent: Yup.boolean(true).required(),
    // email: Yup.string().email().required("Email is required"),
    email: Yup.string().when("otpSent", {
      is: true,
      then: Yup.string().required("can't be blank"),
      otherwise: Yup.string(),
    }),
    password: Yup.string("").when("otpSent", {
      is: true,
      then: Yup.string().required("Password is required"),
      otherwise: Yup.string(),
    }),
    verificationCode: Yup.string("").when("otpSent", {
      is: (otpStatus) => {
        console.log(otpStatus);
        return otpStatus;
      },
      then: Yup.string().required("verificationCode is required"),
      otherwise: Yup.string(),
    }),
  });
  return (
    <div className="w-[65%]">
      <div className="flex flex-col justify-center items-center lg:gap-[1.5rem]">
        <div className="font-semibold pt-2 text-[12px] md:text-[17px]">
          Registration
        </div>
        <div className="w-full text-[9px] md:text-[14px]">
          <Formik
            initialValues={{ email: "", password: "", verificationCode: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              // if API response if true then
              // vali;
              console.log(values);
              setOtpSent(true);
              console.log(validationSchema);
              console.log(otpSent);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* {!otpSent ? ( */}
                <div>
                  <div className="flex my-4">
                    <Field
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      className="md:p-4 p-2 text-xs w-full rounded-lg"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" />
                  <div className="flex my-6">
                    <Field
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      className="md:p-4 p-2 text-xs w-full rounded-lg"
                    />
                  </div>
                  <ErrorMessage name="password" component="div" />
                </div>
                {/* ) : ( */}
                <div>
                  <div className="flex my-6 justify-between items-center">
                    <div className="w-[77%]">
                      <Field
                        type="text"
                        placeholder="Enter Verification Code"
                        name="verificationCode"
                        className="md:p-4 p-2 text-xs w-full rounded-lg"
                      />
                    </div>
                    <div className="w-[20%]">
                      <button className="btnPrimary flex items-center justify-center w-full rounded-[8px] h-[30px] md:h-[48px] text-[0.6rem] md:text-[0.8rem]">
                        Resend
                      </button>
                    </div>
                  </div>
                  <ErrorMessage name="verificationCode" component="div" />
                </div>
                {/* )} */}

                <div className="my-[0.7rem] md:my-[1rem] w-full">
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
  );
}

export default SignupComponent;
