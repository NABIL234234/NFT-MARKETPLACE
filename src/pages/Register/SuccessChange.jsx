import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// images
import Done from "../../assets/IMAGE/SECTION/Done.png";

export default function SuccessChange() {
  const email = useSelector((state) => state.confirmCode.email); // Получаем email из Redux

  return (
    <div className="mt-[70px] mb-[100px]">
      <div className="max-w-6xl px-5 mx-auto font-mono">
        <div className="flex flex-col rdd:items-center gap-[30px]">
          <div className="flex flex-col items-center gap-[15px] max-w-[290px] text-white">
            <img src={Done} alt="done" />
            <div className="flex flex-col gap-[15px]">
              <h2 className="text-2xl mb:text-3xl font-bold mt-2">
                Password changed!
              </h2>
              <p className="max-w-[300px] mt-2">
                Your account password has been changed:
              </p>
              <span className=" text-xl text-green-500">{email}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[20px] mt-[70px]">
            <NavLink
              to="/login"
              className="flex justify-center items-center w-[280px]  mb:w-[290px] h-[40px] text-white bg-purple-500 rounded-sm transition ease-in-out hover:bg-violet-600 active:bg-violet-700"
            >
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
