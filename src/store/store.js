import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./slices/registerSlice";
import confirmCodeReducer from "./slices/confirnCode";
import nftSlice from "./slices/nft";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: userSlice,
  confirmCode: confirmCodeReducer,
  nft: nftSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    users: userSlice,
    confirmCode: confirmCodeReducer,
    nft: nftSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const persistor = persistStore(store);

export { store };
