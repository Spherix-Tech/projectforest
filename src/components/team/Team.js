import React from "react";
import PageGradientTitle from "../shared/PageGradientTitle";
import { getAllTeamData } from "../../services/data-files/TeamData";

const teamData = getAllTeamData();

const Team = () => {
  return (
    <div>
      <PageGradientTitle
        title="Our Team"
        className="mt-[2rem] md:mt-[3rem] uppercase"
      />
      <p className="page-description mt-4">
        To achieve this feat, we assembled a well-rounded team of nature
        enthusiasts and environmentalists who could guide, take charge and put
        together this project that introduces the concept of environmentalism to
        the Web-3 space whilst securing sustainability and carbon neutrality and
        simultaneously rewards players for their time invested in enjoying the
        game.
      </p>
      <br></br>
      <p className="page-description">
        Project Forest is a Web3 lifestyle app built from the ground up with
        social-fi and game-fi elements. Each time a virtual plant is minted as
        an NFT by a player in Project Forest, a percentage of the proceeds is
        donated to one of our partnered NGOs who will then use these proceeds to
        plant real-life trees in areas that need reforestation measures. This
        enables users to have a positive impact on the environment through the
        NFT-enabled ecosystem of Project Forest.
      </p>
      <div className="flex flex-row justify-center flex-wrap gap-10 py-16">
        {teamData.map((e, i) => {
          return (
            <div key={i} className="flex flex-col justify-center items-center bg-white px-8 py-5 rounded-2xl border-[2px] border-[#dada9c] shadow-lg">
              <div className="rounded-full outline-[#dada9c] outline outline-1 outline-offset-8  "><div className=" bg-[#434343] bg-opacity-10 w-[145px] h-[145px] rounded-full"></div></div>
              <p className="text-labelTextColor font-semibold pt-4">{e.name}</p>
              <p className="text-[#5ACDEF] text-xs pt-1">{e.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
