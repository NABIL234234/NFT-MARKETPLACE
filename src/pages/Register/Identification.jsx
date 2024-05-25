import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { sendCode } from "../../store/slices/confirnCode";

// images
import market from "../../../src/assets/IMAGE/PLAY.SVG/nav/Storefront.svg";

const OTPInput = ({ length, onChange }) => {
  const [values, setValues] = useState(Array(length).fill(""));
  const inputsRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newValues = [...values];
    newValues[index] = value.slice(-1);
    setValues(newValues);
    onChange(newValues.join(""));
    if (value && index < length - 1) {
      inputsRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const newValues = paste.split("").slice(0, length);
    setValues(newValues);
    onChange(newValues.join(""));
    e.preventDefault();
  };

  const handleKeyDown = (e, index) => {
    switch (e.key) {
      case "ArrowUp":
      case "ArrowLeft":
        if (index > 0) {
          inputsRefs.current[index - 1].focus();
        }
        break;
      case "ArrowDown":
      case "ArrowRight":
        if (index < length - 1) {
          inputsRefs.current[index + 1].focus();
        }
        break;
      default:
        break;
    }
  };

  return (
    <div onPaste={handlePaste} style={{ display: "flex", gap: "5px" }}>
      {values.map((value, index) => (
        <input
          key={index}
          ref={(el) => (inputsRefs.current[index] = el)}
          type="text"
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength="1"
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            textAlign: "center",
            borderRadius: "4px",
            border: "1px solid rgba(0,0,0,0.3)",
            outline: "none",
          }}
        />
      ))}
    </div>
  );
};

export default function ConfirmAccount() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.confirmCode);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!email) {
      navigate("/confirmAccount");
    }
  }, [email, navigate]);

  const onSubmit = async () => {
    try {
      const resultAction = await dispatch(
        sendCode({ code: otp, email, navigate })
      );
      console.log("Данные с сервера:", resultAction.payload);
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
      if (error.response && error.response.status === 400) {
        setOtp(""); // Очистка введенного кода
      }
    }
  };

  return (
    <div className="mt-[70px] mb-[100px]">
      <div className="max-w-6xl px-5 mx-auto font-mono">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-[30px]"
        >
          <div className="flex items-center gap-4">
            <img src={market} alt="market" />
            <NavLink to="/" className="nav_link text-2xl rdd:text-3xl">
              NFT Marketplace
            </NavLink>
          </div>
          <div className="flex flex-col justify-center items-center gap-[15px] max-w-[400px] text-white">
            <h2 className="text-3xl mb:text-4xl font-bold">Security Check</h2>
            <p>Enter the verification code sent to your account:</p>
            <span className="text-xl text-green-500">{email}</span>
          </div>
          <div className="flex justify-center gap-2 mt-[10px]">
            <OTPInput length={5} onChange={setOtp} />
          </div>
          <div className="flex flex-col gap-[20px]">
            <button
              type="submit"
              className="flex justify-center items-center w-[280px] rdd:w-[300px] mb:w-[400px] h-[40px] text-white bg-purple-500 rounded-sm transition ease-in-out hover:bg-violet-600 active:bg-violet-700"
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
  );
}
