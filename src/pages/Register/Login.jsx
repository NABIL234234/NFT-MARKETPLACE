import React, { useState } from "react";
import Inputs from "../../components/inputs/Inputs";
import { useDispatch } from "react-redux";
import { postUsers } from "../../store/actions/asyncAction";

// images
import SingUpImg from "../../assets/IMAGE/SECTION/SingUpImg.png";
import User from "../../assets/IMAGE/PLAY.SVG/nav/User.png";
import Password from "../../assets/IMAGE/PLAY.SVG/nav/LockKey.svg";

export default function index() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const inputFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers()).then((data) => {
  //     console.log("Данные пользователей:", data);
  //   }).catch((error) => {
  //     console.error("Ошибка при получении данных пользователей:", error);
  //   });
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getUsers()); // Получение списка пользователей при монтировании компонента
  // }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(postUsers(formData));
      console.log("Данные с сервера:", resultAction.payload);
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  return (
    <>
      <form className="mdd:flex gap-[15px] md:gap-[40px] lg:gap-[60px] xl:gap-[180px]  font-mono">
        <div>
          <img src={SingUpImg} alt="SingUpImg" />
        </div>
        <div className="flex justify-center items-center p-[15px]">
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
            <div className="flex flex-col gap-[10px] md:gap-[15px] pt-[15px] mdd:pt-[20px]">
              <Inputs
                type="text"
                icons={User}
                placeholder="UserName"
                name="username"
                value={username}
                onChange={inputFormData}
              />

              <Inputs
                type="password"
                icons={Password}
                placeholder="Password"
                name="password"
                value={password}
                onChange={inputFormData}
              />

              <div>
                <button
                  type="submit"
                  className="w-[150px] h-[40px] rounded-xl bg-purple-500"
                  onClick={onSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
