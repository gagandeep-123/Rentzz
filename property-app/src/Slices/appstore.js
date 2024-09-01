import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice.js"
import propertyReducer from "./propertyslice.js"
import userReducer from "./userSlice.js"


const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    property: propertyReducer,
    user: userReducer
  
  },
});

export default appStore;
