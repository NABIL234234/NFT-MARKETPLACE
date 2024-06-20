import React from "react";
import "./CardCreators.css";
import { motion } from "framer-motion";

export default function CardCreators({ number, imgUrl, nickName, ETH, onClick }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} onClick={onClick} className="CardCreators">
      <div className="bg-zinc-700 flex lg:flex-col self-stretch flex-wrap justify-center items-center p-5 gap-[10px] rd:gap-5 rounded-3xl font-mono">
        <div className="relative">
          <div className="hidden absolute right-32 bg-zinc-800 pt-0.5 pb-0.5 px-2.5 rounded-full">
            <h6 className="text-stone-400">{number}</h6>
          </div>
          <div className="w-[122px]">
            <img className="rounded-xl" src={imgUrl} alt={nickName} />
          </div>
        </div>
        <div>
          <h3 className="flex justify-center text-white text-2xl md:text-xl">
            {nickName}
          </h3>
          <div className="flex gap-2">
            <h4 className="text-stone-400">Total Sales:</h4>
            <h4 className="text-white">{ETH}</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
