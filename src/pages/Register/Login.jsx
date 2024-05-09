import React, { useState } from "react";
import Inputs from "../../components/inputs/Inputs";
import { useDispatch } from "react-redux";
import { postUserLogin } from "../../store/actions/asyncAction";

// images
import SingUpImg from "../../assets/IMAGE/SECTION/SingUpImg.png";
import User from "../../assets/IMAGE/PLAY.SVG/nav/User.png";
import Password from "../../assets/IMAGE/PLAY.SVG/nav/LockKey.svg";
import { useForm } from "react-hook-form";

export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => { 
    try {
      const resultAction = await dispatch(postUserLogin(data));
      console.log("Данные с сервера:", resultAction.payload);
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  return (
    <>
      <section className="mdd:flex gap-[15px] md:gap-[40px] lg:gap-[60px] xl:gap-[180px]  font-mono">
        <div>
          <img src={SingUpImg} alt="SingUpImg" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center p-[15px]"
        >
          <div className="flex flex-col ">
            <div className="text-white pt-[20px] ">
              <h3 className="text-3xl  md:text-4xl lg:text-5xl font-semibold">
                Login to your account
              </h3>
              <p className=" max-w-[410px] mdd:max-w-[400px] pt-[10px] lgg:pt-[20px]">
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] md:gap-[25px] pt-[15px] mdd:pt-[20px]">
              <div>
                <Inputs
                  type="text"
                  icons={User}
                  placeholder="UserName"
                  name="username"
                  {...register("username", {
                    required: "Введи имя пользователя",
                  })}
                />
                {errors.username && (
                  <span className="error absolute text-red-500 font-sans">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div>
                <Inputs
                  type="password"
                  icons={Password}
                  placeholder="Password"
                  name="password"
                  {...register("password", {
                    required: "Придумай новый пароль",
                  })}
                />
                {errors.password && (
                  <span className="error absolute text-red-500 font-sans">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-[150px] h-[40px] rounded-xl bg-purple-500"
     
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
