import { createSlice } from "@reduxjs/toolkit";
import { postUsers } from "../actions/asyncAction";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUsers.pending, (state) => {
        (state.status = true), (state.error = null);
      })
      .addCase(postUsers.fulfilled, (state, action) => {
        (state.status = false), (state.user = action.payload);
      })
      .addCase(postUsers.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
