import React from "react";
import GetStart from "../../../components/buttons/GetStart";

// images
import spaceWalking from "../../../../src/assets/IMAGE/SECTION/SPACE WALKING.png";
import avatarDiscover from "../../../../src/assets/IMAGE/SECTION/Avatar Placeholder.png";
import RocketLaunch from '../../../assets/IMAGE/PLAY.SVG/nav/RocketLaunch.png'

export default function Discover() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="flex pt-16 justify-between gap-[14px]">
          <div className="text-white">
            <div className="max-w-md font-semibold text-4xl lg:text-6xl">
              <h2>Discover Digital Art & Collect NFTs</h2>
            </div>
            <div className="max-w-lg font-semibold text-lg pt-7">
              <p>
                NFT Marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
            </div>
            <GetStart imgUrl={RocketLaunch} desc="Get Started" />
            <div className="flex gap-8 pt-7 text-2xl">
              <div>
                <h2 className="font-semibold">240k+</h2>
                <h2>Total Scale</h2>
              </div>
              <div>
                <h2 className="font-semibold">100k+</h2>
                <h2>Auctions</h2>
              </div>
              <div>
                <h2 className="font-semibold">240k+</h2>
                <h2>Artist</h2>
              </div>
            </div>
          </div>
          <div className="bg-zinc-700 rounded-3xl ">
            <div>
              <img
                src={spaceWalking}
                alt="space"
              />
            </div>
            <div className="text-white p-4">
              <h3 className="text-xl pt-2">Space Walking</h3>
              <div className="flex gap-2 pt-5">
                <img src={avatarDiscover} alt="Avatar" />

                <h4>Anumakid</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
