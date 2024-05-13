import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";

export default function ConfirmAccount() {
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(postUsers(data));
      console.log("Данные с сервера:", resultAction.payload);
      history.push("/");
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  return (
    <>
      <div className="mt-[70px] mb-[100px]">
        <div className="max-w-6xl px-5 mx-auto font-mono">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col rdd:items-center gap-[30px]"
          >
            <div className="flex items-center gap-4">
              <img src={market} alt="market" />
              <NavLink to="/" className="nav_link  text-2xl rdd:text-3xl">
                NFT Marketplace
              </NavLink>
            </div>
            <div className="flex flex-col justify-center items-center gap-[15px] max-w-[400px] text-white">
              <h2 className="text-3xl mb:text-4xl font-bold">
              Security Check
              </h2>
              <p >
              Enter the verification code sent to your account:
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-[10px]">
              <input
                name="code"
                {...register("code", {
                  required: "Введи код подтверждения",
                })}
                className="flex items-center w-[40px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
              />
              <input
                name="code"
                {...register("code", {
                  required: "Введи код подтверждения",
                })}
                className="flex items-center w-[40px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
              />
              <input
                name="code"
                {...register("code", {
                  required: "Введи код подтверждения",
                })}
                className="flex items-center w-[40px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
              />
              <input
                name="code"
                {...register("code", {
                  required: "Введи код подтверждения",
                })}
                className="flex items-center w-[40px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
              />
              <input
                name="code"
                {...register("code", {
                  required: "Введи код подтверждения",
                })}
                className="flex items-center w-[40px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
              />
              {errors.email && (
                <span className="error absolute text-red-500 font-sans">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-[20px]">
              <button
                type="submit"
                className="flex justify-center items-center w-[280px] rdd:w-[300px] mb:w-[400px] h-[40px] text-white bg-purple-500 rounded-sm transition ease-in-out  hover:bg-violet-600 active:bg-violet-700"
              >
                Next
              </button>
              <NavLink
                to="/login"
                className="flex justify-center items-center text-purple-500 rounded-sm hover:text-violet-600"
              >
                back
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
