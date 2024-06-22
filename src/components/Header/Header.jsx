import React, { useState, useEffect } from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa"; // Импортируем FaBars и FaTimes
import Menu from "../../components/Menu/Menu";
import { FaEthereum } from "react-icons/fa";

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
              <FaEthereum className="text-purple-500 text-3xl" />
              <NavLink to="/" className="nav_link text-xl smm:text-2xl">
                NFT Marketplace
              </NavLink>
            </div>
            <div></div>
            <div className="lg:flex items-center ml-20">
              <ul className="hidden lgg:flex justify-between gap-x-12 text-white font-semibold text-xl">
                <li>
                  <NavLink to="/shop" exact="true" className="nav_link">
                    Магазин
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rankings" exact="true" className="nav_link">
                    Рейтинги
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wallet" exact="true" className="nav_link">
                    Кошелек
                  </NavLink>
                </li>
                <li>
                  {isAuthenticated ? (
                    <button
                      onClick={handleLogout}
                      className="nav_link flex items-center gap-2"
                    >
                      Выйти
                    </button>
                  ) : (
                    <NavLink to="/login" exact="true" className="nav_link flex items-center gap-2">
                      <FaUserAlt />
                      Войти
                    </NavLink>
                  )}
                </li>
                <li>
                  {isAuthenticated && userId && (
                    <NavLink to={`/profile/${userId}`} exact="true" className="nav_link flex items-center gap-2">
                      <FaUserAlt />
                      Профиль
                    </NavLink>
                  )}
                </li>
              </ul>
              <button className={`lgg:hidden burger-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className={`line ${menuOpen ? 'line1' : ''}`}></span>
                <span className={`line ${menuOpen ? 'line2' : ''}`}></span>
                <span className={`line ${menuOpen ? 'line3' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && <Menu closeMenu={closeMenu} />}
    </>
  );
}
