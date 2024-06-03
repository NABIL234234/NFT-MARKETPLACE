import React from "react";
import GetStart from "../../../components/buttons/GetStart";
import { useNavigate } from "react-router-dom";

// images
import spaceWalking from "../../../../src/assets/IMAGE/SECTION/SPACE WALKING.png";
import avatarDiscover from "../../../../src/assets/IMAGE/SECTION/Avatar Placeholder.png";

export default function Discover() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/createNft");
    } else {
      navigate("/login", { state: { from: "/createNft" } });
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="mdd:flex pt-2 lgg:pt-16 justify-between items-center gap-[34px]">
          <div className="text-white">
            <div className="mdd:max-w-md font-semibold text-4xl lg:text-6xl">
              <h2>Discover Digital Art & Collect NFTs</h2>
            </div>
            <div className="max-w-lg font-normal text-lg pt-7 mb-[20px]">
              <p>
                NFT Marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
            </div>

            <div className="block mdd:hidden bg-zinc-700 rounded-3xl mt-[20px] w-[100%] lgg:w-[45%]">
              <div className="w-full">
                <img
                  className="w-full object-cover"
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

            <div className="flex justify-center smm:justify-start">
              <GetStart onClick={handleGetStarted} />
            </div>

            <div className="flex justify-between gap-[8px] sm:gap-[12px] smm:gap-[15px] mt-[6%] mdd:mt-[12%] text-xl smm:text-2xl">
              <div>
                <h2 className="font-semibold">240k+</h2>
                <h2 className="text-sm smm:text-xl">Total Scale</h2>
              </div>
              <div>
                <h2 className="font-semibold">100k+</h2>
                <h2 className="text-sm smm:text-xl">Auctions</h2>
              </div>
              <div>
                <h2 className="font-semibold">240k+</h2>
                <h2 className="text-sm smm:text-xl">Artist</h2>
              </div>
            </div>
          </div>
          <div className="hidden mdd:block bg-zinc-700 rounded-3xl mt-[20px] lgg:w-[45%]">
            <div className="w-full">
              <img
                className="w-full object-cover"
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
