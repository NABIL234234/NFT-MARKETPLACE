import React from "react";
import { IoMdMailUnread } from "react-icons/io";

export default function Subscribe() {
  return (
    <>
      <button className="mdd:absolute flex items-center justify-center gap-[12px] rounded-2xl text-white hover:text-black border-2 bg-purple-500 hover:bg-white border-purple-500 hover:border-black  transition ease-in-out delay-15 p-3 right-0 top-0 bottom-0">
        <IoMdMailUnread />
        Subscribe
      </button>
    </>
  );
}
