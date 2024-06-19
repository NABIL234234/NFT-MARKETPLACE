import React, { useState, useEffect } from "react";
import Look from "../../../components/buttons/Look";
import shroomieMini from "../../../../src/assets/IMAGE/PLAY.SVG/nav/shroomie-mini.png";
import { useNavigate } from "react-router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Mashroom() {
  const navigate = useNavigate();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(timer);
          } else {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  const handleGetStarted = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/shop");
    } else {
      navigate("/login");
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
      className="mt-20 pb-[40px] sm:pb-[60px] bg-[url('./src/assets/IMAGE/SECTION/mushroom-root.png')] bg-no-repeat bg-center bg-cover relative z-[1]"
    >
      <div className="max-w-6xl mx-auto px-5 font-mono ">
        <div className="h-full">
          <div className="absolute bg-gradient-to-t from-purple-500 inset-x-0 bottom-0 h-5/6 z-[-1]" />
          <div className=" md:flex pt-[40px] md:pt-[380px] ">
            <div className="z-1">
              <div className="flex items-center gap-3 bg-zinc-800 w-[157px] h-[44px] py-5 px-[25px] rounded-[20px]">
                <img src={shroomieMini} alt="srm" />
                <h3 className="text-white">Shroomie</h3>
              </div>

              <div>
                <h2 className="text-white text-[51px] font-semibold">
                  Magic Mashrooms
                </h2>
              </div>

              <Look onClick={handleGetStarted} />
            </div>

            <div className="backdrop-blur-md bg-black/30 w-[295px] h-[144px] flex justify-center items-center rounded-xl  md:ml-auto mt-[30px] md:mt-auto">
              <div className="text-white">
                <h5 className="text-xs pb-[10px]">Auction ends in:</h5>
                <div className="flex gap-[10px]">
                  <div>
                    <h3 className="text-4xl font-bold">{hours}</h3>
                    <div className="pt-[10px]">Hours</div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">:</h3>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">{minutes}</h3>
                    <div className="pt-[10px]">Minutes</div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">:</h3>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">{seconds}</h3>
                    <div className="pt-[10px]">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
