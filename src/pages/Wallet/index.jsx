import React from "react";
import Wallets from "../../components/Wallets/Wallets";

// images
import SingUpImg from "../../assets/IMAGE/SECTION/SingUpImg.png";
import MetamaskFox from "../../assets/IMAGE/PLAY.SVG/nav/MetamaskFox.svg";
import WalletConnect from "../../assets/IMAGE/PLAY.SVG/nav/WalletConnect.svg";
import CoinBase from "../../assets/IMAGE/PLAY.SVG/nav/Coinbase.svg";

export default function Wallet() {
  return (
    <div className="mdd:flex gap-[20px] md:gap-[40px] lg:gap-[60px] xl:gap-[180px] font-mono smm:text-black ">
      <div>
        <img src={SingUpImg} alt="SingUpImg" />
      </div>
      <div className="flex justify-center items-center p-[20px]">
        <div className="flex flex-col ">
          <div className="text-white pt-[30px] ">
            <h3 className="text-3xl  md:text-4xl lg:text-5xl  font-semibold">
              Connect wallet
            </h3>
            <p className="max-w-[400px] pt-[20px] text-xl">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>
          </div>
          <div className="mt-[20px] md:mt-[40px]">
            <Wallets imgUrl={MetamaskFox} desc="MetamaskFox" />
            <Wallets imgUrl={WalletConnect} desc="Wallet Connect" />
            <Wallets imgUrl={CoinBase} desc="CoinBase" />
          </div>
        </div>
      </div>
    </div>
  );
}
