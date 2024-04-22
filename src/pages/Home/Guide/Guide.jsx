import React from "react";
import CardGuide from "../../../components/CardGuide/CardGuide";

// images
import Wallet from "../../../../src/assets/IMAGE/SECTION/wallet.png";
import CollectionCreate from "../../../../src/assets/IMAGE/SECTION/collectionCreate.png";
import Earning from "../../../../src/assets/IMAGE/SECTION/earning.png";

export default function Guide() {
  return (
    <>
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-5 font-mono">
          <div className="text-white">
            <h2 className="font-semibold text-5xl"> How it works</h2>
            <p className="text-xl pt-3">Find out how to get started</p>
          </div>
          <div className="flex justify-start flex-wrap mt-[48px] mb-[80px]">
            <CardGuide
              imgUrl={Wallet}
              title="Setup Your wallet"
              desc=" Set up your wallet of choice. Connect it to the Animarket by
            clicking the wallet icon in the top right corner."
            />
            <CardGuide
              imgUrl={CollectionCreate}
              title="Create Collection"
              desc="Upload your work and setup your collection. Add a description, social links and floor price."
            />
            <CardGuide
              imgUrl={Earning}
              title="Start Earning"
              desc="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
            />
          </div>
        </div>
      </div>
    </>
  );
}
