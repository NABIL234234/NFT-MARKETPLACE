import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

// images

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu_content">
        <ul>
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
