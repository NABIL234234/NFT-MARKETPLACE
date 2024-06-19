import React, { useState, useEffect } from "react";
import SpaceMan from "../../../../src/assets/IMAGE/SECTION/SpaceMan.png";
import { IoMdMailUnread } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="flex flex-col bg-white p-[70px] rounded-lg shadow-lg transform scale-100 opacity-100 transition-transform transition-opacity duration-500">
        <p className="mb-4">Review submitted!</p>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function Digest() {
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
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

  const handleSend = (event) => {
    event.preventDefault(); // Prevent the default form submission action

    if (inputValue.trim() === "") {
      setError("Please enter text before submitting.");
    } else {
      // Logic for sending data (e.g., to a server)
      // Show the popup after submission
      setShowPopup(true);
      setError("");
      setInputValue(""); // Clear the input field after submission
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setError("");
    }
  };

  return (
    <form className="pt-[40px]" onSubmit={handleSend}>
      <div className="max-w-6xl mx-auto font-mono">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="flex flex-col mdd:flex-row gap-[30px] mdd:gap-[80px] bg-zinc-700 rounded-3xl p-[60px]  mb-[80px]"
        >
          <div>
            <img src={SpaceMan} alt="spaceman" />
          </div>
          <div>
            <div className="text-white pt-[14px]">
              <h2 className="max-w-[400px] text-4xl font-bold">
                Submit a complaint or review
              </h2>
              <p className="max-w-[370px] pt-[10px]">
                Systemic problems? Write about them
              </p>
            </div>

            <div className="relative mt-8 mb-[40px]">
              <div className="flex flex-col gap-2 mdd:relative w-full h-[56px]">
                <input
                  className="bg-white p-4 rounded-3xl w-full h-full z-0 focus:outline-none mdd:pr-[140px]"
                  placeholder="Write here"
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                />
                {error && <p className="text-red-500 absolute top-16">{error}</p>}
                <button
                  type="submit"
                  className="mdd:absolute flex items-center justify-center gap-[12px] rounded-2xl text-white hover:text-black border-2 bg-purple-500 hover:bg-white border-purple-500 hover:border-black transition ease-in-out delay-15 p-3 pl-[42px] pr-[42px] right-0 top-0 bottom-0"
                >
                  <IoMdMailUnread />
                  Send
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {showPopup && <Popup onClose={handleClose} />}
    </form>
  );
}
