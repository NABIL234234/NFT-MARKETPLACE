import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MetaMaskWallet, addBankCard } from "../../store/slices/Wallet";
import WalletModal from "../Wallet/Modal_wallet";
import BankCardModal from "../Wallet/Modal_BankCard";
import SingUpImg from "../../assets/IMAGE/SECTION/SingUpImg.png";
import MetamaskFox from "../../assets/IMAGE/SECTION/MetaMask_Fox.svg.png";
import BankCardImg from "../../assets/IMAGE/SECTION/Credit Card.png";
import { FcOk } from "react-icons/fc";

export default function Wallet() {
  const dispatch = useDispatch();
  const {
    walletLoading,
    wallet,
    walletError,
    bankCardLoading,
    bankCard,
    bankCardError,
  } = useSelector((state) => state.wallet);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletPassword, setWalletPassword] = useState("");
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [bankCardModalOpen, setBankCardModalOpen] = useState(false);

  const handleMetaMaskClick = () => {
    setWalletModalOpen(true);
  };

  const handleBankCardClick = () => {
    setBankCardModalOpen(true);
  };

  const handleWalletModalClose = () => {
    setWalletModalOpen(false);
  };

  const handleBankCardModalClose = () => {
    setBankCardModalOpen(false);
  };

  const handleWalletModalSubmit = () => {
    dispatch(MetaMaskWallet({ walletAddress, walletPassword }));
    setWalletModalOpen(false);
  };

  const handleBankCardModalSubmit = (cardDetails) => {
    dispatch(addBankCard(cardDetails));
    setBankCardModalOpen(false);
  };

  return (
    <div className="mdd:flex gap-[20px] md:gap-[40px] lg:gap-[60px] xl:gap-[180px] font-mono smm:text-black">
      <div>
        <img src={SingUpImg} alt="Sign Up" className="rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center items-center p-[20px] rounded-lg shadow-lg ">
        <div className="flex flex-col">
          <div className="text-white pt-[30px]">
            <h3 className="text-4xl lg:text-5xl font-semibold">
              Connect wallet
            </h3>
            <p className="max-w-md pt-4 text-xl">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-8 text-white">
            <button
              onClick={handleMetaMaskClick}
              className="w-80 h-14 rounded-xl bg-gray-800 hover:bg-gray-700 border-2 border-purple-600 flex justify-start items-center gap-4 px-4"
            >
              <img src={MetamaskFox} className="w-10" alt="Metamask Logo" />
              <h3 className="text-2xl font-semibold">Metamask</h3>
            </button>
            <button
              onClick={handleBankCardClick}
              className="w-80 h-14 rounded-xl bg-gray-800 hover:bg-gray-700 border-2 border-purple-600 flex justify-start items-center gap-4 px-4"
            >
              <img src={BankCardImg} className="w-10" alt="Bank Card Logo" />
              <h3 className="text-2xl font-semibold">Bank Card</h3>
            </button>
          </div>
          {walletLoading && <p className="pt-4">Loading...</p>}
          {wallet && (
            <div className="pt-4 flex items-center text-green-500">
              <FcOk />
              Wallet connected successfully!
            </div>
          )}
          {walletError && (
            <div className="pt-4 text-red-500">
              {walletError === "Incorrect wallet details provided" ? (
                <p>MetaMask с адресом не найден</p>
              ) : (
                <p>{walletError}</p>
              )}
            </div>
          )}
          {bankCardLoading && <p className="pt-4">Loading...</p>}
          {bankCard && (
            <div className="pt-4 flex items-center text-green-500">
              <FcOk />
              Bank card connected successfully!
            </div>
          )}
          {bankCardError && (
            <div className=" text-red-500">
              <p>{bankCardError}</p>
            </div>
          )}
        </div>
      </div>
      <WalletModal
        open={walletModalOpen}
        onClose={handleWalletModalClose}
        onSubmit={handleWalletModalSubmit}
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
        walletPassword={walletPassword}
        setWalletPassword={setWalletPassword}
      />
      <BankCardModal
        open={bankCardModalOpen}
        onClose={handleBankCardModalClose}
        onSubmit={handleBankCardModalSubmit}
      />
    </div>
  );
}
