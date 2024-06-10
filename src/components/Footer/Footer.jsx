import React from "react";
import { NavLink } from "react-router-dom";

// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import Border from "../../../src/assets/IMAGE/SECTION/Border.svg";


import Subscribe from "../buttons/Subscribe";

export default function Footer() {
  return (
    <>
      <footer className="p-[20px] bg-zinc-700 ">
        <div className="max-w-6xl mx-auto font-mono">
          <div className="block md:flex justify-between pt-[40px]">
            <div>
              <div className="flex items-center gap-4">
                <img src={market} alt="market" />
                <NavLink to="/" className="nav_link text-3xl">
                  NFT Marketplace
                </NavLink>
              </div>

              <div className="text-stone-400 pt-[30px] text-xl">
                <h4 className="max-w-[380px]">
                  NFT marketplace UI created with Anima for Figma.
                </h4>
                <h4 className="pt-[20px]">Join our community</h4>
              </div>
              <div className="flex gap-[12px] pt-[15px] text-3xl text-purple-500">
              <a href="https://www.instagram.com/magic_nftmarcketplace?igsh=ZmplY3c0ZTI4eWI5" className="text-3xl"><CiInstagram /></a>
              <a href="https://t.me/magic_nft_marketplace" className="text-3xl"><FaTelegramPlane /></a>
              </div>
            </div>
            <div className="mt-[30px] text-xl  flex flex-col gap-[12px]  text-white">
              <div>
                <h3 className="font-bold">Explore</h3>
                <ul className="mt-[22px]">
                  <li>
                    <NavLink to="/shop" exact="true" className="nav_link">
                      Marketplace
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <NavLink to="/rankings" exact="true" className="nav_link">
                      Rankings
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <NavLink to="/wallet" exact="true" className="nav_link">
                      Connect Wallet
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-white pt-[30px]">
                <h2 className=" text-4xl font-bold">Join our weekly Digest</h2>
                <p className="max-w-[370px] pt-[15px] text-stone-400">
                  Get Exclusive Promotions & Updates Straight To Your Inbox.
                </p>
              </div>

              <div className="relative mt-8 mb-[40px]">
                <div className=" flex flex-col gap-2 mdd:relative w-full h-[56px]">
                  <input
                    className="bg-white p-4 rounded-3xl w-full h-full z-0 focus:outline-none mdd:pr-[140px]"
                    placeholder="Enter your email here"
                    type="email"
                  />
                <Subscribe />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[30px]">
            <img src={Border} alt="border" />

            <h3 className="text-stone-400 pt-[20px] pb-[40px]">
              Ⓒ NFT Market. Use this template freely.
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
