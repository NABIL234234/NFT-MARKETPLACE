import React from "react";
import "./LiveNftCard.scss";
import { motion } from "framer-motion";
import { FcOk } from "react-icons/fc";

export default function LiveNftCard({ imgUrl, title, avatar, user, price }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="card-life"
    >
      <div className="card-container">
        <div className="image-container">
          <img className="card-image" src={imgUrl} alt="NFT Image" />
        </div>
        <div className="card-content">
          <h4 className="card-title">{title}</h4>
          <div className="card-user">
            <img src={avatar} alt="User Avatar" className="avatar-image" />
            <span>{user}</span>
          </div>
          <div className="flex justify-between">
            <div className="card-price">
              <span>Price ($)</span>
              <span>{price}</span>
            </div>
            <div className="card-bid">
              <FcOk />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
