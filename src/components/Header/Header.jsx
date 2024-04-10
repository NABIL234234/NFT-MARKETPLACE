import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";
import SingIn from "../../../src/assets/IMAGE/PLAY.SVG/nav/User.svg";

export default function Header() {
  return (
    <>
      <header className="font-mono">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between p-6">
            <div className="flex items-center gap-4">
              <img src={market} alt="market" />
              <NavLink to="/" className="nav_link text-2xl">
                NFT Marketplace
              </NavLink>
            </div>
            <div className="flex items-center ml-20">
              <ul className="flex justify-between gap-x-12 text-white font-semibold text-xl">
                <li>
                  <NavLink
                    to="/shop"
                    exact
                    activeClassName
                    className="nav_link"
                  >
                    Marketplace
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/rankings"
                    exact
                    activeClassName
                    className="nav_link"
                  >
                    Rankings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/wallet"
                    exact
                    activeClassName
                    className="nav_link"
                  >
                    Connect a wallet
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4 bg-purple-500 p-4 rounded-xl">
              <img src={SingIn} alt="user" />
              <a className="text-white" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>

      <main></main>
    </>
  );
}
