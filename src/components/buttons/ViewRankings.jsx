import React from "react";
import { FaRankingStar } from "react-icons/fa6";

export default function ViewRankings({onClick}) {
  return (
    <>
      <button  onClick={onClick} className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl text-white border-2 border-purple-500  p-4 mt-6 md:ml-auto  transition ease-in-out delay-15  hover:bg-purple-500 active:bg-purple-700">
        <FaRankingStar />
        View Rankings
      </button>
    </>
  );
}
