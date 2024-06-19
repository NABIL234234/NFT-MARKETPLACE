import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./slices/registerSlice";
import confirmCodeReducer from "./slices/confirnCode";
import nftSlice from "./slices/nft";
import rankingsSlice from "./slices/rankings";
import walletSlice from "./slices/Wallet"

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: userSlice,
  confirmCode: confirmCodeReducer,
  nft: nftSlice,
  rankings: rankingsSlice,
  wallet: walletSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
