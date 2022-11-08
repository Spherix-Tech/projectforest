function StartShapedStages({ className, mainTitle, description, number }) {
  return (
    <div className="inline-flex w-full justify-start items-center">
      <div className="">
        <div className="inline-flex relative justify-start items-center mt-[30px]">
          <div className="triangle1"></div>
          <div className="absolute left-[45%] text-[#434343] font-bold text-2xl">
            ?
          </div>
          <div className="triangle2"></div>
        </div>
        <div className="text-center text-[#797979] mt-[12px] text-xs">
          Claim!
        </div>
      </div>
      <div className="w-full h-[36px] bg-[#DEDCA8] ml-[-25px] mr-[-25px] relative ">
        <div className="grid h-[36px] grid-cols-11 content-center">
          <div className="col-span-3"></div>
          <div>
            <div className="inline-flex relative justify-start items-center mt-[110px] 2xl:mt-[58px]">
              <div className="triangle1"></div>
              <div className="absolute left-[45%] text-[#434343] font-bold text-2xl">
                ?
              </div>
              <div className="triangle2"></div>
            </div>
            <div className="text-center text-[#797979] mt-[12px] text-xs">
              Visit 4 more Friends to invite to claim the NFT
            </div>
          </div>
          <div className="col-span-3"></div>
          <div>
            <div className="inline-flex relative justify-start items-center mt-[110px] 2xl:mt-[58px]">
              <div className="triangle1"></div>
              <div className="absolute left-[45%] text-[#434343] font-bold text-2xl">
                ?
              </div>
              <div className="triangle2"></div>
            </div>
            <div className="text-center text-[#797979] mt-[12px] text-xs">
              Claim!
            </div>
          </div>
          <div className="col-span-3"></div>
        </div>
      </div>
      <div className="inline-flex relative justify-start items-center">
        <div className="triangle1"></div>
        <div className="absolute left-[45%] text-[#434343] font-bold text-2xl">
          ?
        </div>
        <div className="triangle2"></div>
        {/* <div className="text-center text-[#797979] mt-[12px] text-xs">Claim!</div> */}
      </div>
    </div>
  );
}

export default StartShapedStages;
