import React from "react";
import { FaRegEye } from "react-icons/fa";

export default function See({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl  p-4 mt-6 mb:ml-auto  transition ease-in-out delay-15 text-white border-2 border-purple-500   hover:bg-purple-500 active:bg-purple-700 "
      >
        <FaRegEye />
       Все Nft
      </button>
    </>
  );
}
