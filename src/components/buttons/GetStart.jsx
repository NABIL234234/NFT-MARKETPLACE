import React from "react";
import { GiRocket } from "react-icons/gi";

export default function GetStart({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex w-[100%] mdd:w-52 items-center justify-center gap-3 rounded-xl text-white hover:text-black bg-purple-500 p-4 md:p-4 mt-[30px] mdd:mt-6  transition ease-in-out delay-15  hover:bg-white  active:bg-purple-400"
      >
        <GiRocket />
        Get Started
      </button>
    </>
  );
}
