import React from "react";
import { FaRegEye } from "react-icons/fa";

export default function See({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl p-4 mt-6 transition ease-in-out delay-15  text-white hover:text-black border-2 border-white hover:bg-white active:bg-purple-400"
      >
        <FaRegEye />
        Look at Nft
      </button>
    </>
  );
}
