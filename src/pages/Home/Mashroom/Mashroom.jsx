import React from "react";
import RocketRank from "../../../../src/assets/IMAGE/SECTION/RocketRank.png";
import shroomieMini from "../../../../src/assets/IMAGE/PLAY.SVG/nav/shroomie-mini.png";

export default function Mashroom() {
  return (
    <>
      <div className="mt-20 h-[640px] bg-[url('./src/assets/IMAGE/SECTION/mushroom-root.png')] bg-no-repeat bg-center bg-cover relative z-[1]">
        <div className="max-w-6xl mx-auto font-mono ">
          <div className="h-full">
            <div className="absolute bg-gradient-to-t from-purple-500 inset-x-0 bottom-0 h-5/6 z-[-1]" />
            <div className="flex pt-[380px] ">
              <div className="z-1">
                <div className="flex items-center gap-3 bg-zinc-800 w-[157px] h-[44px] py-5 px-[25px] rounded-[20px]">
                  <img src={shroomieMini} alt="srm" />
                  <h3 className="text-white">Shroomie</h3>
                </div>

                <div>
                  <h2 className="text-white text-[51px] font-semibold">
                    Magic Mashrooms
                  </h2>
                </div>

                <div className="flex w-48 items-center justify-center gap-3 rounded-xl text-white border-2 border-purple-500  bg-white  p-4 mt-6 ">
                  <img src={RocketRank} alt="Rocket" />
                  <a className="text-black font-semibold" href="#">See All</a>
                </div>
              </div>

              <div className="backdrop-blur-md bg-black/30 w-[295px] h-[144px] flex justify-center items-center rounded-xl ml-auto mt-auto">
                <div className="text-white">
                  <div>
                    <h5 className="text-xs pb-[10px]">Auction ends in:</h5>
                  </div>
                  <div className="flex gap-[10px]">
                    <div>
                      <h3 className="text-4xl font-bold">59</h3>
                      <div className="pt-[10px]">Hours</div>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold">:</h3>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold">59</h3>
                      <div className="pt-[10px]">Minutes</div>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold">:</h3>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold">59</h3>
                      <div className="pt-[10px]">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
