import React from "react";
import "./CardCreators.css";

export default function CardCreators({ number, imgUrl, nickName, ETH }) {
  return (
    <>
      <div className="CardCreators">
        <div className="bg-zinc-700 flex lg:flex-col flex-wrap items-center p-5 gap-[10px] rd:gap-5 rounded-3xl font-mono flex-row">
          <div className="relative">
            <div className="absolute right-32 bg-zinc-800 pt-0.5 pb-0.5 px-2.5 rounded-full">
              <h6 className="text-stone-400">{number}</h6>
            </div>
            <div className="w-[122px]">
              <img className=" rounded-xl" src={imgUrl} alt="Keep" />
            </div>
          </div>
          <div>
            <h3 className="flex justify-center text-white text-2xl md:text-xl">
              {nickName}
            </h3>
            <div className="flex gap-2">
              <h4 className="text-stone-400">Total Sales:</h4>
              <h4 className="text-white">{ETH}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
