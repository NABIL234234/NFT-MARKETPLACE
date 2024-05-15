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

export const postUsers = createAsyncThunk("user/register", async (newUser) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_MAIN_URL}/api/users/registration`,
      newUser
      // {
      //   mode: "no-cors",
      // }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const postUserLogin = createAsyncThunk("user/login", async (newUser) => {
  try {
    // Преобразуем объект newUser в строку параметров(важно запомнить что авторизацию нужно делать в формате x-www-form-urlencoded)
    const params = new URLSearchParams();
    params.append('username', newUser.username);
    params.append('password', newUser.password);

    const response = await axios.post(
      `${import.meta.env.VITE_MAIN_URL}/api/login`,
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    return response.data;
  
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const postCode = createAsyncThunk("user/identification", async ({email}) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_MAIN_URL}/api/users/getResetCode?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});