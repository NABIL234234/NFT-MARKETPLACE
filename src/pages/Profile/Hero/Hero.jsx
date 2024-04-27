import React from "react";
import "./Hero.css";
import GetStart from "../../../components/buttons/GetStart";


// images
import Anumakid from "../../../assets/IMAGE/SECTION/Anumakig_profile.png";
import Copy from "../../../assets/IMAGE/PLAY.SVG/nav/Copy.svg";
import Plus from "../../../assets/IMAGE/PLAY.SVG/nav/Plus.svg";
import Globe from "../../../assets/IMAGE/PLAY.SVG/nav/Globe.svg";
import Discord from "../../../assets/IMAGE/SECTION/Discord.svg";
import Youtube from "../../../assets/IMAGE/SECTION/Youtube.svg";
import Twitter from "../../../assets/IMAGE/SECTION/Twitter.svg";
import Instagram from "../../../assets/IMAGE/SECTION/instagram.svg";


export default function Hero() {
  return (
    <>
      <div className="HeaderChannel" />
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="absolute top-[393px] z-[1] ">
          <img src={Anumakid} alt="Anumakid" />
        </div>
        <div className="pt-[80px]">
          <div className="flex items-center">
            <h2 className=" text-white text-6xl font-semibold">Anumakid</h2>
            <div className="flex gap-[20px] ml-auto">
              <GetStart imgUrl={Copy} desc={0xc0e3b79c} />
              <div className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl text-white border-2 border-purple-500 p-2 mt-6  ">
                <img src={Plus} alt="Rocket" />
                <a href="#">Follow</a>
              </div>
            </div>
          </div>
          <div className="flex gap-[8px] sm:gap-[40px] smm:gap-[15px] mt-[30px] text-xl smm:text-2xl text-white">
            <div>
              <h2 className="font-semibold">250k+</h2>
              <h2 className="text-sm smm:text-xl">Volume</h2>
            </div>
            <div>
              <h2 className="font-semibold">50k+</h2>
              <h2 className="text-sm smm:text-xl">NFTs Sold</h2>
            </div>
            <div>
              <h2 className="font-semibold">3000k+</h2>
              <h2 className="text-sm smm:text-xl">Followers</h2>
            </div>
          </div>
          <div className="pt-[30px]">
            <h4 className="text-stone-400 text-lg">Bio</h4>
            <p className="text-white">
              The internet's friendliest designer kid.
            </p>
          </div>
          <div className="pt-[30px]">
            <h4 className="text-stone-400 text-lg">Links</h4>
            <div className="w-22%]  flex gap-[12px] pt-[5px]">
              <img src={Globe} alt="Globe" />
              <img src={Discord} alt="Discord" />
              <img src={Youtube} alt="Youtube" />
              <img src={Twitter} alt="Twitter" />
              <img src={Instagram} alt="Instagram" />
            </div>
          </div>
        </div>
        <div className="flex mt-[80px] ">
          <div className="flex justify-center items-center gap-[16px] w-[525px] pb-[14.5px]">
            <h3 className="text-white font-semibold">Created</h3>
            <div className="bg-zinc-400 w-[47px] pt-0.5 pb-0.5 px-2.5 rounded-full">
              <h5 className="text-white">300</h5>
            </div>
          </div>
          <div className="flex justify-center items-center  gap-[16px] w-[525px] pb-[14.5px]">
            <h3 className="text-stone-400 font-semibold">Owned</h3>
            <div className="bg-zinc-400 w-[37px] pt-0.5 pb-0.5 px-2.5 rounded-full">
              <h5 className="text-white">70</h5>
            </div>
          </div>
          <div className="flex justify-center items-center  gap-[16px] w-[525px] pb-[14.5px]">
            <h3 className="text-stone-400 font-semibold">Collection</h3>
            <div className="bg-zinc-400 w-[37px] pt-0.5 pb-0.5 px-2.5 rounded-full">
              <h5 className="text-white">70</h5>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
