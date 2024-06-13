import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import './CardGuide.css';

export default function CardGuide({ imgUrl, title, desc }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useTransform(
    mouseX,
    (x) => isHovered || isPressed ? (x - window.innerWidth / 2) * 0.1 : 0
  );
  const springY = useTransform(
    mouseY,
    (y) => isHovered || isPressed ? (y - window.innerHeight / 2) * 0.1 : 0
  );

  return (
    <motion.div
      className="CardGuide justify-center text-center bg-zinc-700 rounded-2xl text-white p-[30px] pb-[30px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
    >
      <div className="flex justify-center items-center">
        <motion.img
          src={imgUrl}
          alt="wallet"
          style={{ x: springX, y: springY }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div>
        <h3 className="text-[22px] pt-[20px] font-semibold">{title}</h3>
        <p className="text-[16px] pt-[10px]">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
