import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";


// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";


export default function Menu() {
  return (
    <div className="menu">
      <div className="menu_content">
        <ul>
          <li>
          <img className="absolute left-9 top-[9.5%]"  src={market} alt="market" />
            <NavLink to="/" className=" text-xl smm:text-2xl">
              NFT Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="text-white">
              Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink to="/rankings" className="text-white">
              Rankings
            </NavLink>
          </li>
          <li>
            <NavLink to="/wallet" className="text-white">
              Connect a wallet
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="text-white">
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
