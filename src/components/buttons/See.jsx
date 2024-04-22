import React from "react";

import RocketRank from '../../../src/assets/IMAGE/SECTION/RocketRank.png'

export default function See() {
  return (
    <>
      <div className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl text-white border-2 border-purple-500  p-4 mt-6 mb:ml-auto ">
        <img src={RocketRank} alt="Rocket" />
        <a href="#">See All</a>
      </div>
    </>
  );
}
