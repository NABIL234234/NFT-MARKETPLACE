import React from "react";
import GetStart from "../../../components/buttons/GetStart";
import "./Orbit.css";

// images
// import Orbitians from "../../../assets/IMAGE/SECTION/Orbitians.png";
import Orbitian from "../../../assets/IMAGE/SECTION/Orbitian.png";
import Globe from "../../../assets/IMAGE/PLAY.SVG/nav/Globe.svg";
import ArrowRight from "../../../assets/IMAGE/SECTION/ArrowRight.svg";

export default function Orbit() {
  return (
    <>
      <div className="Orbitians" />

      <div className="mt-[40px]">
        <div className="max-w-6xl mx-auto px-5 font-mono flex">
          <div className="max-w-[400px]">
            <div>
              <h2 className="text-white font-semibold text-5xl">
                The Orbitians
              </h2>
              <p className="text-stone-400 text-lg">Minted on Sep 30, 2022</p>
            </div>
            <div className="flex pl:hidden justify-center items-center  backdrop-blur-md bg-zinc-700  w-[295px] h-[234px] rounded-xl mt-[20px]">
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
                <div className="flex justify-center ">
                  <GetStart imgUrl={ArrowRight} desc="Place Bid" />
                </div>
              </div>
            </div>
            <div className="mt-[30px]">
              <h4 className="text-stone-400 text-lg">Created By</h4>
              <div className="flex items-center gap-[12px]">
                <img src={Orbitian} alt="" />
                <h4 className="text-white font-semibold">Orbitian</h4>
              </div>
            </div>
            <div className="mt-[30px]">
              <h4 className="text-stone-400 text-lg">Description</h4>
              <p className="max-w-[500px] text-white">The Orbitians</p>
              <p className="max-w-[500px] text-white pb-[20px]">
                is a collection of 10,000 unique NFTs on the Ethereum
                blockchain,
              </p>
              <p className="max-w-[500px] text-white pb-[20px]">
                There are all sorts of beings in the NFT Universe. The most
                advanced and friendly of the bunch are Orbitians.
              </p>
              <p className="max-w-[500px] text-white">
                They live in a metal space machines, high up in the sky and only
                have one foot on Earth. These Orbitians are a peaceful race, but
                they have been at war with a group of invaders for many
                generations. The invaders are called Upside-Downs, because of
                their inverted bodies that live on the ground, yet do not know
                any other way to be. Upside-Downs believe that they will be able
                to win this war if they could only get an eye into Orbitian
                territory, so they've taken to make human beings their target.
              </p>
            </div>
            <div className="mt-[30px]">
              <h4 className="text-stone-400 text-lg font-semibold">Details</h4>
              <div className="flex items-center gap-[12px] mt-[10px]">
                <img src={Globe} alt="Globe" />
                <h4 className="text-white font-semibold">View on Etherscan</h4>
              </div>
              <div className="flex items-center gap-[12px]  mt-[10px]">
                <img src={Globe} alt="Globe" />
                <h4 className="text-white font-semibold">View Original</h4>
              </div>
            </div>
            <div className="mt-[30px]">
              <h4 className="text-stone-400 text-lg font-semibold">Tags</h4>
              <div className="block md:flex gap-[20px] ">
                <div className="flex justify-center w-[150px] text-white text-xl font-semibold bg-zinc-700 rounded-3xl mt-[20px]  py-[8px] px-[30px]">
                  <a href="#">Animals</a>
                </div>
                <div className="flex justify-center w-[175px] text-white text-xl font-semibold bg-zinc-700 rounded-3xl mt-[20px] py-[8px] px-[30px]">
                  <a href="#">illustration</a>
                </div>
                <div className="flex justify-center w-[110px] text-white text-xl font-semibold bg-zinc-700 rounded-3xl mt-[20px] py-[8px] px-[30px]">
                  <a href="#">Moon</a>
                </div>
                <div className="flex justify-center w-[110px] text-white text-xl font-semibold bg-zinc-700 rounded-3xl mt-[20px] py-[8px] px-[30px]">
                  <a href="#">Moon</a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden pl:flex justify-center items-center backdrop-blur-md bg-zinc-700  w-[295px] h-[234px] rounded-xl smm:ml-auto px-[50px] py-[50px]">
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
              <div className="flex justify-center ">
                <GetStart imgUrl={ArrowRight} desc="Place Bid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
