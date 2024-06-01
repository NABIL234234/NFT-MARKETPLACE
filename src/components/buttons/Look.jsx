import React from "react";
import { FaRegEye } from "react-icons/fa";

export default function See({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl text-white border-2 border-white  p-4 mt-6 "
      >
        <FaRegEye />
        Look at Nft
      </button>
    </>
  );
}
