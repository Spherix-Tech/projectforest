import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string("Enter your email").required("Email is required"),
  password: Yup.string("Enter your password").required("password is required"),
});
function SignupComponent() {
  const [otpSent, setOtpSent] = useState(false);
  return (
    <div className="w-[65%]">
      <div className="flex flex-col justify-center items-center gap-[1rem] lg:gap-[1.5rem]">
        <div className="font-semibold text-[12px] md:text-[17px]">
          Registration
        </div>
        <div className="w-full text-[9px] md:text-[14px]">
          <Formik
            initialValues={{ email: "", password: "", verification_code: "" }}
            validationSchema={validationSchema}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              // if API response if true then
              vali;
              setOtpSent(true);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                {!otpSent ? (
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
                    <div className="flex my-6">
                      <Field
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="p-4 text-xs w-full rounded-lg"
                      />
                    </div>
                    <ErrorMessage name="password" component="div" />
                  </div>
                ) : (
                  <div>
                    <div className="flex my-6 justify-between items-center">
                      <div className="w-[77%]">
                        <Field
                          type="text"
                          placeholder="Enter Verification Code"
                          name="verification_code"
                          className="p-4 text-xs w-full rounded-lg"
                        />
                      </div>
                      <div className="w-[20%]">
                        <button className="btnPrimary flex items-center justify-center rounded-[8px] h-[30px] md:h-[48px] text-[0.6rem] md:text-[0.8rem]">
                          Resend
                        </button>
                      </div>
                    </div>
                    <ErrorMessage name="verification_code" component="div" />
                  </div>
                )}

                <div className="my-[0.7rem] md:my-[1rem] w-full">
                  <button
                    type="submit"
                    className="btnPrimary  w-full flex items-center justify-center rounded-[10px] h-[45px] md:h-[52px] text-[0.8rem] md:text-[1rem]"
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
