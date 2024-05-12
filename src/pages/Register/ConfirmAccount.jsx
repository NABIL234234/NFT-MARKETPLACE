import React from "react";
import { NavLink } from "react-router-dom";
import Inputs from "../../components/inputs/Inputs";

// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";

export default function ConfirmAccount() {
  return (
    <>
      <div>
        <div className="max-w-6xl px-5 mx-auto font-mono">
          <div className=" flex flex-col items-center gap-[30px]">
            <div className="flex items-center gap-4">
              <img src={market} alt="market" />
              <NavLink to="/" className="nav_link text-xl smm:text-2xl">
                NFT Marketplace
              </NavLink>
            </div>
            <div className="flex flex-col justify-center items-center gap-[15px]  max-w-[400px]">
              <h2 className="text-3xl font-bold">Account Verification</h2>
              <p className="max-w-[300px] self-center">
              Which <span className="text-purple-500">Nft Marketplace</span> account are you having trouble logging into?
              </p>
            </div>
            <div>
              <input type="text" placeholder="Email address" className="flex justify-center items-center w-[320px] p-[5px] rounded-sm " />
            </div>
            <div className="flex flex-col">
              <button>Next</button>
              <button>back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
