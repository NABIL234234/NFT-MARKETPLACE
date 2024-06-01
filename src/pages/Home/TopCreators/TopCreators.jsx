import React from "react";
import CardCreators from "../../../components/CardCreators/CardCreators";
import { useNavigate } from "react-router";
// images

import KeepTrial from "../../../../src/assets/IMAGE/SECTION/Keepitreal.png";
import DigiLab from "../../../../src/assets/IMAGE/SECTION/DIGIlab.png";
import GravityOne from "../../../../src/assets/IMAGE/SECTION/gravityOne.png";
import Juanie from "../../../../src/assets/IMAGE/SECTION/Juanie.png";
import BlueWhale from "../../../../src/assets/IMAGE/SECTION/BlueWhale.png";
import MrFox from "../../../../src/assets/IMAGE/SECTION/Mr Fox.png";
import ShroomieAang from "../../../../src/assets/IMAGE/SECTION/Shroomie Aang.png";
import Robotica from "../../../../src/assets/IMAGE/SECTION/Robotica.png";
import RustyRobot from "../../../../src/assets/IMAGE/SECTION/RustyRobot.png";
import Anumakid from "../../../../src/assets/IMAGE/SECTION/Anumakid.png";
import Dotgu from "../../../../src/assets/IMAGE/SECTION/Dotgu.png";
import Chiblier from "../../../../src/assets/IMAGE/SECTION/Chiblier.png";
import ViewRankings from "../../../components/buttons/ViewRankings";


export default function TopCreators() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/rankings");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <section className="pt-12 mdd:pt-40 px-5">
        <div className="max-w-6xl mx-auto font-mono">
          <div>
            <div className=" md:flex items-center pb-[20px] mdd:pb-[60px]">
              <div className="font-semibold text-white ">
                <h2 className=" text-3xl mdd:text-5xl">Top creators</h2>
                <p className="text-lg sm:text-xl pt-3">
                  Checkout Top Rated Creators on the NFT Marketplace
                </p>
              </div>
              <div className="flex mb:hidden justify-start flex-wrap">
                <CardCreators
                  number="1"
                  imgUrl={KeepTrial}
                  nickName="Keepitreal"
                  ETH="34.53 ETH"
                />
                <CardCreators
                  number="2"
                  imgUrl={DigiLab}
                  nickName="DigiLab"
                  ETH="32.52 ETH"
                />
                <CardCreators
                  number="3"
                  imgUrl={GravityOne}
                  nickName="GravityOne"
                  ETH="30.04 ETH"
                />
                <CardCreators
                  number="4"
                  imgUrl={Juanie}
                  nickName="Juanie"
                  ETH="30.01 ETH"
                />

                <CardCreators
                  number="5"
                  imgUrl={BlueWhale}
                  nickName="BlueWhale"
                  ETH="29.02 ETH"
                />
                <CardCreators
                  number="6"
                  imgUrl={MrFox}
                  nickName="Mr Fox"
                  ETH="29.00 ETH"
                />
                <CardCreators
                  number="7"
                  imgUrl={ShroomieAang}
                  nickName="Shroomie Aang"
                  ETH="28.22 ETH"
                />
                <CardCreators
                  number="8"
                  imgUrl={Robotica}
                  nickName="Robotica"
                  ETH="27.33 ETH"
                />

                <CardCreators
                  number="9"
                  imgUrl={RustyRobot}
                  nickName="RustyRobot"
                  ETH="25.34 ETH"
                />
                <CardCreators
                  number="10"
                  imgUrl={Anumakid}
                  nickName="Anumakid"
                  ETH="25.24 ETH"
                />
                <CardCreators
                  number="11"
                  imgUrl={Dotgu}
                  nickName="Dotgu"
                  ETH="20.22 ETH "
                />
                <CardCreators
                  number="12"
                  imgUrl={Chiblier}
                  nickName="Chiblier"
                  ETH="19.11 ETH"
                />
              </div>
              <ViewRankings onClick={handleGetStarted} />
            </div>

            <div>
              <div className="hidden mb:flex justify-start flex-wrap">
                <CardCreators
                  number="1"
                  imgUrl={KeepTrial}
                  nickName="Keepitreal"
                  ETH="34.53 ETH"
                />
                <CardCreators
                  number="2"
                  imgUrl={DigiLab}
                  nickName="DigiLab"
                  ETH="32.52 ETH"
                />
                <CardCreators
                  number="3"
                  imgUrl={GravityOne}
                  nickName="GravityOne"
                  ETH="30.04 ETH"
                />
                <CardCreators
                  number="4"
                  imgUrl={Juanie}
                  nickName="Juanie"
                  ETH="30.01 ETH"
                />

                <CardCreators
                  number="5"
                  imgUrl={BlueWhale}
                  nickName="BlueWhale"
                  ETH="29.02 ETH"
                />
                <CardCreators
                  number="6"
                  imgUrl={MrFox}
                  nickName="Mr Fox"
                  ETH="29.00 ETH"
                />
                <CardCreators
                  number="7"
                  imgUrl={ShroomieAang}
                  nickName="Shroomie Aang"
                  ETH="28.22 ETH"
                />
                <CardCreators
                  number="8"
                  imgUrl={Robotica}
                  nickName="Robotica"
                  ETH="27.33 ETH"
                />

                <CardCreators
                  number="9"
                  imgUrl={RustyRobot}
                  nickName="RustyRobot"
                  ETH="25.34 ETH"
                />
                <CardCreators
                  number="10"
                  imgUrl={Anumakid}
                  nickName="Anumakid"
                  ETH="25.24 ETH"
                />
                <CardCreators
                  number="11"
                  imgUrl={Dotgu}
                  nickName="Dotgu"
                  ETH="20.22 ETH "
                />
                <CardCreators
                  number="12"
                  imgUrl={Chiblier}
                  nickName="Chiblier"
                  ETH="19.11 ETH"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
