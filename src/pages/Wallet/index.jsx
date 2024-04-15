import React from "react";
import Wallets from "../../components/Wallets/Wallets"

// images
import SingUpImg from "../../assets/IMAGE/SECTION/SingUpImg.png";
import MetamaskFox from "../../assets/IMAGE/PLAY.SVG/nav/MetamaskFox.svg"
import WalletConnect from "../../assets/IMAGE/PLAY.SVG/nav/WalletConnect.svg"
import CoinBase from "../../assets/IMAGE/PLAY.SVG/nav/Coinbase.svg"

export default function () {
  return (
    <div className="flex h-[610px] gap-[180px] font-mono">
      <div>
        <img src={SingUpImg} alt="SingUpImg" />
      </div>
      <div>
        <div className="text-white pt-[100px]">
          <h3 className="text-5xl font-semibold">Connect wallet</h3>
          <p className="max-w-[400px] pt-[20px]">
            Choose a wallet you want to connect. There are several wallet
            providers.
          </p>
        </div>
        <div className="mt-[40px]">
          <Wallets imgUrl={MetamaskFox} desc="MetamaskFox"/>
          <Wallets imgUrl={WalletConnect} desc="Wallet Connect"/>
          <Wallets imgUrl={CoinBase} desc="CoinBase"/>
        </div>
      </div>
    </div>
  );
}
