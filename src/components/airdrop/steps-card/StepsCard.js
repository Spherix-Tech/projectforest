import ImageComponent from "../../shared/ImageComponent";

function StepsCard({ className, mainTitle, description, number }) {
  return (
    <div className={"w-full rounded-2xl p-4 relative " + className}>
      <div className="flex justify-start items-center gap-2">
        <div className="mt-[-2rem]">
          <ImageComponent src={`/assets/airdrop/${number}.svg`} />
        </div>
        <div className="flex flex-col gap-[8px] justify-start items-start mt-[1rem] text-white w-full">
          <div className="font-bold text-[0.8rem] md:text-[1.5rem] 2xl:text-[2rem]">
            {mainTitle}
          </div>
          <div className="text-sm font-light">{description}</div>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className="min-w-[40px] text-[#363333] h-[40px] rounded-full font-medium border-2 z-10 border-[#CFE8E9] flex justify-center items-center bg-[#CFE8E9]">
          <div className="mt-[7%]">Go</div>
        </div>
      </div>
    </div>
  );
}

export default StepsCard;
