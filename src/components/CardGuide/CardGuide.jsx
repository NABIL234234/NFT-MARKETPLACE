import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CardGuide.css";

export default function CardGuide({ imgUrl, title, desc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="CardGuide justify-center text-center bg-zinc-700 rounded-2xl text-white p-[30px] pb-[30px] "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center items-center">
        <img
          src={imgUrl}
          alt="wallet"
          className="w-[200px] h-[200px] rounded-full" 
        />
      </div>
      <div>
        <h3 className="text-[22px] pt-[20px] font-semibold">{title}</h3>
        <p className="text-[16px] pt-[10px]">{desc}</p>
      </div>
    </motion.div>
  );
}