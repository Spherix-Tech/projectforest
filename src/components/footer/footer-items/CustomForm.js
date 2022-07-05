import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomForm = ({ status,  onValidated }) => {
  useEffect(() => {
    if (status === "success") {
      toast.dismiss();
      toast.success(
        "You did it! \n Thank you for subscribing. You shall hear from us soon."
      );
    }
    if (status === "error") {
      toast.dismiss();
      toast.error("Error occured please try again");
    }
    if (status === "sending") {
      toast.dismiss();
      toast("Please wait...");
    }
  }, [status]);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.length > 6 &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  return (
    < div className="flex flex-row w-full ">
      <ToastContainer
      
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 100000000050 }}
      />
      <input
        placeholder="Your Email Address"
        type="email"
        className="w-[75%] px-4 h-10 bg-transparent border-y-[1px] border-l-[1px] border-solid border-borderColor rounded-l-lg placeholder:px-2 placeholder:text-xs outline-none"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {status !== "sending" ? (
        <button onClick={handleSubmit} className="w-[25%] btnPrimary rounded-none h-10 rounded-r-lg text-xs flex flex-col items-center border-y-[1px] border-r-[1px] border-solid border-borderColor">Register</button>
      ) : (
        <button className="w-[25%] btnPrimary rounded-none h-10 rounded-r-lg text-xs flex flex-col items-center">Register</button>
      )}
    </div>
  );
};

export default CustomForm;
