import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  emailLoading: false,
  email: "",
  emailError: null,
};

export const sendEmail = createAsyncThunk(
  "confirmCode/sendEmail",
  async ({ email, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_MAIN_URL}/api/users/getResetCode`,
        null,
        { params: { email } }
      );
      navigate("/identification");
      return { email, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

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

export const sendCode = createAsyncThunk(
  "confirmCode/sendCode",
  async ({ email, code, navigate }) => {
    try {
      const response = await axios.put(
        `${
          import.meta.env.VITE_MAIN_URL
        }/api/users/confirmCode?email=${email}&code=${code}`
      );
      navigate("/newPassword");
      return response.data;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }
);

export const sendNewPassword = createAsyncThunk(
  "confirmCode/sendNewPassword",
  async ({ email, newPassword, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_MAIN_URL}/api/users/dropForgottenPassword`,
        null,
        { params: { email, newPassword } }
      );
      navigate("/successChange");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const confirmCodeSlice = createSlice({
  name: "confirmCode",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
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
      })
      .addCase(sendNewPassword.pending, (state) => {
        state.emailLoading = true;
        state.emailError = null;
      })
      .addCase(sendNewPassword.fulfilled, (state) => {
        state.emailLoading = false;
      })
      .addCase(sendNewPassword.rejected, (state, action) => {
        state.emailLoading = false;
        state.emailError = action.payload || action.error.message;
      });
  },
});

export const { setEmail } = confirmCodeSlice.actions;
export default confirmCodeSlice.reducer;