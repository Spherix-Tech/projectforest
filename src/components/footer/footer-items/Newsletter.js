import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const Newsletter = () => {
  const postUrl = `/`;
  return (
    <div className="w-full flex flex-col">
        <h4 className="leading-10 font-light">Newsletter</h4>
      <h3 className=" leading-6 pt-8 pb-6">Get All The <br></br> Latest  News and Trends!</h3>

      <div className="flex flex-row items-center justify-center">
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Newsletter;
