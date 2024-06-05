import React from "react";
import "./CardMoreNft.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiFillFire } from "react-icons/ai";

export default function CardMoreNft({ imgUrl, title, avatar, user, price }) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        className="Card"
      >
        <Link to="/info">
          <div className="bg-zinc-800 rounded-3xl w-full">
            <div className="w-full">
              <img className="w-full object-cover" src={imgUrl} alt="Galaxy" />
            </div>
            <div className="text-white p-6">
              <div className="">
                <h4 className="text-xl">{title}</h4>
                <div className="flex gap-2 pt-[5px]">
                  <img src={avatar} alt="Moon" />
                  <h5 className="">{user}</h5>
                </div>
              </div>
              <div className="flex pt-[25px]">
                <div>
                  <h5 className="text-stone-400">Price $</h5>
                  <h5 className="">{price}</h5>
                </div>
                <div className="ml-auto pt-6">
                  <AiFillFire />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
