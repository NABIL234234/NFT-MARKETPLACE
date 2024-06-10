import React, { useState } from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/Menu";


// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";
import { FaUserAlt } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
                  <NavLink to="/shop" exact="true" className="nav_link">
                    Marketplace
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rankings" exact="true" className="nav_link">
                    Rankings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wallet" exact="true" className="nav_link">
                    Connect a wallet
                  </NavLink>
                </li>
              </ul>
            </div>
            <button
              onClick={() => navigate("/login")}
              className="hidden lgg:flex items-center gap-4 p-4 rounded-xl transition ease-in-out delay-15  text-white  hover:text-black bg-purple-500  hover:bg-white active:bg-purple-400"
            > 
              <FaUserAlt />
              Sign In
            </button>
            <div className="flex lgg:hidden">
              <div
                className={`burger-btn ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && <Menu onClose={closeMenu} />}
    </>
  );
}
