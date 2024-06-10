import React, { useState, useEffect } from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Menu from "../../components/Menu/Menu";

// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthentication = () => {
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token);
  };

  useEffect(() => {
    checkAuthentication();

    const handleStorageChange = () => {
      checkAuthentication();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    navigate("/login");
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
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <NavLink to="/profile/1" className="nav_link">
                  <FaUserAlt />
                  Мой Профиль
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="hidden lgg:flex items-center gap-4 p-4 rounded-xl transition ease-in-out delay-15 text-white hover:text-black bg-purple-500 hover:bg-white active:bg-purple-400"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="hidden lgg:flex items-center gap-4 p-4 rounded-xl transition ease-in-out delay-15 text-white hover:text-black bg-purple-500 hover:bg-white active:bg-purple-400"
              >
                <FaUserAlt />
                Sign In
              </button>
            )}
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
