import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { sendCode } from "../../store/slices/confirnCode";

// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";

export default function ConfirmAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { email } = useSelector((state) => state.confirmCode);

  useEffect(() => {
    if (email) return;
    navigate("/confirmAccount");
  }, []);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(
        sendCode({ code: Object.values(data).join(""), email })
      );
      console.log("Данные с сервера:", resultAction.payload);
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
    navigate("/newPassword");
  };

  return (
    <>
      <div className="mt-[70px] mb-[100px]">
        <div className="max-w-6xl px-5 mx-auto font-mono">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col rdd:items-center gap-[30px]"
          >
            <div className="flex items-center gap-41ё ">
              <img src={market} alt="market" />
              <NavLink to="/" className="nav_link  text-2xl rdd:text-3xl">
                NFT Marketplace
              </NavLink>
            </div>
            <div className="flex flex-col justify-center items-center gap-[15px] max-w-[400px] text-white">
              <h2 className="text-3xl mb:text-4xl font-bold">Security Check</h2>
              <p>Enter the verification code sent to your account:</p>
              <span className="text-xl text-green-500">{email}</span>
            </div>

            <div className="flex justify-center gap-2 mt-[10px]">
              <input
                name="code_1"
                {...register("code_1", {
                  required: "Введи код подтверждения",
                })}
                className="flex items-center w-[40px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
              />
              <input
                name="code_2"
                {...register("code_2", {
                  required: "Введи код подтверждения",
                })}
                className="flex items-center w-[40px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
              />
              <input
                name="code_3"
                {...register("code_3", {
                  required: "Введи код подтверждения",
                })}
                className="flex items-center w-[40px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
              />
              <input
                name="code_4"
                {...register("code_4", {
                  required: "Введи код подтверждения",
                })}
                className="flex items-center w-[40px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
              />
              <input
                name="code_5"
                {...register("code_5", {
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
                to="/confirmAccount"
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
