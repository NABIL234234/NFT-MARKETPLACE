import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";
import SingIn from "../../../src/assets/IMAGE/PLAY.SVG/nav/WhiteUser.svg";
import BurgerMenu from "../../../src/assets/IMAGE/HEADER/nav/burger.svg";

export default function Header() {
  return (
    <>
      <header className="font-mono">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center p-6">
            <div className="flex items-center gap-4">
              <img src={market} alt="market" />
              <NavLink to="/" className="nav_link text-xl smm:text-2xl">
                NFT Marketplace
              </NavLink>
            </div>
            <div></div>
            <div className="lg:flex items-center ml-20">
              <ul className="hidden lgg:flex justify-between gap-x-12 text-white font-semibold text-xl">
                <li>
                  <NavLink
                    to="/shop"
                    exact="true"
                
                    className="nav_link"
                  >
                    Marketplace
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/rankings"
                    exact="true"
             
                    className="nav_link"
                  >
                    Rankings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/wallet"
                    exact="true"
            
                    className="nav_link"
                  >
                    Connect a wallet
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="hidden lgg:flex items-center gap-4 bg-purple-500 p-4 rounded-xl transition ease-in-out delay-150  hover:bg-purple-700">
              <img className="w-[18%]" src={SingIn} alt="user" />
              <NavLink to="/login" className="text-white">
                Sign In
              </NavLink>
            </div>
            <div className="flex lgg:hidden">
              <img src={BurgerMenu} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
