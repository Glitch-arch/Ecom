import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./Slices/cartSlice";
// will need reducer to make a store and then use the store in the app

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});
