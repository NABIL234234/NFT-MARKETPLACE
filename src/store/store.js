import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/registerSlice"

const store = configureStore({
  reducer: {
   users: userSlice
  }
})


export default store;