import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode"; // Fixed import
import { getUserLogin } from "../../store/actions/asyncAction";
import Inputs from "../../components/inputs/Inputs";
import { FaKey, FaUser, FaUnlockAlt } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SingUpImg from "../../assets/IMAGE/SECTION/SingUpImg.png";
import User from "../../assets/IMAGE/PLAY.SVG/nav/User.png";
import Password from "../../assets/IMAGE/PLAY.SVG/nav/LockKey.svg";

import "./login.scss"

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from || "/";
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(getUserLogin({ newUser: data, navigate }));
      if (resultAction.meta.requestStatus === "fulfilled") {
        const { id, tokens } = resultAction.payload;
        localStorage.setItem("accessToken", tokens.access_token);
        localStorage.setItem("userId", id);
        window.dispatchEvent(new Event("storage"));
        navigate(from, { replace: true });
      } else {
        setLoginError("Неправильное имя пользователя или пароль");
        console.error("Ошибка при выполнении запроса:", resultAction.payload);
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    localStorage.setItem("accessToken", credentialResponse.credential);
    localStorage.setItem("userId", decoded.sub);
    window.dispatchEvent(new Event("storage"));
    navigate(`/profile/${decoded.sub}`);
  };

  const handleGoogleError = () => {
    console.log("Login Failed");
  };

  const handleCloseError = () => {
    setLoginError("");
  };


  
  return (
    <section className="mdd:flex gap-[15px] md:gap-[40px] lg:gap-[60px] xl:gap-[150px] font-mono">
      <div>
        <img src={SingUpImg} alt="SingUpImg" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center p-[15px]">
        <div className="flex flex-col">
          <div className="text-white pt-[20px]">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Login to your account
            </h3>
            <p className="max-w-[410px] mdd:max-w-[400px] pt-[10px] lgg:pt-[20px]">
              Welcome! Enter your details and start creating, collecting, and
              selling NFTs.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] md:gap-[25px] pt-[15px] mdd:pt-[20px]">
            <div className="relative">
              <FaUser className="absolute top-[29%] left-[4%] z-10 text-xl" />
              <Inputs
                type="text"
                icons={User}
                placeholder="Username"
                {...register("username", { required: "Введите имя пользователя" })}
              />
              {errors.username && (
                <span className="error absolute text-red-500 font-sans">{errors.username.message}</span>
              )}
            </div>
            <div className="relative">
              <FaUnlockAlt className="absolute top-[29%] left-[4%] z-10 text-xl" />
              <Inputs
                type={showPassword ? "text" : "password"}
                icons={Password}
                placeholder="Password"
                {...register("password", {
                  required: "Введите пароль",
                  minLength: { value: 6, message: "Пароль должен содержать как минимум 6 символов!" },
                })}
              />
              <div className="absolute top-[-6%] left-[84%] mb:left-[55%]">
                <IconButton onClick={() => setShowPassword(!showPassword)} sx={{ color: "black", position: "absolute", right: 10, top: 10 }} aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
              {errors.password && (
                <span className="error absolute text-red-500 font-sans">{errors.password.message}</span>
              )}
            </div>
            <button type="submit" className="flex justify-center items-center gap-[10px] w-[150px] h-[40px] rounded-xl text-white hover:text-black bg-purple-500 transition ease-in-out delay-15  hover:bg-white  active:bg-purple-400">
              <IoLogIn />
              Login
            </button>
            <div>
              <NavLink to="/register" className="flex justify-center items-center gap-[20px] w-[300px] p-[3px] rounded-md text-white hover:text-black bg-purple-500 transition ease-in-out delay-15  hover:bg-white  active:bg-purple-400">
                Are you registered?
              </NavLink>
            </div>
            <div className="flex justify-center items-center gap-[20px] w-[300px] p-[3px] rounded-md text-black hover:text-white bg-white transition ease-in-out delay-15  hover:bg-purple-500   active:bg-purple-400">
              <FaKey />
              <NavLink to="/confirmAccount">
                Don't remember your password?
              </NavLink>
            </div>
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
          </div>
        </div>
      </form>
      {loginError && (
        <div className="error-message-container">
          <div className="error-message">
            {loginError}
            <button className="close-button" onClick={handleCloseError}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
