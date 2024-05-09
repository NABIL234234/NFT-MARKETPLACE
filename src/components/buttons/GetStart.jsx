import React from "react";

export default function GetStart({ imgUrl, desc }) {
  return (
    <div className="flex w-[100%] mdd:w-52 items-center justify-center gap-3 rounded-xl text-white bg-purple-500 p-4 md:p-4 mt-[30px] mdd:mt-6">
      <img className="w-[8%]" src={imgUrl} alt="Rocket" />
      <a href="#">{desc}</a>
    </div>
  );
}
