import React from "react";
import Look from "../../../components/buttons/Look";

import shroomieMini from "../../../../src/assets/IMAGE/PLAY.SVG/nav/shroomie-mini.png";
import { useNavigate } from "react-router";


export default function Mashroom() {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/shop");
    } else {
      navigate("/login");
    }
  };


  return (
    <>
      <div className="mt-20 pb-[40px] sm:pb-[60px] bg-[url('./src/assets/IMAGE/SECTION/mushroom-root.png')] bg-no-repeat bg-center bg-cover relative z-[1]">
        <div className="max-w-6xl mx-auto px-5 font-mono ">
          <div className="h-full">
            <div className="absolute bg-gradient-to-t from-purple-500 inset-x-0 bottom-0 h-5/6 z-[-1]" />
            <div className=" md:flex pt-[40px] md:pt-[380px] ">
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

              <Look onClick={handleGetStarted} />
              </div>

              <div className="backdrop-blur-md bg-black/30 w-[295px] h-[144px] flex justify-center items-center rounded-xl  md:ml-auto mt-[30px] md:mt-auto">
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
