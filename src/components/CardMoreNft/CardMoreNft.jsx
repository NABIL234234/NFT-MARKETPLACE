import React from "react";
import "./CardMoreNft.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdSell } from "react-icons/md";

export default function CardMoreNft({
  id,
  imgUrl,
  title,
  avatar,
  user,
  price,
  onIconClick,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      className="Card"
    >
      <div className="w-full">
        <Link to={`/info/${id}`}>
          <div className="w-full h-[40vh] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={imgUrl}
              alt="Galaxy"
            />
          </div>
        </Link>

        <div className="text-white p-4 relative">
          <Link to={`/profile/${id}`}>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <div className="flex items-center mb-2">
              <img src={avatar} alt="Moon" />
              <h5 className="">{user}</h5>
            </div>
          </Link>
          <div className="flex justify-between mb-2 mt-5 ">
            <div>
              <h5 className="text-stone-400">Price $</h5>
              <h5 className="">{price}</h5>
            </div>
            <div className="absolute top-[17%] left-[90%]">
              <MdSell
                className="w-[22px] cursor-pointer"
                onClick={onIconClick}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
