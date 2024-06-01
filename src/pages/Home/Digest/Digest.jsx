import React from "react";
import SpaceMan from "../../../../src/assets/IMAGE/SECTION/SpaceMan.png";

import Subscribe from "../../../components/buttons/Subscribe";

export default function Digest() {
  return (
    <div className="pt-[40px]">
      <div className="max-w-6xl mx-auto font-mono ">
        <div className="flex flex-col mdd:flex-row gap-[30px] mdd:gap-[80px] bg-zinc-700 rounded-3xl p-[60px]  mb-[80px]">
          <div>
            <img src={SpaceMan} alt="spaceman" />
          </div>
          <div>
            <div className="text-white pt-[14px]">
              <h2 className="max-w-[400px] text-4xl font-bold">
                Join our weekly Digest
              </h2>
              <p className="max-w-[370px] pt-[10px]">
                Get Exclusive Promotions & Updates Straight To Your Inbox.
              </p>
            </div>

            <div className="relative mt-8 mb-[40px]">
              <div className=" flex flex-col gap-2 mdd:relative w-full h-[56px]">
                <input
                  className="bg-white p-4 rounded-3xl w-full h-full z-0 focus:outline-none mdd:pr-[140px]"
                  placeholder="Enter your email here"
                  type="email"
                />

               <Subscribe />
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}