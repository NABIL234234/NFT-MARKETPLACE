import React from "react";

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
      <div className="flex items-center w-full bg-zinc-700  gap-[80px] rounded-xl py-[10px] px-[20px]">
        <div className="flex items-center:pl-[50px]">
          <div className="hidden absolute left-[15%] bg-zinc-800 pt-0.5 pb-0.5 px-2.5 rounded-full">
            <h6 className="text-stone-400">{number}</h6>
          </div>
          <div className="flex items-center gap-[20px] text-white text-xl font-semibold">
            <img className="w-[15%]" src={imgUrl} alt="imgUrl" />
            <h3>{nickName}</h3>
          </div>
        </div>

        <div className="flex justify-between gap-[180px] lg:gap-[202px] pl-[7.5%] text-white">
          <h5 className="text-green-500">{change}</h5>
          <h5 className="hidden lgg:flex">{sold}</h5>
          <h5>{volume}</h5>
        </div>
      </div>
    </>
  );
}
