import React, { useState, useEffect } from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserAlt, FaBars } from "react-icons/fa"; // Импортируем FaBars
import Menu from "../../components/Menu/Menu";
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token);
    if (token) {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        setUserId(storedUserId);
      }
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("accessToken");
      setIsAuthenticated(!!token);
      if (token) {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
          setUserId(storedUserId);
        }
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
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
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
    setUserId(null);
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
                  <NavLink to="/connectWallet" exact="true" className="nav_link">
                    Connect a wallet
                  </NavLink>
                </li>
                <li>
                  {isAuthenticated ? (
                    <button
                      onClick={handleLogout}
                      className="nav_link flex items-center gap-2"
                    >
                      Logout
                    </button>
                  ) : (
                    <NavLink to="/login" exact="true" className="nav_link flex items-center gap-2">
                      <FaUserAlt />
                      Login
                    </NavLink>
                  )}
                </li>
                <li>
                  {isAuthenticated && userId && (
                    <NavLink to={`/profile/${userId}`} exact="true" className="nav_link flex items-center gap-2">
                      <FaUserAlt />
                      Profile
                    </NavLink>
                  )}
                </li>
              </ul>
              <button className="lgg:hidden burger-btn" onClick={toggleMenu}>
                <FaBars className="text-white text-2xl" /> {/* Заменяем FaUserAlt на FaBars */}
              </button>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && <Menu menuOpen={menuOpen} closeMenu={closeMenu} />}
    </>
  );
}
