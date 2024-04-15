import React from "react";

export default function Wallets({ imgUrl, desc }) {
  return (
    <>
      <div className="flex items-center w-[270px] gap-5 mt-[20px] p-[12px] pl-[35px] rounded-3xl border-2 border-purple-700 bg-zinc-700">
        <img src={imgUrl} alt="imgUrl" /> 
        <h4 className="text-white text-lg font-semibold">{desc}</h4>
      </div>
    </>
  );
}
