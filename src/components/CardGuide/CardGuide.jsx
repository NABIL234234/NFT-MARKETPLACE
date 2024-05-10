import React from "react";
import './CardGuide.css'

export default function CardGuide({imgUrl, title, desc}) {
  return (
    <>
      <div className="CardGuide justify-center text-center bg-zinc-700 rounded-2xl	text-white p-[30px] pb-[30px]" >
        <div className="flex justify-center items-center">
          <img src={imgUrl} alt="wallet" />
        </div>
        <div>
          <h3 className="text-[22px] pt-[20px] font-semibold">{title}</h3>
          <p className="text-[16px] pt-[10px]">
           {desc}
          </p>
        </div>
      </div>
    </>
  );
}