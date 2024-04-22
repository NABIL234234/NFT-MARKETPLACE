import React from "react";

export default function Wallets({ imgUrl, desc }) {
  return (
    <>
      <div className="flex items-center justify-start w-full gap-5 mt-[20px] p-[12px] rounded-3xl border-2 border-purple-700 bg-zinc-700">
        <img src={imgUrl} alt="imgUrl" /> 
        <h4 className="text-white text-xl  mdd:text-2xl font-semibold">{desc}</h4>
      </div>
    </>
  );
}
