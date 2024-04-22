import React from "react";
import Inputs from "../../components/inputs/Inputs";
import GetStarted from "../../components/buttons/GetStart";

// images
import SingUpImg from "../../assets/IMAGE/SECTION/SingUpImg.png";
import User from "../../assets/IMAGE/PLAY.SVG/nav/User.png";
import Email from "../../assets/IMAGE/PLAY.SVG/nav/email.svg";
import Password from "../../assets/IMAGE/PLAY.SVG/nav/LockKey.svg";
import CreateAcc from "../../assets/IMAGE/PLAY.SVG/nav/CreateAcc.svg";

export default function index() {
  return (
    <>
      <div className="mdd:flex gap-[15px] md:gap-[40px] lg:gap-[60px] xl:gap-[180px]  font-mono">
        <div>
          <img src={SingUpImg} alt="SingUpImg" />
        </div>
        <div className="flex justify-center items-center p-[15px]">
          <div className="flex flex-col ">
            <div className="text-white pt-[20px] ">
              <h3 className="text-3xl  md:text-4xl lg:text-5xl font-semibold">
                Create account
              </h3>
              <p className=" max-w-[410px] mdd:max-w-[400px] pt-[10px] lgg:pt-[20px]">
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
              </p>
            </div>
            <div className="flex flex-col  gap-[10px] md:gap-[15px] pt-[15px] mdd:pt-[20px]">
              <Inputs type="text" icons={User} placeholder="UserName" />
              <Inputs type="email" icons={Email} placeholder="Email Address" />
              <Inputs type="Password" icons={Password} placeholder="Password" />
              <Inputs
                type="Password"
                icons={Password}
                placeholder="Confirm Password"
              />
              <div>
                <GetStarted imgUrl={CreateAcc} desc="Create Account" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
