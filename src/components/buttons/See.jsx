import React from "react";
import { FaRegEye } from "react-icons/fa";

export default function See({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl text-white border-2 border-purple-500  p-4 mt-6 mb:ml-auto "
      >
        <FaRegEye />
        See All
      </button>
    </>
  );
}
