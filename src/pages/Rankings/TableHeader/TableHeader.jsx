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
            <div className="flex justify-center items-center gap-[22px] sm:px-[40px] ">
              <div className="hidden mb:flex justify-center  w-[325px] pb-[14.5px]">
                <h3 className="text-white font-semibold">Today</h3>
              </div>
              <div className="flex mb:hidden justify-center  w-[325px] pb-[14.5px]">
                <h3 className="text-white font-semibold">1d</h3>
              </div>
              <div className="hidden mb:flex justify-center  w-[325px] pb-[14.5px]">
                <h3 className="text-stone-400 font-semibold">This Week</h3>
              </div>
              <div className="flex mb:hidden justify-center  w-[325px] pb-[14.5px]">
                <h3 className="text-stone-400 font-semibold">7d</h3>
              </div>
              <div className="hidden mb:flex justify-center  w-[325px] pb-[14.5px]">
                <h3 className="text-stone-400 font-semibold">This Month</h3>
              </div>
              <div className="flex mb:hidden justify-center  w-[325px] pb-[14.5px]">
                <h3 className="text-stone-400 font-semibold">30d</h3>
              </div>
              <div className="flex justify-center  w-[325px] pb-[14.5px]">
                <h3 className="text-stone-400 font-semibold">All Time</h3>
              </div>
            </div>
            <div className="Indicators w-full text-stone-500 border-2 border-zinc-600 py-[12px] px-[20px] rounded-3xl">
              <div className="flex gap-[12px] ">
                <img src={lattice} alt="lattice" />
                <h5>Artist</h5>
              </div>
              <div className="grid justify-center sm:justify-between gap-[100px] pl-[12px]">
                <h5 className="hidden lg:flex">Change</h5>
                <h5 className="hidden mb:flex">NFTs Sold</h5>
                <h5>Volume</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
