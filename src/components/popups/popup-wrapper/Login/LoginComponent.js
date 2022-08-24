import Link from "next/link";

function LoginComponent() {
  return (
    <div>
      <div className="absolute top-[2.25rem] right-[2.5rem] text-[15px]">
        <p className="font-medium">
          Not a member?
          <Link href="/register">
            <a className="text-[#4599FC] underline font-semibold">
              {" "}
              Register Now
            </a>
          </Link>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center"></div>
    </div>
  );
}

export default LoginComponent;
