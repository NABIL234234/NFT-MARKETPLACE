import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { sendNewPassword } from "../../store/slices/confirnCode";
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

export default function NewPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    minLength,
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();

  const { email } = useSelector((state) => state.confirmCode);

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate("/confirmAccount");
    }
  }, [email, navigate]);

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    console.log("Email из состояния Redux:", email,);

    try {
      const resultAction = await dispatch(
        sendNewPassword({ email, newPassword: data.password, navigate })
      );
      console.log("Данные с сервера:", resultAction.payload);

      // Перенаправление на другую страницу при успешном запросе
     
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
      // Остаемся на текущей странице в случае ошибки
    }
  };

  return (
    <div className="mt-[70px] mb-[100px]">
      <div className="max-w-6xl px-5 mx-auto font-mono">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col rdd:items-center gap-[25px]"
        >
          <div className="flex items-center gap-4">
            <img src={market} alt="market" />
            <NavLink to="/" className="nav_link text-2xl rdd:text-3xl">
              NFT Marketplace
            </NavLink>
          </div>
          <div className="flex flex-col justify-center items-center gap-[15px] max-w-[400px] text-white">
            <h2 className="text-2xl mb:text-3xl font-bold">
              Create a new password
            </h2>
            <p className="max-w-[300px]">Choose a secure password!</p>
          </div>
          <div className="mt-[10px]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              {...register("password", {
                required: "Введите новый пароль",
                minLength: {
                  value: 6,
                  message: "Пароль должен содержать как минимум 6 символа!",
                },
              })}
              className="relative flex items-center w-[280px] rdd:w-[300px] mb:w-[400px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
            />
            <div className="absolute top-[46%] left-[60%]">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                sx={{ color: "white" }}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            {errors.password && (
              <span className="error absolute text-red-500 font-sans">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="mt-[10px]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Подтвердите новый пароль",
                validate: (value) =>
                  value === password || "Пароли не совпадают!",
              })}
              className="flex items-center w-[280px] rdd:w/[300px] mb:w-[400px] p-[5px] rounded-sm text-white bg-zinc-800 outline-none border-[1px]"
            />

            {errors.confirmPassword && (
              <span className="error absolute text-red-500 font-sans">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[20px]">
            <button
              type="submit"
              className="flex justify-center items-center w-[280px] rdd:w-[300px] mb:w/[400px] h-[40px] text-white bg-purple-500 rounded-sm transition ease-in-out hover:bg-violet-600 active:bg-violet-700"
            >
              Next
            </button>
            <NavLink
              to="/login"
              className="flex justify-center items-center text-purple-500 rounded-sm hover:text-violet-600"
            >
              Back
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
