import ImageComponent from "./ImageComponent";
function AuthCard({ component }) {
  return (
    <div className="flex justify-center items-center auth-card relative ">
      <div className="min-h-[450px] flex justify-center items-center w-[350px] h-[280px] xs:w-[450px] sm:w-[450px] xs:h-[350px] md:w-[750px] md:h-[450px] lg:w-[900px] lg:h-[500px] 2xl:w-[1320px] 2xl:h-[620px] rounded-[1rem] xl:rounded-[2rem] custom-shadow sha">
        {/* Left side */}
        <div className="hidden md:block flex-1 how-section-bg h-[98.5%] ml-[8px] rounded-[1rem] xl:rounded-[2rem]">
          <ImageComponent
            src="/assets/authentication/left-side-img.webp"
            className="h-full w-[330px] m-auto"
          />
        </div>
        <div className="flex-1 flex justify-center items-center m-auto text-labelTextColor">
          {component}
        </div>
      </div>
    </div>
  );
}

export default AuthCard;
