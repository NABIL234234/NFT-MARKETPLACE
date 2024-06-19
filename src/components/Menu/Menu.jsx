import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { FaUserAlt, FaShoppingCart, FaEthereum } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { PiRanking } from "react-icons/pi";
import { IoWalletSharp } from "react-icons/io5";
import "./Menu.scss";

export default function Menu({ closeMenu }) {
  const controls = useAnimation();
  const [menuOpen, setMenuOpen] = useState(true); // Initial state set to true
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    controls.start({
      y: 0,
      x: 0,
      transition: { delay: 0.1, duration: 0.5 },
    });

    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token);
    if (token) {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        setUserId(storedUserId);
      }
    }
  }, [controls]);

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

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    closeMenu();
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
    setUserId(null);
    navigate("/login");
    closeMenu();
    setMenuOpen(false);
  };

  return (
    <div className="menu">
      <div className="menu_content">
        <ul>
          <li>
            <motion.div
              initial={{ x: -80 }}
              animate={controls}
              className="flex items-center gap-2"
            >
              <FaEthereum className="text-purple-500 text-3xl" />
              <NavLink
                to="/"
                className="text-xl smm:text-2xl"
                onClick={handleLinkClick}
              >
                NFT Marketplace
              </NavLink>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ x: -250 }}
              animate={controls}
              className="hover:bg-purple-500"
            >
              <NavLink
                to="/shop"
                className="text-white flex items-center gap-3"
                onClick={handleLinkClick}
              >
                <FaShoppingCart />
                Marketplace
              </NavLink>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ x: -650 }}
              animate={controls}
              className="hover:bg-purple-500"
            >
              <NavLink
                to="/rankings"
                className="text-white flex items-center gap-3"
                onClick={handleLinkClick}
              >
                <PiRanking />
                Rankings
              </NavLink>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ x: -850 }}
              animate={controls}
              className="hover:bg-purple-500"
            >
              <NavLink
                to="/wallet"
                className="text-white flex items-center gap-3"
                onClick={handleLinkClick}
              >
                <IoWalletSharp />
                Connect a wallet
              </NavLink>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ x: -950 }}
              animate={controls}
              className="hover:bg-purple-500"
            >
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="nav_link flex items-center gap-2 text-white"
                >
                  <CiLogout />
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  exact="true"
                  className="nav_link flex items-center gap-2 text-white"
                  onClick={handleLinkClick}
                >
                  <FaUserAlt />
                  Login
                </NavLink>
              )}
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ x: -1250 }}
              animate={controls}
              className="hover:bg-purple-500"
            >
              {isAuthenticated && userId && (
                <NavLink
                  to={`/profile/${userId}`}
                  className="nav_link flex items-center gap-2 text-white"
                  onClick={handleLinkClick}
                >
                  <FaUserAlt />
                  Profile
                </NavLink>
              )}
            </motion.div>
          </li>
        </ul>
      </div>
    </div>
  );
}
