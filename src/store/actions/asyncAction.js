import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const getUsers = createAsyncThunk("user/Users", async (newUsers) => {
//   try {
//     const response = await axios.get(
//       `${import.meta.env.VITE_MAIN_URL}/api/users/registration`,
//       newUsers
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// });

export const postUsers = createAsyncThunk(
  "user/register",
  async ({ newUser, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_MAIN_URL}/api/registrations`,
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Если регистрация прошла успешно, переходим к шагу подтверждения
      if (response.status === 201 || response.status === 200) {
        return { data: response.data, navigate };
      } else {
        throw new Error("Ошибка при регистрации пользователя");
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса регистрации:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const confirmRegistration = createAsyncThunk(
  "user/confirmRegistration",
  async ({ email, password, code, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_MAIN_URL}/api/registrations/confirm`,
        null,
        {
          params: {
            email,
            code,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/login");
      return response.data;
    } catch (error) {
      console.error("Error during confirmation request:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// export const postUserLogin = createAsyncThunk(
//   "user/login",
//   async ({ newUser, navigate }) => {
//     try {
//       // Преобразуем объект newUser в строку параметров(важно запомнить что авторизацию нужно делать в формате x-www-form-urlencoded)
//       const params = new URLSearchParams();
//       params.append("username", newUser.username);
//       params.append("password", newUser.password);

//       const response = await axios.post(
//         `${import.meta.env.VITE_MAIN_URL}/api/login`,
//         params,
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//         }
//       );
//       localStorage.setItem("accessToken", response.data.tokens.access_token);
//       navigate("/");
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
// );

export const getUserLogin = createAsyncThunk(
  "user/login",
  async ({ newUser, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_MAIN_URL}/api/auth`,
        {
          params: {
            username: newUser.username,
            password: newUser.password,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("Ответ сервера:", response.data);

      // Проверяем структуру данных в ответе сервера
      const data = response.data.data;
      console.log("Данные:", data);

      if (data && data.tokens && data.tokens.access_token) {
        const accessToken = data.tokens.access_token;
        localStorage.setItem("accessToken", accessToken);
        navigate("/");
        return data;
      } else {
        throw new Error("Токен не найден в ответе сервера");
      }
    } catch (error) {
      console.error("Error during login request:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

