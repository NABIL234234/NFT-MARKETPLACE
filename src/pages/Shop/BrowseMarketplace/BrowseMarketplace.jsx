import React from "react";
import Title from "../../../components/Title/Title";

// images
import Search from "../../../assets/IMAGE/PLAY.SVG/nav/search.svg";

export default function BrowseMarketplace() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div>
          <Title
            mainText="Browse Marketplace"
            miniText=" Browse through more than 50k NFTs on the NFT Marketplace."
          />
          <div className="relative">
            <img
              className="absolute  top-[56%] left-[88%] rdd:left-[90%] rd:left-[92%] smm:left-[93%] sm:left-[94%] mdd:left-[95%] lgg:left-[96%] w-[22px]"
              src={Search}
              alt="search"
            />
            <input
              className="w-full p-[13px] rounded-2xl bg-zinc-700 text-white outline-none pr-[60px] mt-[30px]"
              type="text"
              placeholder="Search your favourite NFTs"
            />
          </div>
          <div className="flex mt-[80px] ">
            <div className="flex justify-center items-center gap-[16px] w-[525px] pb-[14.5px]">
              <h3 className="text-white font-semibold">NFTs</h3>
              <div className="bg-zinc-400 w-[47px] pt-0.5 pb-0.5 px-2.5 rounded-full">
                <h5 className="text-white">300</h5>
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
      </div>
    </>
  );
}
