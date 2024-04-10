import React from "react";

import RocketLaunch from '../../../src/assets/IMAGE/PLAY.SVG/RocketLaunch.png'

export default function GetStart() {
  return (
    <div className="flex w-52 items-center justify-center gap-3 rounded-xl text-white bg-purple-500 p-4 mt-6">
      <img src={RocketLaunch} alt="Rocket" />
      <a href="#">Get Started</a>
    </div>
  );
}
