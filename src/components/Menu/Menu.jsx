import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "./Menu.scss";

// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";

export default function Menu() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      x: 0,
      transition: { delay: 0.1, duration: 0.5 },
    });
  }, []);

  return (
    <div className="menu">
      <div className="menu_content">
        <ul>
          <li>
            <motion.div initial={{ x: -80 }} animate={controls}>
              <img
                className="absolute left-10 top-[10.5%]"
                src={market}
                alt="market"
              />
              <NavLink to="/" className="text-xl smm:text-2xl">
                NFT Marketplace
              </NavLink>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ x: -250 }}
              animate={controls}
              className="item"
            >
              <NavLink to="/shop" className="text-white">
                Marketplace
              </NavLink>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ x: -650 }}
              animate={controls}
              className="item"
            >
              <NavLink to="/rankings" className="text-white">
                Rankings
              </NavLink>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ x: -850 }}
              animate={controls}
              className="item"
            >
              <NavLink to="/wallet" className="text-white">
                Connect a wallet
              </NavLink>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ x: -1550 }}
              animate={controls}
              className="item"
            >
              <NavLink to="/login" className="text-white">
                Sign In
              </NavLink>
            </motion.div>
          </li>
        </ul>
      </div>
    </div>
  );
}
