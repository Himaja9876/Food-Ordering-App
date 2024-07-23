import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";    //default export of the module as cartReducer (cartSlice.reducer)

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;