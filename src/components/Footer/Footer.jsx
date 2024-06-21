import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import Border from "../../../src/assets/IMAGE/SECTION/Border.svg";
import { IoMdMailUnread } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="flex flex-col bg-white p-[70px] rounded-lg shadow-lg transform scale-100 opacity-100 transition-transform  duration-500">
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

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSend = (event) => {
    event.preventDefault(); // Prevent the default form submission action

    if (inputValue.trim() === "") {
      setError("Пожалуйста, введите текст перед отправкой.");
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
    <>
      <footer className="p-[20px] bg-zinc-700 ">
        <div className="max-w-6xl mx-auto font-mono">
          <div className="block md:flex justify-between pt-[40px]">
            <div>
              <div className="flex items-center gap-4">
                <img src={market} alt="market" />
                <NavLink to="/" className="nav_link text-3xl">
                  NFT Marketplace
                </NavLink>
              </div>

              <div className="text-stone-400 pt-[30px] text-xl">
                <h4 className="max-w-[380px]">
                  NFT marketplace у нас есть соц.сети
                </h4>
                <h4 className="pt-[20px]">
                  Присоединяйтесь к нашему сообществу
                </h4>
              </div>
              <div className="flex gap-[12px] pt-[15px] text-3xl text-purple-500">
                <a
                  href="https://www.instagram.com/magic_nftmarcketplace?igsh=ZmplY3c0ZTI4eWI5"
                  className="text-3xl"
                >
                  <CiInstagram />
                </a>
                <a
                  href="https://t.me/magic_nft_marketplace"
                  className="text-3xl"
                >
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
            <div className="mt-[30px] text-xl  flex flex-col gap-[12px]  text-white">
              <div>
                <h3 className=" flex gap-[10px] items-center font-bold text-stone-400 ">
                  Навигация <FaArrowDown />
                </h3>
                <ul className="mt-[22px]">
                  <li>
                    <NavLink to="/shop" exact="true" className="nav_link">
                      Marketplace
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <NavLink to="/rankings" exact="true" className="nav_link">
                      Rankings
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <NavLink to="/wallet" exact="true" className="nav_link">
                      Connect Wallet
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <form onSubmit={handleSend}>
              <div className="text-white pt-[30px]">
                <h2 className=" text-4xl font-bold">
                  {" "}
                  Отправить жалобу или отзыв
                </h2>
                <p className="flex items-center gap-[10px] max-w-[370px] pt-[15px] text-stone-400">
                  Системные проблемы? Напишите об этом <FaArrowDown />
                </p>
              </div>
              <div className="relative mt-8 mb-[40px]">
                <div className=" flex flex-col gap-2 mdd:relative w-full h-[56px]">
                  <input
                    className="bg-white p-4 rounded-3xl w-full h-full z-0 focus:outline-none mdd:pr-[140px]"
                    placeholder="Напиши"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                  />
                  {error && (
                    <p className="text-red-500 absolute top-28 mdd:top-16">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="mdd:absolute flex items-center justify-center gap-[12px] rounded-2xl text-white hover:text-black border-2 bg-purple-500 hover:bg-white border-purple-500 hover:border-black  transition ease-in-out delay-15 p-3 pl-[42px] pr-[42px] right-0 top-0 bottom-0"
                  >
                    <IoMdMailUnread />
                    Cюда
                  </button>
                </div>
              </div>
              {showPopup && <Popup onClose={handleClose} />}
            </form>
          </div>
          <div className="pt-[30px]">
            <img src={Border} alt="border" />

            <h3 className="text-stone-400 pt-[20px] pb-[40px]">
              Ⓒ NFT Market. Здесь были Набиль и Даниил.
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
