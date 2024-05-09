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
      `${import.meta.env.VITE_REG_URL}/api/users/registration`,
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
    const response = await axios.post(
      `${import.meta.env.VITE_LOG_URL}/api/login `,
      newUser
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
