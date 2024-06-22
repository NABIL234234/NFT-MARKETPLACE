import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { postUsers, confirmRegistration } from "../../store/actions/asyncAction";
import { useNavigate } from "react-router-dom";
import Inputs from "../../components/inputs/Inputs";
import { FaUser, FaUnlockAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// images
import SingUpImg from "../../assets/IMAGE/SECTION/SingUpImg.png";

export default function Register() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const password = watch("password");

  const onSubmit = async (data) => {
    if (!isConfirming) {
      try {
        const resultAction = await dispatch(postUsers({ newUser: data, navigate }));
        if (resultAction.payload) {
          setConfirmationData({ email: data.email, password: data.password });
          setIsConfirming(true);
        }
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    } else {
      try {
        const resultAction = await dispatch(confirmRegistration({
          email: confirmationData.email,
          password: confirmationData.password,
          code: data.code,
          navigate,
        }));
        if (resultAction.payload) {
          console.log("Данные с сервера:", resultAction.payload);
        }
      } catch (error) {
        console.error("Ошибка при подтверждении регистрации:", error);
      }
    }
  };

  return (
    <section className="mdd:flex gap-[15px] md:gap-[40px] lg:gap-[60px] xl:gap-[180px] font-mono">
      <div>
        <img src={SingUpImg} alt="SingUpImg" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center p-[15px]">
        <div className="flex flex-col">
          <div className="text-white pt-[20px]">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              {isConfirming ? "Confirm your account" : "Зарегистрироваться"}
            </h3>
            <p className="max-w-[410px] mdd:max-w-[400px] pt-[10px] lgg:pt-[20px]">
              {isConfirming ? "Введите код подтверждения, отправленный на вашу электронную почту" : "Добро пожаловать! Введите свои данные и начните создавать, собирать и продавать NFT.."}
            </p>
          </div>
          <div className="flex flex-col gap-[25px] md:gap-[30px] pt-[15px] mdd:pt-[20px]">
            {!isConfirming ? (
              <>
                <div className="relative">
                  <FaUser className="absolute top-[29%] left-[4%] z-10 text-xl" />
                  <Inputs
                    type="text"
                    placeholder="Имя пользователя"
                    name="username"
                    {...register("username", { required: "Введи имя пользователя" })}
                  />
                  {errors.username && (
                    <span className="error absolute text-red-500 font-sans">
                      {errors.username.message}
                    </span>
                  )}
                </div>

                <div className="relative">
                  <MdEmail className="absolute top-[29%] left-[4%] z-10 text-xl" />
                  <Inputs
                    type="email"
                    placeholder="Почта"
                    name="email"
                    {...register("email", { required: "Введи свой @email" })}
                  />
                  {errors.email && (
                    <span className="error absolute text-red-500 font-sans">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="relative">
                  <FaUnlockAlt className="absolute top-[29%] left-[4%] z-10 text-xl" />
                  <Inputs
                    type={showPassword ? "text" : "password"}
                    placeholder="Пароль"
                    name="password"
                    {...register("password", {
                      required: "Придумай новый пароль",
                      minLength: { value: 6, message: "Пароль должен содержать как минимум 6 символов!" },
                    })}
                  />
                  <div className="absolute top-[-6%] left-[300px]">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{ color: "black", position: "absolute", right: 10, top: 10 }}
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

                <div className="relative">
                  <FaUnlockAlt className="absolute top-[29%] left-[4%] z-10 text-xl" />
                  <Inputs
                    type={showPassword ? "text" : "password"}
                    placeholder="Подтвердить пароль"
                    name="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Подтверди пароль",
                      validate: (value) => value === password || "Пароли не совпадают!",
                    })}
                  />
                  {errors.confirmPassword && (
                    <span className="error absolute text-red-500 font-sans">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <div className="relative">
                <FaUnlockAlt className="absolute top-[29%] left-[4%] z-10 text-xl" />
                <Inputs
                  type="text"
                  placeholder="Подтвердить код"
                  name="code"
                  {...register("code", { required: "Введите код подтверждения" })}
                />
                {errors.code && (
                  <span className="error absolute text-red-500 font-sans">
                    {errors.code.message}
                  </span>
                )}
              </div>
            )}

            <button
              type="submit"
              className="bg-purple-600 hover:bg-white w-[200px] p-3 rounded-lg text-white hover:text-black "
            >
              {isConfirming ? "Подтвердить" : "Зарегистрироваться"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}