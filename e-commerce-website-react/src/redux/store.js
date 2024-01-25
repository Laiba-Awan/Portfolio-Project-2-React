import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user";
import cart from "./cart";

const rootReducer = combineReducers({
  user,
  cart,
});
const persistedReducer = persistReducer(
  {
    key: "root: AppData",
    storage,
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
