import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/registerSlice"
import confirnCode from "./slices/confirnCode";

const store = configureStore({
  reducer: {
   users: userSlice,
   confirmCode: confirnCode,
  }
})


export default store;