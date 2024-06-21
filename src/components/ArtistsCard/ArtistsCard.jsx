import React from "react";
import "./ArtistsCard.css"


export default function ArtistsCard({
  number,
  imgUrl,
  nickName,
  change,
  sold,
  volume,
}) {
  return (
    <>
      <div className="ArtistCard w-full  bg-zinc-700  gap-[20px] rounded-xl py-[12px] px-[15px] mb-[15px]">
        <div className="flex ">
          <div className="hidden absolute left-[15%] bg-zinc-800 pt-0.5 pb-0.5 px-2.5 rounded-full">
            <h6 className="text-stone-400">{number}</h6>
          </div>
          <div className="flex items-center gap-[10px] text-white text-lg mb:text-xl font-medium">
            <img className="w-[40px] sm:w-[50px]" src={imgUrl} alt="imgUrl" />
            <h3>{nickName}</h3>
          </div>
        </div>

        <div className="grid justify-center mb:justify-between text-white pr-[20px]">
          <h5 className="text-green-500 hidden mb:flex">{change}</h5>
          <h5 className="hidden smm:flex">{sold}</h5>
          <h5 pl-0>{volume}</h5>
        </div>
      </div>
    </>
  );
}
