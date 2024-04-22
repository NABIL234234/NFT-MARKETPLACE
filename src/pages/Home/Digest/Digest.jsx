import React from "react";
import SpaceMan from "../../../../src/assets/IMAGE/SECTION/SpaceMan.png";
import Message from "../../../../src/assets/IMAGE/SECTION/message.svg";

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

                <div className="mdd:absolute flex items-center justify-center gap-[12px] rounded-2xl text-white border-2 bg-purple-500 border-purple-500 p-3 right-0 top-0 bottom-0">
                  <img src={Message} alt="message" className="h-6 w-6" />
                  <a href="#" className="text-sm">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}