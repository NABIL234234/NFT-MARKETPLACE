import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  emailLoading: false,
  email: "",
  emailError: null,
};

export const postEmail = createAsyncThunk(
  "user/identification",
  async ({ email }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_MAIN_URL}/api/users/getResetCode?email=${email}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);


export const sendEmail = createAsyncThunk(
  "confirmCode/sendEmail",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_MAIN_URL}/api/users/getResetCode`,
        null,
        {
          params: { email },
        }
      );
      return { email, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const sendCode = createAsyncThunk("user/sendCode", async ({ email, code }) => {
  try {
    const response = await axios.put(
      `${
        import.meta.env.VITE_MAIN_URL
      }/api/users/confirmCode?email=${email}&code=${code}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});


const confirmCodeSlice = createSlice({
  name: "confirmCode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.emailLoading = true;
        state.emailError = null;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.emailLoading = false;
        state.email = action.payload.email;
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.emailLoading = false;
        state.emailError = action.payload || action.error.message;
      });
  },
});

export default confirmCodeSlice.reducer;
