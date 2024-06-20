import React, { useState } from "react";
import "./CardCategories.scss";
import { motion } from "framer-motion";

export default function CardCategories({ imgUrl, secondImgUrl, desc }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
      className="CardCategories self-stretch"
    >
      <div className="w-full">
        <div className="flex justify-center items-center ">
          <img className="relative z-0 w-[100%]" src={imgUrl} alt="art" />
          <img className="absolute z-10 " src={secondImgUrl} alt="brush" />
        </div>
        <div className="bg-zinc-700 rounded-b-lg p-5">
          <h3 className="text-white text-xl font-medium">{desc}</h3>
        </div>
      </div>
      {isClicked && (
        <div className="development-icon animate">В процессе разработки</div>
      )}
    </motion.div>
  );
}
