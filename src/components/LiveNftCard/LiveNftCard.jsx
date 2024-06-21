import React from "react";
import "./LiveNftCard.scss";
import { motion } from "framer-motion";
import { FcOk } from "react-icons/fc";

export default function LiveNftCard({
  imgUrl,
  title,
  avatar,
  user,
  dollarPrice,
  ethereumPrice,
}) {
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
            <span className="pt-2 pb-2">{user}</span>
          </div>
          <div className="flex justify-between">
            <div className="card-price">
              <div className="flex flex-col">
                <span>Цена ($)</span>
                <span>{dollarPrice}</span>
              </div>
              <span>ETH {ethereumPrice}</span>
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
