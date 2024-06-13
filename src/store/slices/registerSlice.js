import { createSlice } from "@reduxjs/toolkit";
import { getGoogleToken, RedirectGoogle, postUsers } from "../actions/asyncAction";

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
        state.loading = true;
        state.error = null;
      })
      .addCase(postUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(postUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getGoogleToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGoogleToken.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getGoogleToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(RedirectGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RedirectGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(RedirectGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
