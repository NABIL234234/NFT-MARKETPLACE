import React from "react";
import "./TableHeader.css";

// images

import lattice from "../../../assets/IMAGE/PLAY.SVG/nav/lattice.svg";

export default function TableHeader() {
  return (
    <>
      <div className="pt-[40px]">
        <div className="max-w-6xl mx-auto px-5 font-mono">
          <div>
            <div className="flex justify-center items-center gap-[22px] sm:px-[40px] "></div>
            <div className="Indicators w-full text-stone-500 border-2 border-zinc-600 py-[12px] px-[20px] rounded-3xl">
              <div className="flex gap-[12px] ">
                <img src={lattice} alt="lattice" />
                <h5>Авторы</h5>
              </div>
              <div className="grid justify-center sm:justify-between gap-[100px] pl-[12px]">
                <h5 className="hidden smm:flex"></h5>
                <h5 className="hidden smm:flex">NFT продано</h5>
                <h5>Обьем</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
