import React from "react";
import CardMoreNft from "../../../components/CardMoreNft/CardMoreNft";
import See from "../../../components/buttons/See";

// images

import Galaxy from "../../../../src/assets/IMAGE/SECTION/Galaxy.png";
import MoonDancer from "../../../../src/assets/IMAGE/PLAY.SVG/nav/MoonDancer.png";
import Odena from "../../../../src/assets/IMAGE/SECTION/Odena.png";
import Nebula from "../../../../src/assets/IMAGE/PLAY.SVG/nav/Nebula.png";
import Astro from "../../../../src/assets/IMAGE/SECTION/Astro.png";
import Spaceone from "../../../../src/assets/IMAGE/PLAY.SVG/nav/spaceone.png";

export default function MoreNft() {
  return (
    <>
      <div className="pt-40">
        <div className="max-w-6xl mx-auto px-5 font-mono">
          <div>
            <div className="flex items-center pb-16">
              <div className="font-semibold text-white">
                <h2 className="text-4xl">Discover More NFTs</h2>
                <p className="text-xl pt-3">Explore new trending NFTs</p>
              </div>
              <See />
            </div>

            <div className="sm:flex justify-between">
              <CardMoreNft
                imgUrl={Galaxy}
                title="Distant Galaxy"
                avatar={MoonDancer}
                user="MoonDancer"
                price="1.63 ETH"
                Bid="0.33 wETH"
              />
              <CardMoreNft
                imgUrl={Odena}
                title="Life On Edena"
                avatar={Nebula}
                user="NebulaKid"
                price="1.63 ETH"
                Bid="0.33 wETH"
              />
              <CardMoreNft
                imgUrl={Astro}
                title="AstroFiction"
                avatar={Spaceone}
                user="Spaceone"
                price="1.63 ETH"
                Bid="0.33 wETH"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
