import React, { useState } from "react";
import "./CardCollection.scss";
import { motion } from "framer-motion";

export default function CardCollection({
  imgUrl,
  imgUrl2,
  imgUrl3,
  CollectionName,
  avatarUrl,
  nickName,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000); 
  };

  return (
    <>
      <div className="CardCollection pt-4 sm:pt-16">
        <div onClick={handleClick}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <img src={imgUrl} alt="DOG" />
            {isClicked && <div className="development-icon animate"></div>}
          </motion.div>
          <div className="flex pt-4 gap-4  ml-[12px] rdd:ml-0 ">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={imgUrl2} alt="CAT"/>
              {isClicked && (
                <div className="development-icon animate">
                  В процессе разработки
                </div>
              )}
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={imgUrl3} alt="BEAR" className="bear" />
              {isClicked && (
                <div className="development-icon animate">
                  В процессе разработки
                </div>
              )}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="hidden mdd:flex justify-center items-center p-6 bg-purple-500 rounded-2xl "
            >
              <h3 className="pl-1.5 text-white font-semibold">1025+</h3>
              {isClicked && (
                <div className="development-icon animate">
                  В процессе разработки
                </div>
              )}
            </motion.div>
          </div>
          <div className="text-white pt-3">
            <h4 className="text-lg">{CollectionName}</h4>
            <div className="flex pt-2 gap-2">
              <img src={avatarUrl} alt="fox" />
              <h5>{nickName}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
