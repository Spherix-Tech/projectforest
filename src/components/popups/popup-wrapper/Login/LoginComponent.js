import Link from "next/link";

function LoginComponent() {
  return (
    <div>
      <div className="absolute top-[2.25rem] right-[2.5rem] text-[12px] md:text-[15px]">
        <p className="font-medium">
          Not a member?
          <Link href="/signup">
            <a className="text-[#4599FC] underline font-semibold">
              {" "}
              Register Now
            </a>
          </Link>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-[1rem] lg:gap-[1.5rem]">
        <div className="font-semibold text-[12px] md:text-[17px]">
          Hello Again!{" "}
        </div>
        <div className="text-[9px] md:text-[14px]">
          Welcome Back You’ve been Missed!{" "}
        </div>
        <div className="my-[0.7rem] md:my-[1rem]">
          <button className="btnPrimary flex items-center justify-center rounded-[10px] h-[45px] md:h-[52px] w-[11rem] md:w-[15rem] text-[0.8rem] md:text-[1rem]">
            Login with Metamask
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
